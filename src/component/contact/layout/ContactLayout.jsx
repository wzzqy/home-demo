import React from 'react';
import { Map, Marker, NavigationControl } from 'react-bmap';
import Styles from './ContactLayout.module.css';
import * as Image from '../../../images';

/**
 * Created by ZZQ on 2019/4/10 10:37
 * Develop by ZZQ on 2019/4/10 10:37
 */

const LOCATION = {
  longitude: 113.004875,
  latitude: 28.030518,
};

class ContactLayout extends React.PureComponent {
  loadNativeMap = () => {
    const opts = {
      title: '强强联合', // 信息窗口标题
      enableAutoPan: true, // 自动平移
    };
    const { BMap } = window;
    const map = new BMap.Map('container');
    map.enableScrollWheelZoom(true);
    const point = new BMap.Point(LOCATION.longitude, LOCATION.latitude);
    map.centerAndZoom(point, 15);
    const mark = new BMap.Marker(point);
    mark.addEventListener('click', () => {
      const infoWindow = new BMap.InfoWindow('欢迎您的到来！', opts);
      map.openInfoWindow(infoWindow, map.getCenter());
    });
    map.addOverlay(mark);
    map.addControl(new BMap.NavigationControl());
  };

  render() {
    return (
      <div className={Styles.root}>
        <div className={Styles.root__title}>
          联系我们
        </div>
        <div className={Styles.root__content}>
          <div className={Styles.root__image__div}>
            <img
              className={Styles.root__image}
              alt=""
              src={Image.bg}
            />
          </div>
          <div className={Styles.root__info__div}>
            <p
              className={Styles.root__company__info}>
              <text className={Styles.root__company__name}>永尚广告</text>
              成立于XXXX，这里聚集了大批互动高手，为客户提供优质的服务和专业的解决方案。这里聚集了大批互动高手，为客户提供优质的服务和专业的解决方案。这里聚集了大批互动高手，为客户提供优质的服务和专业的解决方案。
            </p>
            <div className={Styles.root__info__common__div}>地址：xxxxxxxxxx</div>
            <div className={Styles.root__info__common__div}>电话：xxxxxxxxxx</div>
            <div className={Styles.root__info__common__div}>邮箱：xxxxxxxxxx</div>
            <div className={Styles.root__info__common__div}>QQ：xxxxxxxxxx</div>
            {/* <div id="container" className={Styles.root__map} /> */}
            <Map
              className={Styles.root__map}
              center={{ lng: LOCATION.longitude, lat: LOCATION.latitude }}
              zoom="15"
              enableScrollWheelZoom
            >
              <Marker position={{ lng: LOCATION.longitude, lat: LOCATION.latitude }} />
              <NavigationControl />
              {/* <InfoWindow position={{ lng: LOCATION.longitude, lat: LOCATION.latitude }}
              text="内容" title="标题" /> */}
            </Map>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactLayout;
