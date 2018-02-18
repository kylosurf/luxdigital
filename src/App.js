import React, { Component } from 'react';
import Lightbox from 'lightbox-react';
import VideoIframe from './components/VideoIframe';
import LuxLightbox from './components/LuxLightbox'
import Footer from './components/Footer'
import Header from './components/Header'
import Slider from 'react-slick'
import Carousel from './components/Carousel'

//put array of links outside of the app itself. Add/remove links here
const content = [
  <VideoIframe url='https://my.matterport.com/show/?m=6dkaZfYhjbc' />,
  <VideoIframe url='https://my.matterport.com/show/?m=6tTmiyefBgJ' />,
  <VideoIframe url='https://my.matterport.com/show/?m=utFqEcoNakR' />
];

class App extends Component {
  constructor(props) {
        super(props);

      }

    render(){

        return (
            <div>
            <Header />
            <nav>Home About Contact</nav>
            <Carousel />
            <LuxLightbox content={content}/>
            <div>
              Contact Form
            </div>
            <Footer />
            </div>
        );
    }
}

export default App;
