import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cx from 'classnames';
import { Col, Row, Progress } from 'reactstrap';

import Widget from '../../components/Widget/Widget';
import Trend from 'react-trend';
// import MainChart from './components/Charts/MainChart';
import TaskContainer from './components/TaskContainer/TaskContainer';
import BigStat from './components/BigStat/BigStat';
import TableContainer from './components/TableContainer/TableContainer';
import Calendar from '../dashboard/components/calendar/Calendar';
import HighchartsReact from 'highcharts-react-official'

import mock from './mock';
import s from './Home.module.scss';
// import { receiveDataRequest } from '../../actions/analytics';
import { receiveDataRequestLunar } from '../../actions/home';


class Home extends Component {
    static propTypes = {
        marketBreakdown: PropTypes.any,
        assetList: PropTypes.any,
        btcMarketCap: PropTypes.any,
        topTenMarketCap: PropTypes.any,
        isReceiving: PropTypes.bool,
        dispatch: PropTypes.func.isRequired,
    };

    static defaultProps = {
        marketBreakdown: {},
        assetList: [],
        btcMarketCap: {},
        topTenMarketCap: [],
        isReceiving: false
    };

    getRandomData = () => {
      const arr = [];
      for (let i = 0; i < 25; i += 1) {
        arr.push(Math.random().toFixed(1) * 10);
      }
      return arr;
    }

    donut = () => {
      let series = [
        {
          name: 'Top 10 Assets By Market Cap',
          data: this.props.topTenMarketCap.map(s => {
            return {
              name: s.symbol,
              y: s.market_cap
            }
          })
        }
      ];
      return {
        chart: {
          type: 'pie',
          height: 120,
          backgroundColor: 'rgba(0,0,0,0)',
        },
        credits: {
          enabled: false
        },
        title: false,
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: false
            },
            borderWidth: 0,
            showInLegend: true,
            innerSize: 80,
            size: 100,
            states: {
              hover: {
                halo: {
                  size: 1
                }
              }
            }
          }
        },
        colors: ['#2d8515', '#2477ff', '#db2a34'],
        legend: {
          align: 'right',
          verticalAlign: 'middle',
          layout: 'vertical',
          itemStyle: {
            color: 'rgba(244, 244, 245, 0.6)',
            fontWeight: 400,
          },
          itemHoverStyle: {
            color: "#cccccc"
          },
          itemMarginBottom: 5,
          symbolRadius: 0
        },
        exporting: {
          enabled: false
        },
        series
      };
    }


    componentDidMount() {
        // this.props.dispatch(receiveDataRequest());
        this.props.dispatch(receiveDataRequestLunar());
    }

  render() {
    const { marketBreakdown, isReceiving, assetList, btcMarketCap } = this.props;
    return (
      <div>
        <h1 className="page-title">Cryptocurrency Home</h1>
        <div className={s.sidesWrapper}>
          <div className={s.analyticsSide}>
            <Row>
              <Col xs={12} xl={3} md={6}>
                <div className="pb-xlg h-100">
                  <Widget
                    className="mb-0 h-100"
                    close
                    bodyClass="mt-lg"
                    fetchingData={isReceiving}
                    title={<h5>Bitcoin Market Cap</h5>}
                  >
                      <div className="d-flex justify-content-between align-items-center mb h3">
                          <h2 style={{fontSize: '2.1rem'}}>{btcMarketCap.market_cap}</h2>
                          <i className="la la-arrow-right text-success rotate-315"/>
                      </div>
                      <div className="d-flex flex-wrap justify-content-between">
                          <div className={cx('mt')}>
                              <h6>+{btcMarketCap.one_m_change}</h6>
                              <p className="text-muted mb-0 mr">
                                  <small>1 Month Change</small>
                              </p>
                          </div>
                          <div className={cx('mt')}>
                              <h6>{btcMarketCap.volume_24h}%</h6>
                              <p className="text-muted mb-0">
                                  <small>Volume 24 Hour Change</small>
                              </p>
                          </div>
                          <div className={cx('mt')}>
                              <h6>{btcMarketCap.volume_24h}%</h6>
                              <p className="text-muted mb-0 mr">
                                  <small>1 year Change</small>
                              </p>
                          </div>
                      </div>
                  </Widget>
                </div>
              </Col>
              <Col xs={12} xl={3} md={6}>
                <div className="pb-xlg h-100">
                  <Widget
                    bodyClass="mt"
                    close
                    className="mb-0 h-100"
                    fetchingData={isReceiving}
                    title={<h5>Top 10 Assets By Cap</h5>}
                  >
                    <HighchartsReact options={this.donut()} />
                  </Widget>
                </div>
              </Col>
              <Col xs={12} xl={3} md={6}>
                <div className="pb-xlg h-100">
                  <Widget
                    bodyClass="mt"
                    close
                    className="mb-0 h-100"
                    fetchingData={isReceiving}
                    title={<h5>Bitcoin Vs. Altcoin Breakdown</h5>}
                  >
                    <p className="text-muted d-flex flex-wrap">
                      <small className="mr-lg d-flex align-items-center">
                        <span className="circle bg-success text-success mr-xs" style={{ fontSize: '4px' }}>.</span>
                        Current
                      </small>
                      <small className="mr-lg d-flex align-items-center">
                        <span className="circle bg-primary text-primary mr-xs" style={{ fontSize: '4px' }}>.</span>
                        Last Month
                      </small>
                    </p>
                    <h6 className="fs-sm text-muted">SDK</h6>
                      <Progress color="success" className="progress-sm" style={{height: '10px', marginBottom: '5px'}}
                                value={marketBreakdown.bitcoin?.today_pct}/>
                      <Progress color="primary" className="progress-sm" style={{height: '10px'}}
                                value={marketBreakdown.bitcoin?.one_m_pct}/>
                    <h6 className="mt fs-sm text-muted">Integration</h6>
                      <Progress color="success" className="progress-sm" style={{height: '10px', marginBottom: '5px'}}
                                value={marketBreakdown.altcoin?.today_pct}/>
                      <Progress color="primary" className="progress-sm" style={{height: '10px'}}
                                value={marketBreakdown.altcoin?.one_m_pct}/>
                  </Widget>
                </div>
              </Col>
              <Col xs={12} xl={3} md={6}>
                <div className="pb-xlg h-100">
                  <Widget
                    bodyClass="mt-lg"
                    close
                    className="mb-0 h-100"
                    fetchingData={isReceiving}
                    title={<h5>Asset Movement</h5>}
                  >
                    <div className="d-flex justify-content-between mb-sm">
                      <p><small>{assetList[0]?.symbol}% <span style={{ color: '#a3aeb7' }}>/</span> {assetList[0]?.percent_change_24h}% <span style={{ color: '#a3aeb7' }}>/</span> {assetList[0]?.percent_change_30d}%</small></p>
                      <div className={s.sparklineWrapper}>
                        <Trend 
                          gradient={['#db2a34']}
                          height={30}
                          strokeWidth={6}
                          smooth
                          data={this.getRandomData()}
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mb-sm">
                      <p><small>{assetList[1]?.symbol} <span style={{ color: '#a3aeb7' }}>/</span> {assetList[1]?.percent_change_24h}% <span style={{ color: '#a3aeb7' }}>/</span> {assetList[1]?.percent_change_30d}%</small></p>
                      <div className={s.sparklineWrapper}>
                        <Trend 
                          gradient={['#2d8515']}
                          height={30}
                          strokeWidth={6}
                          smooth
                          data={this.getRandomData()}
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mb-sm">
                      <p><small>{assetList[2]?.symbol} <span style={{ color: '#a3aeb7' }}>/</span> {assetList[2]?.percent_change_24h}% <span style={{ color: '#a3aeb7' }}>/</span> {assetList[2]?.percent_change_30d}%</small></p>
                      <div className={s.sparklineWrapper}>
                        <Trend 
                          gradient={['#2477ff']}
                          height={30}
                          strokeWidth={6}
                          smooth
                          data={this.getRandomData()}
                        />
                      </div>
                    </div>
                  </Widget>
                </div>
              </Col>
              {/* GLOBAL METRICS TABLE */}
              <Col xs={12} className="mb-lg">
                <Widget
                  className="pb-0"
                  bodyClass={`mt p-0`}
                  title={<h4> Global <strong>Metrics</strong></h4>}
                  close settings
                >
                  <TableContainer data={mock.table} />
                </Widget>
              </Col>
              {/* END GLOBAL METRICS TABLE */}
              {/* <Col lg={12} xs={12}>
                  <MainChart data={mainChart} isReceiving={isReceiving} />
              </Col> */}
              <Col xs={12} lg={6} >
                <BigStat {...mock.bigStat[0]} />
              </Col>
              <Col xs={12} lg={6} >
                <BigStat {...mock.bigStat[1]} />
              </Col>
              <Col xs={12} lg={6} >
                <BigStat {...mock.bigStat[2]} />
              </Col>
              <Col xs={12} className="mb-lg">
                <Widget
                  className="pb-0"
                  bodyClass={`mt p-0`}
                  title={<h4> Support <strong>Requests</strong></h4>}
                  close settings
                >
                  <TableContainer data={mock.table} />
                </Widget>
              </Col>
            </Row>
          </div>
          <div className={s.analyticsSide}>
            <Row>
              <Col xs={12} md={6} xl={12} className={s.lastSideElement}>
                <Widget className="mb-xlg pt-0" bodyClass="mt-0">
                  <Calendar />
                </Widget>
              </Col>
              <Col xs={12} md={6} xl={12} className={s.lastSideElement}>
                <TaskContainer data={mock.tasks} />
              </Col>
              <Col xs={12} md={6} xl={12} className={s.lastSideElement}>
                <Widget
                  className="widget"
                  bodyClass={cx(s.notifications, 'w-100 mt-lg')}
                  title={
                    <h4>Notifications <span className="badge badge-pill badge-success fw-normal pull-right mt-xs">{mock.notifications.length}</span></h4>
                  }
                >
                  {mock.notifications.map(({ id, icon, color, content }) => (
                    <div className="d-flex align-items-start" key={id}>
                      <i className={`la la-${icon} mr text-${color}`} />
                      <p
                        className={cx({ 'mb-0': id === mock.notifications.length - 1 })}
                        dangerouslySetInnerHTML={{ __html: content }}
                      />
                    </div>
                  ))}
                </Widget>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('MAPTOSTATE: ', state)
    return {
        marketBreakdown: state.home.marketBreakdown,
        isReceiving: state.home.isReceiving,
        assetList: state.home.assetList,
        btcMarketCap: state.home.btcMarketCap,
        topTenMarketCap: state.home.topTenMarketCap,
    }
}

export default connect(mapStateToProps)(Home);
