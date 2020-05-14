import React from 'react';
import { Card } from 'antd';
import Styles from './ProjectLayout.module.css';
import * as Image from '../../../images';

/**
 * Created by ZZQ on 2019/4/8 18:29
 * Develop by ZZQ on 2019/4/8 18:29
 */

const PROJECTS = [{
  id: 0,
  image: Image.project,
}, {
  id: 1,
  image: Image.project,
}, {
  id: 2,
  image: Image.project,
}, {
  id: 3,
  image: Image.project,
}, {
  id: 4,
  image: Image.project,
}, {
  id: 5,
  image: Image.project,
}, {
  id: 6,
  image: Image.project,
}];

class ProjectLayout extends React.PureComponent {
  renderProject = () => PROJECTS.map(item => (
    <Card
      key={item.id}
      className={Styles.root__card}
      hoverable
      cover={(
        <div className={Styles.root__card__content__div}>
          <img
            className={Styles.root__image}
            alt="example"
            src={item.image}
          />
        </div>
      )}
    >
      <Card.Meta
        title="这是哪里的一个"
        description="当初做的时候是怎么样的，一些个描述"
      />
    </Card>
  ));

  render() {
    return (
      <div className={Styles.root}>
        <div className={Styles.root__title}>
          经典案例
        </div>
        <div className={Styles.root__stars} />
        <div className={Styles.root__stars2} />
        <div className={Styles.root__stars3} />
        <div className={Styles.root__card__div}>
          {this.renderProject()}
        </div>
      </div>
    );
  }
}

export default ProjectLayout;
