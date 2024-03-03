import React,{useState} from 'react'
import Slider from "react-slick";
import {
    bannerImgOne,
    bannerImgThree,
    bannerImgFour,
    bannerImgFive,
    } from "../../assets/index";
const Banner = () => {

  const [active,setActive] = useState(0);
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (prev, next) => {
          setActive (next);
          // console.log(active);
          },
        appendDots: dots => (
          <div
          style={{
            position: "absolute",
            top: "70%",
            left: "45%",
            transform: "translate( -50% -50%)",
            width: "170px",
            }}
          >
            <ul style={{width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between", }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={
              i===active?{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white", 
                background: "#131921",
                padding: "8px 0",
                cursor: "pointer",
                border: "1px solid #f3a847",

              }  :            
              {
              width: "30px",
              height: ["27px"],
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              background: "#232F3E",
              padding: "8px 0",
              cursor: "pointer",
              border: "1px solid white",
            }}
          >
            {i + 1}
          </div>
        )
        
      };
  return (
    <div className='w-full z-0'>
      <div className='w-full h-full relative'>
      <Slider {...settings} >
    <div>
      <img src={bannerImgOne} alt='BannerImageOne'/>
    </div>
    <div>
    <img src={bannerImgThree} alt='BannerImageThree'/>
    </div>
    <div>
    <img src={bannerImgFour} alt='BannerImageFour'/>
    </div>
    <div>
    <img src={bannerImgFive} alt='BannerImageFive'/>
    </div>
  </Slider>
      </div>
    </div>
  )
}

export default Banner