import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import "./style.css";

const PauseOnHover: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <MdKeyboardArrowRight />,
    prevArrow: <MdKeyboardArrowLeft />,
  };

  return (
    <div style={{ width: "80%" }}>
      <Slider {...settings}>
        <div className="slider-items">
          <img
            src={require("../../../../assets/images/1.png")}
            alt="tiktok"
            style={{
              width: "149.34px",
              height: "45px",
            }}
          />
        </div>
        <div className="slider-items">
          <img
            src={require("../../../../assets/images/2.png")}
            alt="upos"
            style={{ width: "131.97px", height: "45px" }}
          />
        </div>
        <div className="slider-items">
          <img
            src={require("../../../../assets/images/5.png")}
            alt="shopee"
            style={{ width: "152px", height: "70px" }}
          />
        </div>
        <div className="slider-items">
          <img
            src={require("../../../../assets/images/6.png")}
            alt="oppo"
            style={{ width: "152.24px", height: "39px" }}
          />
        </div>
        <div className="slider-items">
          <img
            src={require("../../../../assets/images/3.png")}
            alt="tiki"
            style={{ width: "111.34px", height: "45px" }}
          />
        </div>
        <div className="slider-items">
          <img
            src={require("../../../../assets/images/4.png")}
            alt="thegioididong"
            style={{ width: "134.64px", height: "80px" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default PauseOnHover;
