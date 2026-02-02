import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carrossel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div class="">
      <Slider {...settings}>
        <div> 
          <img src="public\assets\cropped-nectar-logo-1 1.svg"/>
          <h3>Nectar infotel</h3>
        </div>
        <div>
          <img src="public\assets\dell.svg"/>
          <h3>Dell tecnologies</h3>
        </div>
        <div>
          <img src="public\assets\INEFOP_azul.259341ff 1.svg"/>
          <h3>Inefop</h3>
        </div>
        <div>
          <img src="public\assets\tis.svg"/>
          <h3>Tis</h3>
        </div>
      </Slider>
    </div>
  );
}


  
  



 