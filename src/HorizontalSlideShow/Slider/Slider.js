import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = ({ data = [], handleChooseImage = () => {} }) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor
      centeredSlides
      slideToClickedSlide
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      <ul>
        {data.map((_item, index) => (
          <li key={index}>
            <SwiperSlide onClick={() => handleChooseImage(_item.id)}>
              <p className="image-name">{_item.name}</p>
              <img
                className="image-slider"
                src={_item.srcImage}
                alt={_item.alt}
              />
            </SwiperSlide>
          </li>
        ))}
      </ul>
      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <i className="fa fa-chevron-left color-black" aria-hidden />
        </div>
        <div className="swiper-button-next slider-arrow">
          <i className="fa fa-chevron-right color-black" aria-hidden />
        </div>
        <div className="swiper-pagination" />
      </div>
    </Swiper>
  );
};

export default memo(Slider);
