"use client";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import OfficesSection from "../components/OfficeSection";
import { motion, animate, useMotionValue, useTransform, Variants } from "framer-motion"; // Импортируем framer-motion

export default function Contacts() {
  
  // НАСТРОЙКИ АНИМАЦИЙ
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }, // Задержка между появлением элементов
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  const scaleInImage: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <div className="flex flex-col gap-20 md:gap-30 lg:gap-37.5 overflow-hidden pb-20">
      
      {/* 1. ГЛАВНЫЙ ЭКРАН */}
      <motion.section
        id="search"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col gap-10 md:gap-14 bg-linear-116 from-0% from-grey-15 to-33% to-grey-08 md:px-0 md:border-b border-grey-15 relative"
      >
        {/* БЛОК С ТЕКСТОМ */}
        <motion.div variants={fadeInUp} className="flex flex-col gap-4 px-4 pt-12.5 md:pl-20 md:pr-50 lg:pr-100 lg:pl-40.5 md:pt-25 md:pb-32.5 border-b border-grey-15 md:border-none pb-12.5">
          <h1 className="text-[1.75rem] md:text-[2.375rem] lg:text-5xl font-semibold text-white leading-tight">
            Свяжитесь с Estatein
          </h1>
          <p className="text-sm lg:text-lg md:text-base text-grey-50 leading-relaxed">
            Добро пожаловать на страницу «Контакты» Estatein. Мы готовы помочь вам с любыми вопросами, запросами или отзывами.
          </p>
        </motion.div>

        {/* 4 КАРТОЧКИ КОНТАКТОВ */}
        <motion.div
          id="features"
          variants={fadeInUp}
          className="w-full bg-grey-08 border shadow-[0_0_0_6px] lg:shadow-[0_0_0_10px] shadow-[#191919] border-grey-15 p-4 lg:py-4 lg:px-4"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-2.5 w-full">
            
            {/* Карточка 1 */}
            <motion.div whileHover={{ y: -5 }} className="group relative flex flex-col gap-3.5 items-center justify-center py-5 px-3.5 bg-grey-10 border border-grey-15 rounded-xl cursor-pointer hover:bg-grey-15 hover:border-purple-60 hover:shadow-[0_8px_20px_rgba(112,59,247,0.15)] transition-all duration-300">
              <div className="absolute top-4 right-4 text-grey-40 group-hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
              <Image src="/svg/icon-email.svg" alt="email" width={48} height={48} className="w-12 h-auto" />
              <span className="text-white text-sm font-semibold text-center group-hover:text-purple-50 transition-colors">
                info@estatein.com
              </span>
            </motion.div>

            {/* Карточка 2 */}
            <motion.div whileHover={{ y: -5 }} className="group relative flex flex-col gap-3.5 items-center justify-center py-5 px-3.5 bg-grey-10 border border-grey-15 rounded-xl cursor-pointer hover:bg-grey-15 hover:border-purple-60 hover:shadow-[0_8px_20px_rgba(112,59,247,0.15)] transition-all duration-300">
              <div className="absolute top-4 right-4 text-grey-40 group-hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
              <Image src="/svg/icon-phone.svg" alt="phone" width={48} height={48} className="w-12 h-auto" />
              <span className="text-white text-sm font-semibold text-center group-hover:text-purple-50 transition-colors">
                +7 (988) 456-78-90
              </span>
            </motion.div>

            {/* Карточка 3 */}
            <motion.div whileHover={{ y: -5 }} className="group relative flex flex-col gap-3.5 items-center justify-center py-5 px-3.5 bg-grey-10 border border-grey-15 rounded-xl cursor-pointer hover:bg-grey-15 hover:border-purple-60 hover:shadow-[0_8px_20px_rgba(112,59,247,0.15)] transition-all duration-300">
              <div className="absolute top-4 right-4 text-grey-40 group-hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
              <Image src="/svg/icon-place.svg" alt="place" width={48} height={48} className="w-12 h-auto" />
              <span className="text-white text-sm font-semibold text-center group-hover:text-purple-50 transition-colors">
                Главная штаб-квартира
              </span>
            </motion.div>

            {/* Карточка 4 */}
            <motion.div whileHover={{ y: -5 }} className="group relative flex flex-col gap-3.5 items-center justify-center py-5 px-3.5 bg-grey-10 border border-grey-15 rounded-xl cursor-pointer hover:bg-grey-15 hover:border-purple-60 hover:shadow-[0_8px_20px_rgba(112,59,247,0.15)] transition-all duration-300">
              <div className="absolute top-4 right-4 text-grey-40 group-hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
              <Image src="/svg/icon-links.svg" alt="links" width={48} height={48} className="w-12 h-auto" />
              <span className="text-white text-sm font-semibold text-center group-hover:text-purple-50 transition-colors">
                Instagram LinkedIn Facebook
              </span>
            </motion.div>

          </div>
        </motion.div>
      </motion.section>

      {/* 2. СЕКЦИЯ ФОРМЫ (Давайте свяжемся) */}
      <motion.section
        id="contact-form"
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
          <motion.div variants={fadeInUp} className="flex flex-col gap-3.5">
            <h1 className="font-semibold text-[1.75rem] lg:text-5xl text-white">
              Давайте свяжемся
            </h1>
            <p className="font-medium text-sm lg:text-lg text-grey-60 max-w-325">
              Мы будем рады пообщаться с вами и узнать больше о ваших целях в сфере недвижимости. Воспользуйтесь формой ниже, чтобы связаться с Estatein.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <ContactForm />
          </motion.div>
        </div>
      </motion.section>

      {/* 3. СЕКЦИЯ ОФИСОВ */}
      <motion.section
        id="offices"
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
          <motion.div variants={fadeInUp} className="flex flex-col gap-3.5">
            <h1 className="font-semibold text-[1.75rem] lg:text-5xl text-white">
              Откройте для себя расположение наших офисов
            </h1>
            <p className="font-medium text-sm lg:text-lg text-grey-60 max-w-325">
              Estatein предлагает свои услуги в нескольких регионах. Хотите познакомиться с нашей командой?
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <OfficesSection />
          </motion.div>
        </div>
      </motion.section>
      
      {/* 4. ГАЛЕРЕЯ */}
      <div className="px-4 pd:mx-20 lg:px-40.5">
            <section className="w-full bg-[url(/svg/gallerybg.svg)] bg-no-repeat bg-cover flex flex-col gap-12.5 md:gap-5 md:p-15 p-6 border border-grey-15 rounded-xl ">
              <div className="flex w-full gap-2.5 md:gap-5">
                <div className="flex flex-col gap-2.5 md:gap-5 w-full">
                  <Image unoptimized src="/img/gallery1.png" alt="alt" width={708.5} height={236} className="w-full" />
                  <Image src="/img/gallery2.png" alt="alt" width={708.5} height={236} className="w-full" />
                </div>
                <div className="flex flex-col gap-2.5 md:gap-5 w-full">
                  <Image src="/img/gallery3.png" alt="alt" width={708.5} height={236} className="w-full" />
                  <div className="flex gap-2.5 md:gap-5 w-full">
                    <Image src="/img/gallery4.png" alt="alt" width={344.25} height={236} className="w-full" />
                    <Image src="/img/gallery5.png" alt="alt" width={344.25} height={236} className="w-full" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center w-full">
              <div className="flex flex-col gap-2">
              <Image src="/svg/stars.svg" alt="stars" width={55} height={24} className="mb-1.5" />
                <h1 className="font-semibold text-[1.75rem] md:text-[2.375rem] lg:text-5xl">Исследуйте мир Estatein</h1>
                <p className="font-medium text-sm md:text-base lg:text-lg text-grey-60">Окунитесь в мир Estatein, где профессионализм сочетается с теплотой, а опыт — со страстью. Наша галерея позволяет заглянуть в наши рабочие помещения и познакомиться с нашей командой поближе.</p>
              </div>
              <Image src="/img/galleryB.png" alt="alt" width={708.5} height={280} className="w-full mt-5 md:mt-0 md:ml-5" />
              </div>
            </section>
          </div>
      
    </div>
  );
}