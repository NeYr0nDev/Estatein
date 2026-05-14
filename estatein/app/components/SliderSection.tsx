"use client";

import Image from 'next/image';
import { useState, ReactNode } from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/css';

interface SliderSectionProps {
  title: string;
  description: string;
  buttonText: string;
  children: ReactNode;
}

export default function SliderSection({
  title,
  description,
  buttonText,
  children,
}: SliderSectionProps) {
  
  // Сохраняем экземпляр свайпера, чтобы управлять им из наших кнопок
  // Используем any, чтобы TypeScript не ругался на сложные типы Swiper
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  
  // Состояния для счетчика (например, 01 of 10)
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  // ФУНКЦИЯ ДЛЯ УМНОГО ПОДСЧЕТА КАРТОЧЕК
  const updateCounter = (swiper: any) => {
    if (!swiper) return;
    
    // 1. Узнаем, сколько карточек сейчас вмещается на экран (учитываем адаптив)
    const spv = swiper.params.slidesPerView;
    // Если число дробное (напр. 1.5 на планшете), берем целую часть (1 полная карточка)
    const visibleCount = typeof spv === 'number' ? Math.floor(spv) : 1;
    
    // 2. Индекс активного слайда начинается с 0, поэтому прибавляем количество видимых
    let current = swiper.activeIndex + visibleCount;
    
    // 3. Защита: чтобы счетчик не показал число больше, чем есть всего слайдов
    if (current > swiper.slides.length) {
        current = swiper.slides.length;
    }
    
    setCurrentSlide(current);
  };

  return (
    <section className="w-full">
      {/* 1. ШАПКА СЕКЦИИ */}
      <div className="mb-10">
        <Image src="/svg/stars.svg" alt="stars" width={30} height={30} className="mb-2" />
        <h2 className="text-3xl font-semibold text-white mb-3">{title}</h2>
        <p className="text-grey-50 text-sm leading-relaxed">{description}</p>
      </div>

      {/* 2. КОНТЕНТ (SWIPER) */}
      <div className="mb-10">
        <Swiper
          spaceBetween={20} // Расстояние между карточками
          slidesPerView={1} // По умолчанию (на мобилках) показываем 1 карточку
          breakpoints={{
            // Настройки адаптива
            768: { slidesPerView: 2 }, // На планшетах - 2 карточки
            1024: { slidesPerView: 3 }, // На десктопах - 3 карточки
          }}
          // Когда свайпер инициализировался, сохраняем его и считаем слайды
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            setTotalSlides(swiper.slides.length);
            updateCounter(swiper);
          }}
          onSlideChange={(swiper) => updateCounter(swiper)}
          onResize={(swiper) => updateCounter(swiper)}
          className="w-full"
        >
          {children}
        </Swiper>
      </div>

      {/* 3. ПОДВАЛ С КОНТРОЛАМИ */}
      <div className="flex items-center justify-between pt-4 border-t border-grey-15">
        
        {/* Левая кнопка */}
        <button className="px-5 py-3.5 bg-grey-10 border border-grey-15 rounded-lg text-sm text-white hover:border-purple-60 hover:shadow-[0_0_6px_#262626] duration-350 ease transition-colors">
          {buttonText}
        </button>

        {/* Правый блок навигации */}
        <div className="flex items-center gap-2.5 w-fit md:w-auto justify-between md:justify-end">
          {/* Кнопка Влево: вызываем метод slidePrev() у свайпера */}
          <button 
            onClick={() => swiperInstance?.slidePrev()}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-grey-15 bg-grey-08 hover:bg-grey-10 transition-colors text-white"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          {/* Счетчик */}
          <div className="text-grey-50 text-sm">
            <span className="text-white font-medium">{formatNumber(currentSlide)}</span>
            {' '}of {formatNumber(totalSlides)}
          </div>

          {/* Кнопка Вправо: вызываем метод slideNext() */}
          <button 
            onClick={() => swiperInstance?.slideNext()}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-grey-15 bg-grey-08 hover:bg-grey-10 transition-colors text-white"
          >
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
}