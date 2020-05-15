/**
 * Created by ZZQ on 2019/4/4 11:23
 * Develop by ZZQ on 2019/4/4 11:23
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Affix, Icon, Layout, Menu,
} from 'antd';
import { L2Dwidget } from 'live2d-widget';
import { Route, Switch, withRouter } from 'react-router-dom';
import Styles from './MainLayout.module.css';
import Home from '../../home/Home';
import Project from '../../project/Project';
import Service from '../../service/Service';
import Contact from '../../contact/Contact';
import ScrollUtil from '../../../util/ScrollUtil';
import './MainLayout.css';

const MENU_ITEM = [{
  key: 'home',
  name: '首页',
  icon: 'home',
}, {
  key: 'project',
  name: '案例',
  icon: 'project',
}, {
  key: 'service',
  name: '服务',
  icon: 'customer-service',
}, {
  key: 'contact',
  name: '联系',
  icon: 'phone',
}];

class MainLayout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: window.scrollY,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    L2Dwidget.init({
      model: { jsonPath: 'http://zzq-web.oss-cn-hangzhou.aliyuncs.com/live2d/xxb/model.json' },
      display: {
        position: 'right', width: 300, height: 420,
      },
      mobile: { show: true },
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { y } = ScrollUtil.getScrollOffsets();
    this.setState({ scrollY: y });
  };

  handleMenuSelect = (e) => {
    const { key } = e;
    const { history } = this.props;
    history.push(`/${key}`);
  };

  renderChildRoute = () => (
    <Switch>
      <Route
        path="/"
        component={Home}
        exact
      />
      <Route
        path="/home"
        component={Home}
        exact
      />
      <Route
        path="/project"
        component={Project}
        exact
      />
      <Route
        path="/service"
        component={Service}
        exact
      />
      <Route
        path="/contact"
        component={Contact}
        exact
      />
    </Switch>
  );

  renderContent = () => (
    <Layout.Content className={Styles.root__content}>
      {this.renderChildRoute()}
    </Layout.Content>
  );

  renderMenuItem = () => MENU_ITEM.map(item => (
    <Menu.Item
      className={Styles.root__item}
      key={item.key}
    >
      <Icon type={item.icon} />
      {item.name}
    </Menu.Item>
  ));

  render() {
    const { location: { pathname } } = this.props;
    let defaultKey = pathname;
    if (pathname === '/' || pathname === '/home') {
      defaultKey = 'home';
    } else {
      defaultKey = pathname.substring(1);
    }
    const { scrollY } = this.state;
    return (
      <div
        ref={(ref) => {
          this.root = ref;
        }}
        onScroll={this.handleScroll}
        className={Styles.root}
      >
        <Affix target={() => window}>
          <div className={Styles.root__menu__div}>
            {/* <img src={Image.logo}/> */}
            <span className={Styles.root__logo}>强强联合</span>
            <Menu
              className={scrollY > 0 || defaultKey !== 'home' ? Styles.root__menu__active : Styles.root__menu__normal}
              mode="horizontal"
              onSelect={this.handleMenuSelect}
              defaultSelectedKeys={[defaultKey]}
            >
              {this.renderMenuItem(scrollY)}
            </Menu>
          </div>
        </Affix>
        {this.renderContent()}
        <footer className={Styles.root__footer}>
          <img
            className={Styles.root__footer__image}
            src="//img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png"
            alt=""
          />
          <a
            href="http://www.beian.miit.gov.cn"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            京ICP备19021299号
          </a>
          Copyright © 2020 ZZQ. All Rights Reserved.强强联合 版权所有
        </footer>
      </div>
    );
  }
}

MainLayout.propTypes = {
  location: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
};

export default withRouter(MainLayout);
