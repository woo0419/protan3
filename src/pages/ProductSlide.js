// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

//슬라이드 이미지
import slide01 from '../tanch_main/food/food1.jpg'
import slide02 from '../tanch_main/food/food2.jpg'
import slide03 from '../tanch_main/food/food3.jpg'
import slide04 from '../tanch_main/food/food4.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default () => {
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination]}
    spaceBetween={20}
    slidesPerView={4}
    navigation
    loop = {true}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
    <SwiperSlide><img src={slide01} alt="슬라이드 이미지" /></SwiperSlide>
    <SwiperSlide><img src={slide02} alt="슬라이드 이미지" /></SwiperSlide>
    <SwiperSlide><img src={slide03} alt="슬라이드 이미지" /></SwiperSlide>
    <SwiperSlide><img src={slide04} alt="슬라이드 이미지" /></SwiperSlide>
    <SwiperSlide><img src={slide01} alt="슬라이드 이미지" /></SwiperSlide>
    <SwiperSlide><img src={slide02} alt="슬라이드 이미지" /></SwiperSlide>
    <SwiperSlide><img src={slide03} alt="슬라이드 이미지" /></SwiperSlide>
    <SwiperSlide><img src={slide04} alt="슬라이드 이미지" /></SwiperSlide>
    </Swiper>
  );
};