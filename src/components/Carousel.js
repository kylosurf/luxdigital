import React, { Component } from 'react';
import Slider from 'react-slick'
import VideoIframe from './VideoIframe'

class Carousel extends Component {
  render() {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return (
      <div>
      <Slider {...settings}>

         <div><img
         height="200"
          src="https://news.wtm.com/wp-content/uploads/2015/07/10-Luxury-Travellers-Dream-Destinations-for-2016-1024x673.jpg"/></div>
         <div><h3></h3></div>
         <div>
           <iframe src='https://my.matterport.com/show/?m=6dkaZfYhjbc' width="560"
           height="315"/>
         </div>
         <div><h3></h3></div>
         <div><h3></h3></div>
         <div><h3></h3></div>

       </Slider>
      </div>
    )
  }
}

export default Carousel
