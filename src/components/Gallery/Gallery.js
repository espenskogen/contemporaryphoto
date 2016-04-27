import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Gallery.scss';

import Carousel from 'nuka-carousel';

class Gallery extends Component {

  render() {
    return (

      <div className={s.container}>
        <Carousel showThumbs={false} showArrows={true}>
          <img src="assets/gallery-1.jpg" />
          <img src="assets/gallery-2.jpg" />
          <img src="assets/gallery-3.jpg" />
          <img src="assets/gallery-5.jpg" />
          <img src="assets/gallery-6.jpg" />
        </Carousel>
      </div>

    );
  }
}

export default withStyles(Gallery, s);
