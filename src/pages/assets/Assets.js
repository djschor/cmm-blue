import React, { Component } from 'react';
import axios from 'axios';
import { Col, Row, Progress } from 'reactstrap';
import Trend from 'react-trend';
import Widget from '../../components/Widget';

class Assets extends Component {
  state = {
    // market_breakdown: {},
    asset_list: [],
    // btc_market_cap: {},
    // top_10_market_cap: [],
    error: '',
    isReceiving: false
  };
  getRandomData = () => {
    const arr = [];
    for (let i = 0; i < 25; i += 1) {
      arr.push(Math.random().toFixed(1) * 10);
    }
    return arr;
  }

  getAssetList() {
    axios
      .get('http://localhost:5000/api/assets/list')
      .then(res => 
        this.setState({ asset_list: JSON.parse(res.data)
                      }))
        // console.log('res: \n', JSON.parse(res.data)
      // ))
      .catch(error => this.setState({ error }));
  }

  getBtcMarketCap() {
    axios
      .get('http://localhost:5000/api/assets/cap')
      .then(res => 
        this.setState({ btc_market_cap: JSON.parse(res.data)
                      }))
        // console.log('res: \n', JSON.parse(res.data)
      // ))
      .catch(error => this.setState({ error }));
  }

  getTopTen() {
    axios
      .get('http://localhost:5000/api/assets/ten')
      .then(res => 
        this.setState({ asset_list: JSON.parse(res.data)
                      }))
        // console.log('res: \n', JSON.parse(res.data)
      // ))
      .catch(error => this.setState({ error }));
  }

  getBtcMarketCap() {
    axios
      .get('http://localhost:5000/api/assets/list')
      .then(res => 
        this.setState({ asset_list: JSON.parse(res.data)
                      }))
        // console.log('res: \n', JSON.parse(res.data)
      // ))
      .catch(error => this.setState({ error }));
  }

  componentDidMount() {
    // axios
    //   .get('http://localhost:5000/api/assets/list')
    //   .then(res => 
    //     // this.setState({ market_breakdown: JSON.parse(res.data).market_breakdown, 
    //     //                 asset_list: JSON.parse(res.data).asset_list ,
    //     //                 btc_market_cap: JSON.parse(res.data).btc_market_cap,
    //     //                 top_10_market_cap: JSON.parse(res.data).top_10_market_cap
    //     //               }))
    //     console.log('res: \n', JSON.parse(res.data)
    //   ))
    //   .catch(error => this.setState({ error }));
    this.getAssetList()
  }

  render () {
    const { asset_list } = this.state.asset_list
    return (
      <div className="Assets">
        <h1 className="page-title">Home</h1>
        {/* <Col xs={12} xl={3} md={6}>
                <div className="pb-xlg h-100">
                  <Widget
                    bodyClass="mt-lg"
                    close
                    className="mb-0 h-100"
                    title={<h5>Assets By Market Cap</h5>}
                  >
                    <div className="d-flex justify-content-between mb-sm">
                      <p><small>{asset_list[0]?.symbol}% <span style={{ color: '#a3aeb7' }}>/</span> {asset_list[1]?.percent_change_24h}°С <span style={{ color: '#a3aeb7' }}>/</span> {asset_list[0]?.percent_change_30d} Ghz</small></p>
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
                      <p><small>{asset_list[2]?.symbol}% <span style={{ color: '#a3aeb7' }}>/</span> {asset_list[2]?.percent_change_24h}°С <span style={{ color: '#a3aeb7' }}>/</span> {asset_list[2]?.percent_change_30d} Ghz</small></p>
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
                      <p><small>{asset_list[2]?.symbol}% <span style={{ color: '#a3aeb7' }}>/</span> {asset_list[2]?.percent_change_24h}°С <span style={{ color: '#a3aeb7' }}>/</span> {asset_list[2]?.percent_change_30d} Ghz</small></p>
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
              </Col> */}
        <ul>
          {this.state.asset_list.map(el => (
            <li>
              {el.symbol}: {el.percent_change_24h}, {el.percent_change_7d}, {el.percent_change_30d}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Assets;
