"use client";
import Image from "next/image";
import ServiceCard from "../components/ServiceCard";
import ServiceCardBig from "../components/ServiceCardBig";
import { motion } from "framer-motion"; // Импортируем framer-motion

export default function Services() {
  
  // НАСТРОЙКИ АНИМАЦИЙ
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }, // Задержка между карточками
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col gap-20 md:gap-30 lg:gap-37.5 overflow-hidden">
      
      {/* 1. ГЛАВНЫЙ ЭКРАН (Анимируется сразу при загрузке) */}
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
            Найдите недвижимость Своей мечты
          </h1>
          <p className="text-sm lg:text-lg md:text-base text-grey-50 leading-relaxed">
            Добро пожаловать в Estatein, где в каждом уголке нашего прекрасного
            мира вас ждет недвижимость вашей мечты. Ознакомьтесь с нашей
            тщательно подобранной коллекцией объектов, каждый из которых имеет
            свою уникальную историю и дает возможность изменить свою жизнь. У
            нас есть категории на любой вкус, так что ваше путешествие начнется
            прямо сейчас
          </p>
        </motion.div>

        {/* 4 КАРТОЧКИ (Анимируются каскадом) */}
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
              <Image src="/svg/icon-home.svg" alt="Home" width={48} height={48} className="w-12 h-auto" />
              <span className="text-white text-sm font-semibold text-center group-hover:text-purple-50 transition-colors">
                Найдите дом своей мечты
              </span>
            </motion.div>

            {/* Карточка 2 */}
            <motion.div whileHover={{ y: -5 }} className="group relative flex flex-col gap-3.5 items-center justify-center py-5 px-3.5 bg-grey-10 border border-grey-15 rounded-xl cursor-pointer hover:bg-grey-15 hover:border-purple-60 hover:shadow-[0_8px_20px_rgba(112,59,247,0.15)] transition-all duration-300">
              <div className="absolute top-4 right-4 text-grey-40 group-hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
              <Image src="/svg/icon-value.svg" alt="Value" width={48} height={48} className="w-12 h-auto" />
              <span className="text-white text-sm font-semibold text-center group-hover:text-purple-50 transition-colors">
                Раскройте ценность недвижимости
              </span>
            </motion.div>

            {/* Карточка 3 */}
            <motion.div whileHover={{ y: -5 }} className="group relative flex flex-col gap-3.5 items-center justify-center py-5 px-3.5 bg-grey-10 border border-grey-15 rounded-xl cursor-pointer hover:bg-grey-15 hover:border-purple-60 hover:shadow-[0_8px_20px_rgba(112,59,247,0.15)] transition-all duration-300">
              <div className="absolute top-4 right-4 text-grey-40 group-hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
              <Image src="/svg/icon-management.svg" alt="Management" width={48} height={48} className="w-12 h-auto" />
              <span className="text-white text-sm font-semibold text-center group-hover:text-purple-50 transition-colors">
                Легкое управление недвижимостью
              </span>
            </motion.div>

            {/* Карточка 4 */}
            <motion.div whileHover={{ y: -5 }} className="group relative flex flex-col gap-3.5 items-center justify-center py-5 px-3.5 bg-grey-10 border border-grey-15 rounded-xl cursor-pointer hover:bg-grey-15 hover:border-purple-60 hover:shadow-[0_8px_20px_rgba(112,59,247,0.15)] transition-all duration-300">
              <div className="absolute top-4 right-4 text-grey-40 group-hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
              <Image src="/svg/icon-investments.svg" alt="Investments" width={48} height={48} className="w-12 h-auto" />
              <span className="text-white text-sm font-semibold text-center group-hover:text-purple-50 transition-colors">
                Умные инвестиции,
                <br />
                взвешенные решения
              </span>
            </motion.div>

          </div>
        </motion.div>
      </motion.section>

      {/* 2. РАЗБЛОКИРУЙТЕ ЗНАЧЕНИЕ ИМУЩЕСТВА */}
      <motion.section
        id="property"
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
              Разблокируйте значение имущества
            </h1>
            <p className="font-medium text-sm lg:text-lg text-grey-60 max-w-325">
              Продажа недвижимости должна приносить удовольствие, и мы в
              Estatein делаем все, чтобы так и было. Наша услуга по продаже
              недвижимости призвана максимально увеличить ее стоимость, чтобы вы
              получили максимально выгодную сделку. Ознакомьтесь с
              представленными ниже категориями, чтобы узнать, как мы можем
              помочь вам на каждом этапе продажи.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7.5">
            <motion.div variants={fadeInUp}>
              <ServiceCard imgSrc="/svg/valuation.svg" title="Мастерство в оценке" description="Узнайте истинную стоимость своей недвижимости с помощью наших экспертных услуг по оценке." />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ServiceCard imgSrc="/svg/strategic.svg" title="Стратегический маркетинг" description="Продажа недвижимости требует большего, чем просто размещение объявления; она требует стратегического подхода." />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ServiceCard imgSrc="/svg/wizardy.svg" title="Мастерство переговоров" description="Переговоры о лучшей сделке — это искусство, и наши эксперты по переговорам владеют им в совершенстве." />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ServiceCard imgSrc="/svg/success.svg" title="Успешное завершение сделки" description="Успешная продажа не завершена до момента закрытия сделки. Мы проведем вас через этот сложный процесс." />
            </motion.div>

            <motion.div variants={fadeInUp} className="md:col-span-2 flex">
              <ServiceCardBig title="Раскройте потенциал своей недвижимости уже сегодня" description="Готовы узнать истинную стоимость своей недвижимости? Ознакомьтесь с нашими категориями услуг по продаже недвижимости и позвольте нам помочь вам получить максимальную выгоду от продажи вашего ценного актива." />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 3. ПРОСТОЕ УПРАВЛЕНИЕ НЕДВИЖИМОСТЬЮ */}
      <motion.section
        id="estate"
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
              Простое управление недвижимостью
            </h1>
            <p className="font-medium text-sm lg:text-lg text-grey-60 max-w-325">
              Владение недвижимостью должно приносить удовольствие, а не
              создавать лишних хлопот. Служба управления недвижимостью Estatein
              избавит вас от стресса, связанного с владением недвижимостью,
              предлагая комплексные решения, адаптированные под ваши
              потребности. Ознакомьтесь с представленными ниже категориями,
              чтобы узнать, как мы можем упростить для вас управление
              недвижимостью.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7.5">
            <motion.div variants={fadeInUp}>
              <ServiceCard imgSrc="/svg/tenat.svg" title="Гармония арендаторов" description="Наши услуги по управлению арендой гарантируют, что у ваших арендаторов не возникнет проблем с поиском жилья и количество свободных квартир сократится." />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ServiceCard imgSrc="/svg/maintenance.svg" title="Простота технического обслуживания" description="Забудьте о головной боли, связанной с обслуживанием недвижимости. Мы берем на себя все аспекты содержания объектов." />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ServiceCard imgSrc="/svg/mind.svg" title="Финансовое спокойствие" description="Управление финансами в сфере недвижимости может быть непростой задачей. Наши финансовые эксперты берут на себя сбор арендной платы." />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ServiceCard imgSrc="/svg/legal.svg" title="Законный владелец" description="Соблюдайте законы и нормативные акты, регулирующие имущественные права, без лишних усилий." />
            </motion.div>

            <motion.div variants={fadeInUp} className="md:col-span-2 flex">
              <ServiceCardBig title="Раскройте потенциал своей недвижимости уже сегодня" description="Готовы узнать истинную стоимость своей недвижимости? Ознакомьтесь с нашими категориями услуг по продаже недвижимости и позвольте нам помочь вам получить максимальную выгоду от продажи вашего ценного актива." />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 4. РАЗУМНЫЕ ИНВЕСТИЦИИ */}
      <motion.section
        id="investment"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col w-full min-w-0 px-4 md:px-20 lg:px-40.5 mb-10"
      >
        <motion.div variants={fadeInUp}>
          <Image
            src="/svg/stars.svg"
            alt="alt"
            width={46}
            height={20}
            className="w-[2.875rem] h-auto"
          />
        </motion.div>

        {/* Убрал mt-3.5 и вернул оригинальные классы обертки */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-12.5 lg:gap-15 items-center">
          
          {/* Левая колонка (Убрано w-full md:w-1/2, возвращен оригинальный размер) */}
          <motion.div variants={fadeInLeft} className="flex flex-col gap-3.5">
            <h1 className="font-semibold text-[1.75rem] lg:text-5xl text-white">
              Разумные инвестиции, взвешенные решения
            </h1>
            <p className="font-medium text-sm lg:text-lg text-grey-60 max-w-325">
              Формирование портфеля недвижимости требует стратегического
              подхода. Консультационные услуги по инвестициям от Estatein
              помогут вам принимать взвешенные решения и делать разумные
              вложения.
            </p>
            
            {/* Баннер-карточка слева (Возвращен w-fit, но оставлены красивые hover-эффекты) */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-fit flex flex-col gap-5 p-6 md:p-10 lg:gap-7.5 lg:p-12.5 bg-[url('/svg/cardBG.svg')] bg-no-repeat bg-cover rounded-[10px] border border-grey-15 hover:border-purple-60 hover:shadow-[0_10px_30px_rgba(112,59,247,0.15)] duration-300 ease-out"
            >
              <h1 className="font-bold text-xl md:text-[22px] lg:text-2xl text-white">
                Раскройте Свой инвестиционный потенциал
              </h1>
              <p className="font-medium text-sm md:text-base lg:text-lg text-grey-60">
                Ознакомьтесь с нашими категориями услуг по управлению
                недвижимостью и позвольте нам взять на себя все сложности, пока
                вы наслаждаетесь преимуществами владения недвижимостью.
              </p>
              <button className="w-full p-3.5 md:px-5 lg:px-6 lg:py-4.5 bg-grey-08 border border-grey-15 text-white text-sm md:text-base lg:text-lg rounded-lg hover:bg-white hover:text-grey-08 duration-300 ease-out font-medium">
                Узнать больше
              </button>
            </motion.div>
          </motion.div>

          {/* Правая колонка (Убрано w-full md:w-1/2, возвращен оригинальный грид) */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-2.5 p-2.5 bg-grey-10 rounded-xl">
            <motion.div variants={fadeInUp}>
              <ServiceCard
                imgSrc="/svg/valuation.svg"
                title="Понимание рынка"
                description="Будьте в курсе рыночных тенденций с помощью нашего экспертного анализа рынка. Мы предоставляем подробную информацию о ситуации на рынке недвижимости."
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ServiceCard
                imgSrc="/svg/valuation.svg"
                title="Оценка рентабельности инвестиций"
                description="Принимайте инвестиционные решения с уверенностью. Наши услуги по оценке рентабельности инвестиций позволяют оценить потенциальную прибыль от ваших вложений."
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ServiceCard
                imgSrc="/svg/valuation.svg"
                title="Индивидуальные стратегии"
                description="Каждый инвестор уникален, как и его цели. Мы разрабатываем индивидуальные инвестиционные стратегии с учетом ваших конкретных потребностей."
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ServiceCard
                imgSrc="/svg/valuation.svg"
                title="Мастерство диверсификации"
                description="Эффективно диверсифицируйте свой портфель недвижимости. Наши эксперты помогут вам распределить инвестиции между различными типами недвижимости и локациями."
              />
            </motion.div>
          </motion.div>

        </div>
      </motion.section>
    </div>
  );
}