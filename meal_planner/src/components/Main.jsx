import React, { Component } from 'react';
import MainInfoBox from './MainInfoBox';
// import acai_image from './acai_image.jpg';
// import acai_image from './bowl_image.jpg';


class Main extends Component {
  render() {
        return (
            <div className="container">

            <MainInfoBox/> 
{/* 
            <img src={acai_image} width="500" height="350" /> */}

            </div>
        );
    }
}

export default Main;