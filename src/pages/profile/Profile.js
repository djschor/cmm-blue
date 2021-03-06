import React from 'react';
import cx from 'classnames';
import {
  Row,
  Col,
  Input,
  Label,
  Form,
  FormGroup,
} from 'reactstrap';
import Widget from '../../components/Widget';

import p19 from '../../images/pictures/19.jpg';
import momSelfie from '../../images/people/me-mom.png';
import a1 from '../../images/people/a1.jpg';
import a3 from '../../images/people/a3.jpg';
import avatar from '../../images/avatar.png';

import s from './Profile.module.scss';

const Profile = () => (
  <div className={s.root}>
    <h1 className="page-title">User - <span className="fw-semi-bold">Profile</span>
    </h1>

    <Row>
      <Col lg={6} xs={12}>
        <Widget>
          <div className="widget-top-overflow text-white">
            <div className="height-250 overflow-hidden">
              <img className="img-fluid" src={p19} alt="..." />
            </div>
            <button className="btn btn-outline btn-sm mb-2">
              <i className="fa fa-twitter mr-2" />
              Follow
            </button>
          </div>
          <Row>
            <Col md={5} xs={12} className="text-center">
              <div className={s.profileContactContainer}>
                <span className="thumb-xl mb-3">
                  <img className={[s.profileAvatar, 'rounded-circle'].join(' ')} src={momSelfie} alt="..." />
                </span>
                <h5 className="fw-normal">Daniel <span className="fw-semi-bold">Schorin</span></h5>
                <p>Lead Engineer</p>
                <button className="btn btn-success btn-sm mb-3">
                  &nbsp;Send
                  <i className="fa fa-envelope ml-2" />&nbsp;
                </button>
                <div>
                  <ul className={cx(s.profileContacts, 'mt-sm')}>
                    <li><i className="fa fa-lg fa-phone fa-fw mr-2" /><button className="btn-link"> (734) 355-2625</button></li>
                    <li><i className="fa fa-lg fa-envelope fa-fw mr-2" /><button className="btn-link"> djschor@umich.edu</button></li>
                    <li><i className="fa fa-lg fa-map-marker fa-fw mr-2" /><button className="btn-link"> Ann Arbor, MI</button></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={7} xs={12}>
              <div className="stats-row mt-3">
                <div className={[s.profileStat, 'stat-item'].join(' ')}>
                  <p className={[s.profileStatValue, 'value text-right'].join(' ')}>251</p>
                  <h6 className="name">Posts</h6>
                </div>
                <div className={[s.profileStat, 'stat-item'].join(' ')}>
                  <p className={[s.profileStatValue, 'value text-right'].join(' ')}>9.38%</p>
                  <h6 className="name">Conversion</h6>
                </div>
                <div className={[s.profileStat, 'stat-item'].join(' ')}>
                  <p className={[s.profileStatValue, 'value text-right'].join(' ')}>842</p>
                  <h6 className="name">Followers</h6>
                </div>
              </div>
              <p>
               {/* eslint-disable-next-line */}
                <a href="#" className="badge badge-info rounded-0 mb-2 mr-2">Data Science</a>
               {/* eslint-disable-next-line */}
                <a href="#" className="badge badge-primary rounded-0 mr-2"> Web Design </a>
               {/* eslint-disable-next-line */}
                <a href="#" className="badge badge-default rounded-0"> Blockchain </a>
              </p>
              <p className="lead mt-xlg">
                My name Daniel Schorin and I'm the creator of CMM blue. I hope you enjoy! Much love, Daniel 
              </p>
              <p className="text-muted">
                Michigan Sports. Celtics. Red Sox. Bandwagon Suns. and I live 5 minutes from soldier field so I guess da bears too. 
              </p>
            </Col>
          </Row>
        </Widget>
      </Col>
      <Col lg={6} xs={12}>
        <section className="activities">
          <h2 className="ml-3">Activities</h2>
          <section className={s.event}>
            <header>
              <span className={s.eventAvatar}>
                <img className="rounded-circle" src={momSelfie} alt="..." />
              </span>
              <h5 className={s.eventTitle}><button className="btn-link">Daniel Schorin</button> <small><button className="btn-link">@nils</button></small></h5>
              <p className={s.eventTimestamp}>February 22, 2014 at 01:59 PM</p>
            </header>

            <div className={s.eventBody}>
              There is no such thing as maturity. There is instead an ever-evolving process of maturing.
              Because when there is a maturity, there is ...
            </div>
            <footer className={s.eventFooter}>
              <ul className="post-links">
                <li><button className="btn-link">1 hour</button></li>
                <li><button className="btn-link"><span className="text-danger"><i className="fa fa-heart" /> Like</span></button></li>
                <li><button className="btn-link">Comment</button></li>
              </ul>
            </footer>
          </section>
          <section className={s.event}>
            <header>
              <h5 className={s.eventTitle}><button className="btn-link">Jessica Smith</button> <small>@jess</small></h5>
              <p className={s.eventTimestamp}>February 22, 2014 at 01:59 PM</p>
            </header>
            <div className={s.eventBody}>
              Check out this awesome photo I made in Italy last summer. Seems it was lost somewhere deep inside
              my brand new HDD 40TB. Thanks god I found it!
            </div>
            <footer className={s.eventFooter}>
              <div className="clearfix">
                <ul className="post-links mt-sm pull-left">
                  <li><button className="btn-link">1 hour</button></li>
                  <li><button className="btn-link"><span className="text-danger"><i className="fa fa-heart-o" /> Like</span></button></li>
                  <li><button className="btn-link">Comment</button></li>
                </ul>

                <span className="thumb thumb-sm pull-right">
                  <button className="btn-link">
                    <img className="rounded-circle" alt="..." src={a1} />
                  </button>
                </span>
                <span className="thumb thumb-sm pull-right">
                  <button className="btn-link"><img className="rounded-circle" alt="..." src={momSelfie} /></button>
                </span>
                <span className="thumb thumb-sm pull-right">
                  <button className="btn-link"><img className="rounded-circle" alt="..." src={a3} /></button>
                </span>
              </div>
              <ul className="post-comments mt-sm">
                <li className={s.borderTop}>
                  <span className="thumb-xs avatar pull-left mr-sm">
                    <img className="rounded-circle" src={a1} alt="..." />
                  </span>
                  <div className="comment-body">
                    <h6 className="author fs-sm fw-semi-bold">Ignacio Abad <small>6 mins ago</small></h6>
                    <p>Hey, have you heard anything about that?</p>
                  </div>
                </li>
                <li className={s.borderTop}>
                  <span className="thumb-xs avatar pull-left mr-sm">
                    <img className="rounded-circle" src={avatar} alt="..." />
                  </span>
                  <div className="comment-body">
                    <input className="form-control form-control-sm" type="text" placeholder="Write your comment..." />
                  </div>
                </li>
              </ul>
            </footer>
          </section>
          <Form className="mt mb-5" action="#">
            <FormGroup className="mb-2">
              <Label className="sr-only" for="new-event">New event</Label>
              <Input type="textarea" id="new-event" placeholder="Post something..." rows="3" />
            </FormGroup>
            <div className="btn-toolbar">
              <div className="btn-group">
                <button className="btn btn-sm btn-subtle-blue ml-0">
                  <i className="fa fa-camera fa-lg" />
                </button>
                <button className="btn btn-sm btn-subtle-blue">
                  <i className="fa fa-map-marker fa-lg" />
                </button>
              </div>
              <button type="submit" className="btn btn-danger btn-sm ml-auto">Post</button>
            </div>
          </Form>
        </section>
      </Col>
    </Row>
  </div>
);

export default Profile;
