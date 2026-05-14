"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import BasicSlider from "../components/BasicSlider";
import PropertyCard2 from "../components/PropertyCard2";
import { SwiperSlide } from "swiper/react";
import PropertyForm from "../components/PropertyForm";
import { motion, animate, useMotionValue, useTransform, Variants } from "framer-motion"; // Импортируем framer-motion

export default function Properties() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [selectedValues, setSelectedValues] = useState<Record<number, string>>({});
  const filtersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filtersRef.current &&
        !filtersRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectOption = (
    filterId: number,
    option: string,
    e: React.MouseEvent,
  ) => {
    e.stopPropagation();
    setSelectedValues((prev) => ({ ...prev, [filterId]: option }));
    setOpenDropdown(null);
  };

  const filters = [
    {
      id: 1,
      label: "Локация",
      options: ["Нью-Йорк", "Лондон", "Дубай", "Париж", "Венеция", "Лос-Анджелес"],
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.61646 18.6259C9.64163 18.6405 9.66141 18.6517 9.67542 18.6596L9.69869 18.6726C9.88441 18.7745 10.1148 18.7738 10.3007 18.6729L10.3246 18.6596C10.3386 18.6517 10.3584 18.6405 10.3835 18.6259C10.4339 18.5967 10.5058 18.5542 10.5963 18.4985C10.7771 18.3872 11.0323 18.223 11.3372 18.0076C11.9459 17.5776 12.7581 16.9395 13.5721 16.1061C15.1922 14.4474 16.875 11.9551 16.875 8.75C16.875 4.95304 13.797 1.875 10 1.875C6.20304 1.875 3.125 4.95304 3.125 8.75C3.125 11.9551 4.80777 14.4474 6.42788 16.1061C7.24188 16.9395 8.05409 17.5776 8.66282 18.0076C8.96771 18.223 9.22295 18.3872 9.40375 18.4985C9.49419 18.5542 9.56612 18.5967 9.61646 18.6259ZM10 11.25C11.3807 11.25 12.5 10.1307 12.5 8.75C12.5 7.36929 11.3807 6.25 10 6.25C8.61929 6.25 7.5 7.36929 7.5 8.75C7.5 10.1307 8.61929 11.25 10 11.25Z" fill="#999999"/>
        </svg>
      ),
    },
    {
      id: 2,
      label: "Тип недвижимости",
      options: ["Вилла", "Квартира", "Котедж", "Особняк"],
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.8388 3.08736C16.1632 2.9694 16.3305 2.61079 16.2125 2.2864C16.0946 1.962 15.736 1.79465 15.4116 1.91262L5.00031 5.69853V2.49999C5.00031 2.15481 4.72048 1.87499 4.37531 1.87499H3.12531C2.78013 1.87499 2.50031 2.15481 2.50031 2.49999V6.60763L1.66158 6.91262C1.33718 7.03058 1.16984 7.38918 1.2878 7.71358C1.40576 8.03797 1.76436 8.20532 2.08876 8.08736L15.8388 3.08736Z" fill="#999999"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5161 9.26209L15.0003 4.72238V7.57363L18.3388 8.78762C18.6632 8.90558 18.8305 9.26418 18.7125 9.58858C18.5946 9.91297 18.236 10.0803 17.9116 9.96236L17.5002 9.81275V16.875H18.1253C18.4705 16.875 18.7503 17.1548 18.7503 17.5C18.7503 17.8452 18.4705 18.125 18.1253 18.125H1.87531C1.53013 18.125 1.25031 17.8452 1.25031 17.5C1.25031 17.1548 1.53013 16.875 1.87531 16.875H2.50031V9.26776L2.5161 9.26209ZM15.0003 16.875V8.90371L16.2502 9.35821V16.875H15.0003ZM7.50031 11.875C7.15513 11.875 6.87531 12.1548 6.87531 12.5V16.25C6.87531 16.5952 7.15513 16.875 7.50031 16.875H10.0003C10.3455 16.875 10.6253 16.5952 10.6253 16.25V12.5C10.6253 12.1548 10.3455 11.875 10.0003 11.875H7.50031Z" fill="#999999"/>
        </svg>
      ),
    },
    {
      id: 3,
      label: "Ценовой диапозон",
      options: ["$100k - $500k", "$500k - $1M", "$1M+"],
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 6.25C8.96447 6.25 8.125 7.08947 8.125 8.125C8.125 9.16053 8.96447 10 10 10C11.0355 10 11.875 9.16053 11.875 8.125C11.875 7.08947 11.0355 6.25 10 6.25Z" fill="#999999"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 4.0625C1.25 3.19956 1.94956 2.5 2.8125 2.5H17.1875C18.0504 2.5 18.75 3.19956 18.75 4.0625V12.1875C18.75 13.0504 18.0504 13.75 17.1875 13.75H2.8125C1.94955 13.75 1.25 13.0504 1.25 12.1875V4.0625ZM6.875 8.125C6.875 6.39911 8.27411 5 10 5C11.7259 5 13.125 6.39911 13.125 8.125C13.125 9.85089 11.7259 11.25 10 11.25C8.27411 11.25 6.875 9.85089 6.875 8.125ZM15.625 7.5C15.2798 7.5 15 7.77982 15 8.125V8.13125C15 8.47643 15.2798 8.75625 15.625 8.75625H15.6313C15.9764 8.75625 16.2563 8.47643 16.2563 8.13125V8.125C16.2563 7.77982 15.9764 7.5 15.6313 7.5H15.625ZM3.75 8.125C3.75 7.77982 4.02982 7.5 4.375 7.5H4.38125C4.72643 7.5 5.00625 7.77982 5.00625 8.125V8.13125C5.00625 8.47643 4.72643 8.75625 4.38125 8.75625H4.375C4.02982 8.75625 3.75 8.47643 3.75 8.13125V8.125Z" fill="#999999"/>
          <path d="M1.875 15C1.52982 15 1.25 15.2798 1.25 15.625C1.25 15.9702 1.52982 16.25 1.875 16.25C6.37504 16.25 10.7335 16.8518 14.8748 17.9791C15.867 18.2491 16.875 17.514 16.875 16.4626V15.625C16.875 15.2798 16.5952 15 16.25 15H1.875Z" fill="#999999"/>
        </svg>
      ),
    },
    {
      id: 4,
      label: "Площадь здания",
      options: ["100-200 кв.м", "200-500 кв.м", "500+ кв.м"],
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.3149 1.33514C10.1203 1.22162 9.87968 1.22162 9.68508 1.33514L2.5 5.52643L10 9.90143L17.5 5.52643L10.3149 1.33514Z" fill="#999999"/>
          <path d="M18.125 6.60898L10.625 10.984V18.484L17.8149 14.2899C18.0069 14.1779 18.125 13.9723 18.125 13.75V6.60898Z" fill="#999999"/>
          <path d="M9.375 18.484V10.984L1.875 6.60898V13.75C1.875 13.9723 1.99307 14.1779 2.18508 14.2899L9.375 18.484Z" fill="#999999"/>
        </svg>
      ),
    },
    {
      id: 5,
      label: "Дата постройки",
      options: ["2024-2026", "2020 - 2023", "2015 - 2020", "Before 2015"],
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.625 1.875C5.97018 1.875 6.25 2.15482 6.25 2.5V3.75H13.75V2.5C13.75 2.15482 14.0298 1.875 14.375 1.875C14.7202 1.875 15 2.15482 15 2.5V3.75H15.625C17.0057 3.75 18.125 4.86929 18.125 6.25V15.625C18.125 17.0057 17.0057 18.125 15.625 18.125H4.375C2.99429 18.125 1.875 17.0057 1.875 15.625V6.25C1.875 4.86929 2.99429 3.75 4.375 3.75H5V2.5C5 2.15482 5.27982 1.875 5.625 1.875ZM16.875 9.375C16.875 8.68464 16.3154 8.125 15.625 8.125H4.375C3.68464 8.125 3.125 8.68464 3.125 9.375V15.625C3.125 16.3154 3.68464 16.875 4.375 16.875H15.625C16.3154 16.875 16.875 16.3154 16.875 15.625V9.375Z" fill="#999999"/>
        </svg>
      ),
    },
  ];

  // НАСТРОЙКИ АНИМАЦИЙ
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  const fadeInSection: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <div className="flex flex-col gap-20 md:gap-30 lg:gap-37.5 overflow-hidden">
      
      {/* 1. ГЛАВНЫЙ ЭКРАН ПОИСКА (Анимируется сразу при загрузке) */}
      <motion.section
        id="search"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col gap-10 md:gap-14 bg-linear-116 from-0% from-grey-15 to-33% to-grey-08 px-4 md:px-0 md:border-b border-grey-15 relative md:mb-30"
      >
        {/* БЛОК С ТЕКСТОМ */}
        <div className="flex flex-col gap-4 pt-12.5 md:pl-20 md:pr-50 lg:pr-100 lg:pl-40.5 md:pt-25 md:pb-32.5 border-b border-grey-15 md:border-none pb-12.5">
          <motion.h1 variants={fadeInUp} className="text-[1.75rem] md:text-[2.375rem] lg:text-5xl font-semibold text-white leading-tight">
            Найдите недвижимость Своей мечты
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-sm lg:text-lg md:text-base text-grey-50 leading-relaxed">
            Добро пожаловать в Estatein, где в каждом уголке нашего прекрасного
            мира вас ждет недвижимость вашей мечты. Ознакомьтесь с нашей
            тщательно подобранной коллекцией объектов, каждый из которых имеет
            свою уникальную историю и дает возможность изменить свою жизнь. У
            нас есть категории на любой вкус, так что ваше путешествие начнется
            прямо сейчас
          </motion.p>
        </div>

        {/* БЛОК ПОИСКА И ФИЛЬТРОВ */}
        <motion.div variants={fadeInUp} className="w-full flex flex-col gap-4 lg:gap-0 md:px-20 md:absolute md:-bottom-32.5">
          {/* Главная строка поиска */}
          <div className="flex flex-row items-center w-full md:w-auto md:mx-20 p-2.5 pl-4 md:p-4 md:pl-5 lg:p-5 lg:pl-6 bg-grey-08 border border-grey-15 rounded-xl shadow-[0_0_0_4px_#191919] lg:rounded-t-2xl lg:rounded-b-none lg:border-b-0 lg:shadow-[0_0_0_10px_#191919]">
            <div className="flex-1 w-full px-3 md:px-4 py-2">
              <input
                type="text"
                placeholder="Искать недвижимость"
                className="w-full bg-transparent border-none outline-none text-white placeholder-grey-40 text-base md:text-xl lg:text-2xl"
              />
            </div>
            <button className="flex items-center justify-center gap-2 w-15 h-12 md:w-auto md:h-auto md:px-5 md:py-3.5 bg-purple-60 hover:bg-purple-65 transition-colors rounded-lg text-white font-medium text-sm flex-shrink-0 z-10 relative overflow-hidden group">
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <span className="hidden md:inline whitespace-nowrap relative z-10">
                Найти недвижимость
              </span>
            </button>
          </div>
          
          {/* Фильтры */}
          <div ref={filtersRef} className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 p-5 md:p-2.5 bg-grey-10 rounded-xl">
            {filters.map((filter) => {
              const isOpen = openDropdown === filter.id;
              const currentValue = selectedValues[filter.id] || filter.label;
              const hasSelectedValue = !!selectedValues[filter.id];
              return (
                <div
                  key={filter.id}
                  onClick={() => setOpenDropdown(isOpen ? null : filter.id)}
                  className="relative flex items-center justify-between px-3.5 py-3 lg:p-5 bg-grey-08 border border-grey-15 rounded-lg cursor-pointer hover:bg-grey-15 transition-colors group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="text-grey-50 group-hover:text-white transition-colors flex-shrink-0">
                      {filter.icon}
                    </div>
                    <span className={`text-sm font-medium border-l border-grey-15 pl-2.5 truncate transition-colors ${hasSelectedValue ? "text-white" : "text-grey-50 group-hover:text-white"}`}>
                      {currentValue}
                    </span>
                  </div>
                  <div className={`text-grey-50 w-fit p-1 rounded-full bg-grey-10 transition-all duration-300 flex-shrink-0 ${isOpen ? "rotate-180 text-white" : "group-hover:text-white"}`}>
                    <svg className="w-7 h-7" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                  
                  <div className={`absolute top-[calc(100%+8px)] left-0 w-full bg-grey-10 border border-grey-15 rounded-lg shadow-xl z-50 overflow-hidden transition-all duration-200 origin-top ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}>
                    <div className="flex flex-col py-2">
                      {filter.options.map((option, idx) => (
                        <div
                          key={idx}
                          onClick={(e) => handleSelectOption(filter.id, option, e)}
                          className={`px-4 py-2.5 text-sm font-medium transition-colors hover:bg-grey-15 ${selectedValues[filter.id] === option ? "text-purple-60 bg-grey-08" : "text-grey-50 hover:text-white"}`}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.section>

      {/* 2. СЕКЦИЯ ВОЗМОЖНОСТЕЙ (Анимируется при скролле) */}
      <motion.section
        id="opportunities"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col w-full min-w-0 px-4 md:px-20 lg:px-40.5"
      >
        <motion.div variants={fadeInUp}>
          <Image src="/svg/stars.svg" alt="alt" width={46} height={20} className="w-[2.875rem] h-auto" />
        </motion.div>
        
        <div className="flex flex-col gap-10 lg:gap-20 mt-3.5">
          <div className="flex flex-col gap-3.5">
            <motion.h1 variants={fadeInUp} className="font-semibold text-[1.75rem] lg:text-5xl text-white">
              Откройте для себя мир возможностей
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-medium text-sm lg:text-lg text-grey-60 max-w-325">
              Наш портфель недвижимости столь же разнообразен, как и ваши мечты.
              Ознакомьтесь со следующими категориями, чтобы найти идеальный
              вариант, соответствующий вашему представлению о доме.
            </motion.p>
          </div>
          
          <motion.div variants={fadeInSection}>
            <BasicSlider slidesPerViewDesktop={3}>
              <SwiperSlide>
                <PropertyCard2 imageSrc="/img/villa.png" name="Прибрежные пейзажи — там, где манят волны" title="Вилла на берегу моря" description="Просыпайтесь под убаюкивающий шум волн. Эта вилла на берегу моря предлагает..." price="1,200,000" />
              </SwiperSlide>
              <SwiperSlide>
                <PropertyCard2 imageSrc="/img/haven.png" name="Городской оазис — жизнь в центре города" title="Столичный рай" description="Погрузитесь в атмосферу города. Эта современная квартира в самом центре..." price="650,000" />
              </SwiperSlide>
              <SwiperSlide>
                <PropertyCard2 imageSrc="/img/cottage.png" name="Очарование сельской местности — отдых на лоне природы" title="Коттедж Rustic Retreat" description="ПросНасладитесь спокойствием загородной жизни. Этот очаровательный коттедж расположен среди холмов..." price="350,000" />
              </SwiperSlide>
              <SwiperSlide>
                <PropertyCard2 imageSrc="/img/villa.png" name="Прибрежные пейзажи — там, где манят волны" title="Вилла на берегу моря" description="Просыпайтесь под убаюкивающий шум волн. Эта вилла на берегу моря предлагает..." price="1,200,000" />
              </SwiperSlide>
              <SwiperSlide>
                <PropertyCard2 imageSrc="/img/haven.png" name="Городской оазис — жизнь в центре города" title="Столичный рай" description="Погрузитесь в атмосферу города. Эта современная квартира в самом центре..." price="650,000" />
              </SwiperSlide>
              <SwiperSlide>
                <PropertyCard2 imageSrc="/img/cottage.png" name="Очарование сельской местности — отдых на лоне природы" title="Коттедж Rustic Retreat" description="ПросНасладитесь спокойствием загородной жизни. Этот очаровательный коттедж расположен среди холмов..." price="350,000" />
              </SwiperSlide>
            </BasicSlider>
          </motion.div>
        </div>
      </motion.section>

      {/* 3. СЕКЦИЯ ЗАЯВКИ (Анимируется при скролле) */}
      <motion.section
        id="application"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col w-full min-w-0 px-4 md:px-20 lg:px-40.5 mb-10"
      >
        <motion.div variants={fadeInUp}>
          <Image src="/svg/stars.svg" alt="alt" width={46} height={20} className="w-[2.875rem] h-auto" />
        </motion.div>

        <div className="flex flex-col gap-10 lg:gap-20 mt-3.5">
          <div className="flex flex-col gap-3.5">
            <motion.h1 variants={fadeInUp} className="font-semibold text-[1.75rem] lg:text-5xl text-white">
              Давайте сделаем это
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-medium text-sm lg:text-lg text-grey-60 max-w-325">
              Готовы сделать первый шаг к приобретению недвижимости своей мечты?
              Заполните форму ниже, и наши специалисты по недвижимости сотворят
              чудо и найдут для вас идеальный вариант. Не ждите, давайте
              отправимся в это увлекательное путешествие вместе.
            </motion.p>
          </div>
          
          <motion.div variants={fadeInUp}>
            <PropertyForm />
          </motion.div>
        </div>
      </motion.section>
      
    </div>
  );
}