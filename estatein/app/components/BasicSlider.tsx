"use client";

import { useState, ReactNode } from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/css';

interface BasicSliderProps {
  children: ReactNode;
  slidesPerViewDesktop?: number;
}

export default function BasicSlider({
  children,
  slidesPerViewDesktop = 2
}: BasicSliderProps) {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    // 1. САМОЕ ВАЖНОЕ: min-w-0 на главном контейнере останавливает бесконечный цикл Flexbox
    <div className="w-full min-w-0 flex flex-col">
      
      {/* 2. ВТОРОЕ ВАЖНОЕ: overflow-hidden именно вокруг самого Swiper */}
      <div className="w-full min-w-0 overflow-hidden mb-8 md:mb-10 relative">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: slidesPerViewDesktop },
          }}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            setTotalSlides(swiper.slides.length);
          }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
          className="w-full"
        >
          {children}
        </Swiper>
      </div>

      {/* Навигация */}
      <div className="flex items-center justify-between pt-6 border-t border-grey-15 w-full min-w-0">
        
        {/* Десктопный счетчик */}
        <div className="hidden md:block text-grey-50 text-base">
          <span className="text-white font-medium">{formatNumber(currentSlide)}</span>
          {' '}of {formatNumber(totalSlides)}
        </div>

        {/* Кнопки и мобильный счетчик */}
        <div className="flex items-center justify-between w-full md:w-auto md:gap-4">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="w-12 h-12 md:w-14 md:h-14 flex flex-shrink-0 items-center justify-center rounded-full border border-grey-15 bg-grey-08 hover:bg-grey-10 transition-colors text-white z-10"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div className="md:hidden text-grey-50 text-sm whitespace-nowrap">
            <span className="text-white font-medium">{formatNumber(currentSlide)}</span>
            {' '}of {formatNumber(totalSlides)}
          </div>

          <button
            onClick={() => swiperInstance?.slideNext()}
            className="w-12 h-12 md:w-14 md:h-14 flex flex-shrink-0 items-center justify-center rounded-full border border-grey-15 bg-grey-08 hover:bg-grey-10 transition-colors text-white z-10"
          >
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}