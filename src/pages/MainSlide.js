import React, {useRef, useState} from 'react';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

//슬라이드 이미지
import slide01 from '../tanch_main/tan_main_img1.jpg'
import slide02 from '../tanch_main/tan_main_img2.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Autoplay, Pagination]);
export default () => {
    const [btn, setBtn] = useState(false);
    const swiperRef = useRef(null);
    const posBtn = useRef(null)
  return (
    <div className='main_slide'>
        <Swiper
        ref={swiperRef}
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        autoplay = {{delay:5000, disableOnInteraction:false}}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop = {true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
        <SwiperSlide><img src={slide01} alt="슬라이드 이미지" /></SwiperSlide>
        <SwiperSlide><img src={slide02} alt="슬라이드 이미지" /></SwiperSlide>
        </Swiper>
        {/* 재생 및 정지 버튼 */}
        <button onClick={() => {
            setBtn(!btn);
            console.log(btn)
            if(btn === false){
                swiperRef.current.swiper.autoplay.stop();
                posBtn.current.style.background = "#f40";
                posBtn.current.innerText = "재생";
            }else{
                swiperRef.current.swiper.autoplay.start();
                posBtn.current.style.background = "#ff0";
                posBtn.current.innerText = "정지";
            }
        }}  ref={posBtn}>정지</button>
    </div>
  );
};