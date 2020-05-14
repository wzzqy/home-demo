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
            background: `url(${Image.bg1}) no-repeat center fixed`,
            backgroundSize: 'cover',
          }}
        >
            <span className={Styles.root__service__span}>
              平面设计、3D设计、园林设计、环境设计、建筑设计、印刷、喷绘、雕刻、广告灯箱及各类广告需要的灯光制作、
                各类媒体投放（户外擎天柱、路边广告灯箱、电视媒体、广播媒体、报纸媒体、网络媒体的发布及设计） 亚克力吸塑字、雕刻字、水晶字、钛金铁皮字
            </span>
        </div>
        <div
          className={Styles.root__service__div}
          style={{
            background: `url(${Image.bg2}) no-repeat center`,
            backgroundSize: 'cover',
          }}
        >
            <span className={Styles.root__service__span}>
            平面设计、3D设计、园林设计、环境设计、建筑设计、印刷、喷绘、雕刻、广告灯箱及各类广告需要的灯光制作、
                各类媒体投放（户外擎天柱、路边广告灯箱、电视媒体、广播媒体、报纸媒体、网络媒体的发布及设计） 亚克力吸塑字、雕刻字、水晶字、钛金铁皮字
            </span>
        </div>
        <div
          className={Styles.root__service__div}
          style={{
            background: `url(${Image.bg3}) no-repeat center fixed`,
            backgroundSize: 'cover',
          }}
        >
            <span className={Styles.root__service__span}>
              平面设计、3D设计、园林设计、环境设计、建筑设计、印刷、喷绘、雕刻、广告灯箱及各类广告需要的灯光制作、
                各类媒体投放（户外擎天柱、路边广告灯箱、电视媒体、广播媒体、报纸媒体、网络媒体的发布及设计） 亚克力吸塑字、雕刻字、水晶字、钛金铁皮字
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
