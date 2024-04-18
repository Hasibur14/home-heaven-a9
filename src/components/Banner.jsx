import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { Link } from 'react-router-dom';
import image1 from '../assets/images/slide_1.jpg';
import image2 from '../assets/images/slide_2.jpg';
import image3 from '../assets/images/slide_3.jpg';

const Banner = () => {
  useEffect(() => {

  }, []);

  return (
    <div className="mt-6 p-2 lg:p-0">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        <SwiperSlide>
          <div className="slide-content" style={{ position: 'relative' }}>
            <img className='w-full rounded-xl lg:h-[800px]' src={image1} alt="Slide 1" />
            <div className="text-overlay space-y-5" style={textOverlayStyle}>
              <h2 className='text-3xl lg:text-7xl  font-bold'>CHOSE YOUR DREAM DESTINATION</h2>
              <button className='btn bg-green-400 lg:text-xl border-none text-white'>Explore now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content" style={{ position: 'relative' }}>
            <img className='w-full rounded-xl lg:h-[800px]' src={image2} alt="Slide 2" />
            <div className="text-overlay space-y-5" style={textOverlayStyle}>
              <h2 className='md:text-5xl lg:text-7xl font-bold'>CHOSE YOUR DREAM DESTINATION</h2>
              <button className='btn bg-green-400 text-xl border-none text-white'>Explore now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content" style={{ position: 'relative' }}>
            <img className='w-full rounded-xl lg:h-[800px]' src={image3} alt="Slide 3" />
            <div className="text-overlay space-y-5" style={textOverlayStyle}>
              <h2 className='lg:text-7xl font-bold'>CHOSE YOUR DREAM DESTINATION</h2>
              <Link to='/'> <button className="btn bg-green-500 text-white mt-10">Explore now</button></Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const textOverlayStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: 'white',
  zIndex: 1,
};

export default Banner;
