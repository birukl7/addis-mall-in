import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}


function MallSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2800,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const images = [
    "mall-1.jpg",
    "mall-2.jpg",
    "mall-3.jpg",
    "mall-4.jpg",
  ]

  images.map((i,j)=>console.log(i))
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
          images.map((img, index)=> <div className="w-[300px] md:w-[500px] h-[400px] overflow-hidden max-w-[300px] mx-auto rounded-xl px-3">
          <img src={"/images/"+img} className="object-cover h-full  rounded- w-full" alt="Mall 2" />
        </div> )
        }
      </Slider>
    </div>
  );
}

export default MallSlider;
