/**
 * Created by ZZQ on 2019/4/4 17:53
 * Develop by ZZQ on 2019/4/4 17:53
 */
import React from 'react';
import { Card, Carousel } from 'antd';
import * as Image from '../../../images/index';
import Styles from './HomeLayout.module.css';

const DETAIL_IMAGE = [{
  id: 1,
  value: Image.image1,
}, {
  id: 2,
  value: Image.image2,
}, {
  id: 3,
  value: Image.image3,
}];

class HomeLayout extends React.PureComponent {
  renderContent = () => (
    <div>
      <div className={Styles.root__title}>
        我们做什么
      </div>
      <Card>
        <Card.Grid className={Styles.root__card__grid}>
          <div className={Styles.root__card__content}>
            <span className={Styles.root__common__title}>第一做的事</span>
            <br />
            <span className={Styles.root__common__text}>这是一件比较重要的事，相对来说也是比较厉害的</span>
          </div>
        </Card.Grid>
        <Card.Grid className={Styles.root__card__grid}>
          <div className={Styles.root__card__content}>
            <span className={Styles.root__common__title}>第二做的事</span>
            <br />
            <span className={Styles.root__common__text}>这是一件比较重要的事，相对来说也是比较厉害的</span>
          </div>
        </Card.Grid>
        <Card.Grid className={Styles.root__card__grid}>
          <div className={Styles.root__card__content}>
            <span className={Styles.root__common__title}>第三做的事</span>
            <br />
            <span className={Styles.root__common__text}>这是一件比较重要的事，相对来说也是比较厉害的</span>
          </div>
        </Card.Grid>
      </Card>
    </div>
  );

  renderImage = () => DETAIL_IMAGE.map(item => (
    <img className={Styles.root__detail__image} key={item.id} src={item.value} alt="" />
  ));

  render() {
    return (
      <div className={Styles.root}>
        <div className={Styles.root__image__div}>
          <Carousel autoplay easing="linear">
            {this.renderImage()}
          </Carousel>
        </div>
        {this.renderContent()}
      </div>
    );
  }
}

export default HomeLayout;
