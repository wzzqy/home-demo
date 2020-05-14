/**
 * Created by ZZQ on 2019/4/10 10:33
 * Develop by ZZQ on 2019/4/10 10:33
 */
import React from 'react';
import Styles from './ServiceLayout.module.css';
import * as Image from '../../../images';

class ServiceLayout extends React.PureComponent {
  load = () => {
  };

  render() {
    return (
      <div className={Styles.root}>
        <div className={Styles.root__title}>
          专业服务
        </div>
        <div
          className={Styles.root__service__div}
          style={{
            background: `url(${Image.test}) no-repeat center fixed`,
            backgroundSize: 'cover',
          }}
        >
          <span className={Styles.root__service__span}>
            NBA,虎扑NBA中文网,NBA为主的专业篮球网站,专注于NBA直播,NBA视频,
            图片及原创NBA新闻,分析等深入内容,拥有良好氛围的NBA火箭,湖人,热火等全部NBA球队
          </span>
        </div>
        <div
          className={Styles.root__service__div}
          style={{
            background: `url(${Image.test2}) no-repeat center`,
            backgroundSize: 'cover',
          }}
        >
          <span className={Styles.root__service__span}>
            NBA,虎扑NBA中文网,NBA为主的专业篮球网站,专注于NBA直播,NBA视频,
            图片及原创NBA新闻,分析等深入内容,拥有良好氛围的NBA火箭,湖人,热火等全部NBA球队
          </span>
        </div>
        <div
          className={Styles.root__service__div}
          style={{
            background: `url(${Image.test3}) no-repeat center fixed`,
            backgroundSize: 'cover',
          }}
        >
          <span className={Styles.root__service__span}>
            NBA,虎扑NBA中文网,NBA为主的专业篮球网站,专注于NBA直播,NBA视频,
            图片及原创NBA新闻,分析等深入内容,拥有良好氛围的NBA火箭,湖人,热火等全部NBA球队
          </span>
        </div>
        {/* <div className={Styles.root__first__div}> */}
        {/* <div */}
        {/*  className={Styles.root__blur__div} */}
        {/*  style={{ */}
        {/*    background: `url(${Image.test}) no-repeat no-repeat`, */}
        {/*    backgroundPosition: 'cover', */}
        {/*    backgroundSize: 'cover', */}
        {/*    // backgroundAttachment: 'fixed', */}
        {/*  }} */}
        {/* /> */}
        {/* <div className={Styles.root__content}>我是内容</div> */}
        {/* </div> */}
      </div>
    );
  }
}

export default ServiceLayout;
