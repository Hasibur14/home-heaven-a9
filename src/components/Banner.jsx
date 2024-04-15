import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


const Banner = () => {
    return (
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <img src="https://via.placeholder.com/600x400?text=Slide+1" alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://via.placeholder.com/600x400?text=Slide+2" alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://via.placeholder.com/600x400?text=Slide+3" alt="Slide 3" />
          </SwiperSlide>
          {/* Add more slides as needed */}
        </Swiper>
      );
};

export default Banner;