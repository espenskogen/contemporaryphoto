
import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Gallery.scss';

import { Carousel } from 'react-responsive-carousel';

class Gallery extends Component {

  render() {
    return (

      <Carousel showThumbs={false} showArrows={true} >

        <div>
          <img src="assets/gallery-1.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="assets/gallery-2.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/gallery-3.jpg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="assets/gallery-4.jpg" />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src="assets/gallery-5.jpg" />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img src="assets/gallery-6.jpg" />
          <p className="legend">Legend 6</p>
        </div>
      </Carousel>

    );
  }
}

export default withStyles(Gallery, s);
