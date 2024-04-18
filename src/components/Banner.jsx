import 'animate.css';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import image1 from '../assets/images/slide_1.jpg';
import image2 from '../assets/images/slide_2.jpg';
import image3 from '../assets/images/slide_3.jpg';

const Banner = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    const interval = setInterval(() => {
      if (swiper && swiper.activeIndex < swiper.slides.length - 1) {
        swiper.slideNext();
      } else {
        swiper.slideTo(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const textOverlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
    zIndex: 1,
  };

  return (
    <div className="mt-6 p-2 lg:p-0">
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        <SwiperSlide>
          <div className="slide-content" style={{ position: 'relative' }}>
            <img className='animate__animated animate__slideInUp w-full rounded-xl lg:h-[800px]' src={image1} alt="Slide 1" />
            <div className="text-overlay space-y-5" style={textOverlayStyle}>
              <h2 className='text-3xl md:text-5xl lg:text-7xl  font-bold animate__animated animate__backInDown'>CHOSE YOUR DREAM DESTINATION</h2>
              <button className='animate__animated  animate__backInUp btn bg-transparent border-2 border-green-400  text-xl lg:text-xl text-white hover:bg-green-400'>Explore now</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content" style={{ position: 'relative' }}>
            <img className='animate__animated animate__slideInUp w-full rounded-xl lg:h-[800px]' src={image2} alt="Slide 1" />
            <div className="text-overlay space-y-5" style={textOverlayStyle}>
              <h2 className='text-3xl md:text-5xl lg:text-7xl  font-bold animate__animated animate__backInDown'>CHOSE YOUR DREAM DESTINATION</h2>
              <button className='animate__animated  animate__backInUp btn bg-transparent border-2 border-green-400 text-xl lg:text-xl text-white hover:bg-green-400'>Explore now</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content" style={{ position: 'relative' }}>
            <img className='animate__animated animate__slideInUp w-full rounded-xl lg:h-[800px]' src={image3} alt="Slide 1" />
            <div className="text-overlay space-y-5" style={textOverlayStyle}>
              <h2 className='text-3xl md:text-5xl lg:text-7xl  font-bold animate__animated animate__backInDown'>CHOSE YOUR DREAM DESTINATION</h2>
              <button className='animate__animated  animate__backInUp btn bg-transparent border-2 border-green-400  text-xl lg:text-xl text-white hover:bg-green-400'>Explore now</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
