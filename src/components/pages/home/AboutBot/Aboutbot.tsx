// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

import Style from "./Aboutbot.module.scss";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Aboutbot = () => {
  return (
    <>
      {/* PC Media */}
      <div className={Style.Slider_Wrapper}>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={Style.mySwiper}>
          <SwiperSlide className={Style.Slider}>
            <div className={Style.mislide_wrapper}>
              <ElectricBoltIcon />
              <h1>Реальная тех поддержка</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className={Style.Slider}>
            <div className={Style.mislide_wrapper}>
              <AttachMoneyIcon />
              <h1>Реальная тех поддержка</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className={Style.Slider}>Slide 3</SwiperSlide>
          <SwiperSlide className={Style.Slider}>Slide 4</SwiperSlide>
        </Swiper>
      </div>
      {/* Laptop Media */}
      <div className={Style.Slider_Wrapper_laptop}>
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={`${Style.mySwiper} custom-swiper-pagination`}>
          <SwiperSlide className={Style.Slider}>Slide 1</SwiperSlide>
          <SwiperSlide className={Style.Slider}>Slide 2</SwiperSlide>
          <SwiperSlide className={Style.Slider}>Slide 3</SwiperSlide>
          <SwiperSlide className={Style.Slider}>Slide 4</SwiperSlide>
        </Swiper>
      </div>
      {/* Phone Media */}
      <div className={Style.Slider_Wrapper_phone}>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={`${Style.mySwiper} custom-swiper-pagination`}>
          <SwiperSlide className={Style.Slider}>Slide 1</SwiperSlide>
          <SwiperSlide className={Style.Slider}>Slide 2</SwiperSlide>
          <SwiperSlide className={Style.Slider}>Slide 3</SwiperSlide>
          <SwiperSlide className={Style.Slider}>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Aboutbot;
