import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { sliderItems } from "../data.js";
import "../Styles/slider.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  const [Slider, setSlider] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/api/slider");

      setSlider(result.data);
    };

    fetchData();
  }, []);

  SwiperCore.use([Autoplay]);
  return (
    <div className="s-container">
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop={true}
      >
        <div className="wrapper">
          {sliderItems.map((item) => (
            <SwiperSlide className="SwiperSlide">
              <img src={item.image} id="s-img" alt="" />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
