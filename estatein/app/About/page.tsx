"use client";
import { useEffect } from "react";
import Image from "next/image";
import { motion, animate, useMotionValue, useTransform, Variants } from "framer-motion";
import ValueItem from "../components/ValueItem";
import AchivementCard from "../components/AchivementCard";
import StepCard from "../components/StepCard";
import PersonalCard from "../components/PersonalCard";
import ClientCard from "../components/ClientCard";
import BasicSlider from "../components/BasicSlider";
import { SwiperSlide } from "swiper/react";

// КОМПОНЕНТ АНИМИРОВАННЫХ ЧИСЕЛ
const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const display = useTransform(rounded, (latest) => `${latest}${suffix}`);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2.5,
      ease: "easeOut",
      delay: 0.5,
    });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{display}</motion.span>;
};

export default function About() {
  const values = [
    {
      icon: "/svg/purpleStar.svg",
      title: "Доверие",
      description: "Доверие является краеугольным камнем любой успешной сделки с недвижимостью.",
    },
    {
      icon: "/svg/excellence.svg",
      title: "Превосходство",
      description: "Мы устанавливаем для себя высокую планку. Начиная с объектов недвижимости, которые мы перечисляем, и заканчивая услугами, которые мы предоставляем.",
    },
    {
      icon: "/svg/clients.svg",
      title: "Клиенты",
      description: "Ваши мечты и потребности находятся в центре нашей вселенной. Мы слушаем и понимаем.",
    },
    {
      icon: "/svg/purpleStar.svg",
      title: "Наше обязательство",
      description: "Мы стремимся предоставить вам высочайший уровень обслуживания и профессионализма.",
    },
  ];

  // НАСТРОЙКИ АНИМАЦИЙ
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" as const } },
  };

  return (
    <div className="w-full flex flex-col flex-1 items-center gap-16 xl:gap-[7.5rem] py-10 px-4 md:px-[10.125rem] bg-grey-08 font-sans overflow-hidden">
      
      {/* 1. ГЛАВНЫЙ ЭКРАН (Наше путешествие) */}
      <main id="journey" className="w-full flex flex-col gap-10 xl:gap-24">
        <div className="flex flex-col lg:flex-row items-center w-full gap-10 lg:gap-0">
          
          {/* ЛЕВАЯ КОЛОНКА */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2 flex flex-col gap-10 lg:pr-10 xl:pr-16"
          >
            <div className="flex flex-col">
              <motion.div variants={fadeInUp}>
                <Image src="/svg/stars.svg" alt="alt" width={46} height={20} className="w-[2.875rem] h-auto mb-4" />
              </motion.div>
              <div className="flex flex-col gap-4">
                <motion.h1 variants={fadeInUp} className="font-semibold text-[1.75rem] lg:text-[2.375rem] xl:text-[3rem] leading-tight text-white">
                  Наше путешествие
                </motion.h1>
                <motion.p variants={fadeInUp} className="font-medium text-sm lg:text-base text-grey-60">
                  Наша история - это история постоянного роста и эволюции. Мы начинали как небольшая команда с большими мечтами, полная решимости создать платформу для работы с недвижимостью, выходящую за рамки обычного. С годами мы расширили сферу своей деятельности, наладили ценные партнерские отношения и завоевали доверие бесчисленного количества клиентов.
                </motion.p>
              </div>
            </div>

            {/* СТАТИСТИКА С БЕГУЩИМИ ЦИФРАМИ */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full mt-2">
              <motion.div whileHover={{ scale: 1.05, y: -5 }} className="group min-w-[10.6875rem] flex flex-col items-center lg:items-start justify-center py-4 px-auto md:pl-6 bg-grey-10 border border-grey-15 rounded-xl gap-0.5 cursor-pointer hover:border-purple-60 hover:shadow-[0_8px_20px_rgba(112,59,247,0.15)] transition-all duration-300">
                <span className="text-2xl lg:text-[2.5rem] font-bold text-white group-hover:text-purple-60 transition-colors">
                  <AnimatedNumber value={200} suffix="+" />
                </span>
                <span className="text-sm lg:text-lg text-grey-60 text-center md:text-start">Довольных клиентов</span>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05, y: -5 }} className="group min-w-[10.6875rem] flex flex-col items-center lg:items-start justify-center py-4 px-6 bg-grey-10 border border-grey-15 rounded-xl gap-0.5 cursor-pointer hover:border-purple-60 hover:shadow-[0_8px_20px_rgba(112,59,247,0.15)] transition-all duration-300">
                <span className="text-2xl lg:text-[2.5rem] font-bold text-white group-hover:text-purple-60 transition-colors">
                  <AnimatedNumber value={10} suffix="k+" />
                </span>
                <span className="text-sm lg:text-lg text-grey-60">Недвижимостей</span>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05, y: -5 }} className="group col-span-2 md:col-span-1 flex flex-col items-center lg:items-start justify-center py-4 px-6 bg-grey-10 border border-grey-15 rounded-xl gap-0.5 cursor-pointer hover:border-purple-60 hover:shadow-[0_8px_20px_rgba(112,59,247,0.15)] transition-all duration-300">
                <span className="text-2xl lg:text-[2.5rem] font-bold text-white group-hover:text-purple-60 transition-colors">
                  <AnimatedNumber value={16} suffix="+" />
                </span>
                <span className="text-sm lg:text-lg text-grey-60">Лет опыта</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ПРАВАЯ КОЛОНКА (Картинка) */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2 relative flex justify-center order-first lg:order-last h-full lg:px-0"
          >
            <div className="w-full rounded-xl overflow-hidden">
              <Image src="/img/houseonhand.png" alt="House" width={755} height={546} className="w-[22.375rem] lg:w-[47.1875rem] h-auto object-cover border border-grey-15 rounded-xl" />
            </div>
          </motion.div>
        </div>
      </main>

      {/* 2. НАШИ ЦЕННОСТИ */}
      <motion.section
        id="values"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20"
      >
        <div className="w-full lg:w-[35%] flex flex-col gap-4">
          <motion.div variants={fadeInUp}>
            <Image src="/svg/stars.svg" alt="alt" width={46} height={20} className="w-[2.875rem] h-auto" />
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-[1.75rem] lg:text-[3rem] font-semibold text-white">
            Наши ценности
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-sm lg:text-base text-grey-60 leading-relaxed">
            Наша история - это история постоянного роста и эволюции. Мы начинали как небольшая команда с большими мечтами, полная решимости создать платформу недвижимости, выходящую за рамки обыденности.
          </motion.p>
        </div>

        {/* --- АНИМИРОВАННАЯ РАМКА НАЧИНАЕТСЯ ЗДЕСЬ --- */}
        <motion.div 
          variants={fadeInUp} 
          // Главный контейнер: overflow-hidden обрезает градиент по углам, bg-grey-15 задает цвет статичной части рамки, p-[1px] задает толщину рамки
          className="w-full lg:w-[65%] relative p-[1px] bg-grey-15 shadow-[0_0_0_6px] lg:shadow-[0_0_0_10px] shadow-[#191919] rounded-2xl overflow-hidden"
        >
          {/* Вращающийся градиент (Светящаяся фиолетовая полоса) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            // Делаем элемент огромным (250%), чтобы при вращении не было видно его углов
            className="absolute top-1/2 left-1/2 w-[250%] h-[250%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_75%,#703bf7_100%)] z-0"
          />

          {/* Внутренний контейнер, который перекрывает градиент и оставляет только рамку */}
          <div className="relative z-10 w-full h-full p-6 lg:p-2 bg-grey-08 rounded-[15px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {values.map((item, index) => (
                <motion.div
                  key={index}
                  className={`transition-all duration-300 lg:border-grey-15 ${index === 0 ? "lg:border-r lg:border-b" : ""} ${index === 1 ? "lg:border-b" : ""} ${index === 2 ? "lg:border-r" : ""}`}
                >
                  <ValueItem icon={item.icon} title={item.title} description={item.description} isLast={index === values.length - 1} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        {/* --- АНИМИРОВАННАЯ РАМКА ЗАКАНЧИВАЕТСЯ --- */}
        
      </motion.section>

      {/* 3. НАШИ ДОСТИЖЕНИЯ */}
      <motion.section
        id="achievements"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col w-full"
      >
        <motion.div variants={fadeInUp}><Image src="/svg/stars.svg" alt="alt" width={46} height={20} className="w-[2.875rem] h-auto mb-4" /></motion.div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <motion.h1 variants={fadeInUp} className="font-semibold text-[1.75rem] lg:text-5xl text-white">Наши достижения</motion.h1>
            <motion.p variants={fadeInUp} className="font-medium text-sm lg:text-lg text-grey-60">
              Наша история - это история постоянного роста и эволюции. Мы начинали как небольшая команда с большими мечтами, полная решимости создать платформу недвижимости, выходящую за рамки обыденности.
            </motion.p>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-7.5 lg:gap-10">
            <motion.div variants={fadeInUp} className="flex-1">
              <AchivementCard title="Более 3-х лет безупречной работы" description="За более чем 3-летний опыт работы в отрасли мы накопили огромный багаж знаний и опыта." />
            </motion.div>
            <motion.div variants={fadeInUp} className="flex-1">
              <AchivementCard title="Довольные клиенты" description="Нашим главным достижением является удовлетворенность наших клиентов. Их истории успеха подпитывают нашу страсть к тому, что мы делаем." />
            </motion.div>
            <motion.div variants={fadeInUp} className="flex-1">
              <AchivementCard title="Признание в отрасли" description="Мы заслужили уважение наших коллег и лидеров отрасли благодаря почестям и наградам, которые отражают наше стремление к совершенству." />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 4. ЗНАКОМСТВО С ОПЫТОМ */}
      <motion.section
        id="experience"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col w-full"
      >
        <motion.div variants={fadeInUp}><Image src="/svg/stars.svg" alt="alt" width={46} height={20} className="w-[2.875rem] h-auto mb-4" /></motion.div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <motion.h1 variants={fadeInUp} className="font-semibold text-[1.75rem] lg:text-5xl text-white">Знакомство с Estatein Experience</motion.h1>
            <motion.p variants={fadeInUp} className="font-medium text-sm lg:text-lg text-grey-60">
              В Estatein мы разработали простой процесс, который поможет вам с легкостью найти и купить недвижимость вашей мечты. Вот пошаговое руководство по его использованию.
            </motion.p>
          </div>
          <div className="flex flex-col md:grid md:grid-row-3 md:gap-10 lg:gap-12.5">
            <div className="flex flex-col md:flex-row gap-7.5 md:gap-5 lg:gap-7.5">
              <motion.div variants={fadeInUp} className="flex-1"><StepCard stepNumber="01" title="Откройте для себя мир возможностей" description="Ваше путешествие начинается с изучения тщательно отобранных объектов недвижимости. Воспользуйтесь нашими интуитивно понятными инструментами поиска, чтобы отфильтровать объекты по своим предпочтениям, включая местоположение." /></motion.div>
              <motion.div variants={fadeInUp} className="flex-1"><StepCard stepNumber="02" title="Как сузить круг выбора" description="Если вы нашли понравившиеся объекты недвижимости, сохраните их в своем аккаунте или составьте список. Так вы сможете сравнивать понравившиеся варианты и возвращаться к ним по мере принятия решения." /></motion.div>
              <motion.div variants={fadeInUp} className="flex-1"><StepCard stepNumber="03" title="Индивидуальное руководство" description="У вас есть вопросы о недвижимости или вам нужна дополнительная информация? Наша команда экспертов по недвижимости всегда на связи." /></motion.div>
            </div>
            <div className="flex hidden md:flex flex-row gap-7.5 md:gap-5 lg:gap-7.5">
              <motion.div variants={fadeInUp} className="flex-1"><StepCard stepNumber="04" title="Убедитесь в этом сами" description="Организуйте просмотр интересующих вас объектов недвижимости. Мы свяжемся с владельцами и будем сопровождать вас, чтобы вы могли лично оценить свой будущий дом." /></motion.div>
              <motion.div variants={fadeInUp} className="flex-1"><StepCard stepNumber="05" title="Принятие обоснованных решений" description="Прежде чем сделать предложение, наша команда поможет вам провести комплексную проверку, включающую осмотр недвижимости, юридическую экспертизу и анализ рынка. Мы хотим, чтобы вы были полностью информированы." /></motion.div>
              <motion.div variants={fadeInUp} className="flex-1"><StepCard stepNumber="06" title="Получение наилучшего предложения" description="Мы поможем вам договориться об оптимальных условиях и подготовить ваше предложение. Наша цель — приобрести недвижимость по выгодной цене и на выгодных условиях." /></motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. НАША КОМАНДА */}
      <motion.section
        id="team"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col w-full"
      >
        <motion.div variants={fadeInUp}><Image src="/svg/stars.svg" alt="alt" width={46} height={20} className="w-[2.875rem] h-auto mb-4" /></motion.div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <motion.h1 variants={fadeInUp} className="font-semibold text-[1.75rem] lg:text-5xl text-white">Познакомьтесь с командой Estatein</motion.h1>
            <motion.p variants={fadeInUp} className="font-medium text-sm lg:text-lg text-grey-60">
              Успех Estatein обусловлен преданностью делу и профессионализмом нашей команды. Познакомьтесь с людьми, которые воплощают в жизнь ваши мечты о недвижимости.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7.5">
            <motion.div variants={fadeInUp}><PersonalCard imageSrc="/img/MaxMitchell.png" name="Митчелл Максим Эдуардович" position="Основатель / Главный исполнительный директор (CEO)" /></motion.div>
            <motion.div variants={fadeInUp}><PersonalCard imageSrc="/img/SarahJonson.png" name="Ермакова Софья Алексеевна" position="Директор по развитию / Региональный управляющий" /></motion.div>
            <motion.div variants={fadeInUp}><PersonalCard imageSrc="/img/DavidBrown.png" name="Токарев Даниил Игоревич" position="Руководитель отдела управления недвижимостью" /></motion.div>
            <motion.div variants={fadeInUp}><PersonalCard imageSrc="/img/MichaelTurner.png" name="Трушина Алена Владимировна" position="Юрист-консультант" /></motion.div>
          </div>
        </div>
      </motion.section>

      {/* 6. НАШИ КЛИЕНТЫ (Слайдер) */}
      <motion.section
        id="clients"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col w-full min-w-0"
      >
        <Image src="/svg/stars.svg" alt="alt" width={46} height={20} className="w-[2.875rem] h-auto mb-4" />
        <div className="flex flex-col gap-10 lg:gap-20">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-[1.75rem] lg:text-5xl text-white">Наши уважаемые клиенты</h1>
            <p className="font-medium text-sm lg:text-lg text-grey-60">
              В Estatein мы имели честь работать с самыми разными клиентами из различных отраслей. Вот некоторые из них, с которыми нам посчастливилось сотрудничать.
            </p>
          </div>
          <BasicSlider slidesPerViewDesktop={2}>
            <SwiperSlide><ClientCard year="2019" title="ABC Corp" domain="Коммерческая недвижимость" category="Строительство роскошного дома" said="Опыт Estatein в поиске идеального офисного помещения для нашей расширяющейся компании оказался бесценным. Они действительно понимают потребности нашего бизнеса." /></SwiperSlide>
            <SwiperSlide><ClientCard year="2020" title="GreenTech Enterprises" domain="Коммерческая недвижимость" category="Торговые площади" said="Благодаря умению Estatein находить лучшие места для розничной торговли мы смогли расширить присутствие нашего бренда. Они — надежный партнер в нашем деле." /></SwiperSlide>
            <SwiperSlide><ClientCard year="2019" title="ABC Corp" domain="Коммерческая недвижимость" category="Строительство роскошного дома" said="Опыт Estatein в поиске идеального офисного помещения для нашей расширяющейся компании оказался бесценным. Они действительно понимают потребности нашего бизнеса." /></SwiperSlide>
            <SwiperSlide><ClientCard year="2020" title="GreenTech Enterprises" domain="Коммерческая недвижимость" category="Торговые площади" said="Благодаря умению Estatein находить лучшие места для розничной торговли мы смогли расширить присутствие нашего бренда. Они — надежный партнер в нашем деле." /></SwiperSlide>
          </BasicSlider>
        </div>
      </motion.section>
    </div>
  );
}