"use client"
import Image from "next/image"
import ValueItem from "../components/ValueItem"
import AchivementCard from "../components/AchivementCard";
import StepCard from "../components/StepCard";
import PersonalCard from "../components/PersonalCard";
import ClientCard from "../components/ClientCard";
import BasicSlider from "../components/BasicSlider";
import { SwiperSlide } from 'swiper/react';

export default function about() {
    const values = [
    {
      icon: '/svg/purpleStar.svg',
      title: 'Доверие',
      description: 'Доверие является краеугольным камнем любой успешной сделки с недвижимостью.',
    },
    {
      icon: '/svg/excellence.svg',
      title: 'Превосходство',
      description: 'Мы устанавливаем для себя высокую планку. Начиная с объектов недвижимости, которые мы перечисляем, и заканчивая услугами, которые мы предоставляем.',
    },
    {
      icon: '/svg/clients.svg',
      title: 'Клиенты',
      description: 'Ваши мечты и потребности находятся в центре нашей вселенной. Мы слушаем и понимаем.',
    },
    {
      icon: '/svg/purpleStar.svg',
      title: 'Наше обязательство',
      description: 'Мы стремимся предоставить вам высочайший уровень обслуживания и профессионализма.',
    },
  ];
    return(
        <div className="w-full flex flex-col flex-1 items-center gap-16 xl:gap-[7.5rem] py-10 px-4 md:px-[10.125rem] bg-grey-08 font-sans  overflow-hidden">
            <main id="heroSection" className="w-full flex flex-col gap-10 xl:gap-24">
                          
                {/* ВЕРХНЯЯ ЧАСТЬ: Две колонки на десктопе */}
                {/* lg:gap-0 убирает стандартный зазор, мы контролируем его через паддинг левой колонки */}
                <div className="flex flex-col lg:flex-row items-center w-full gap-10 lg:gap-0">
                
                {/* ЛЕВАЯ КОЛОНКА (Текст, Кнопки, Статистика) */}
                {/* Добавили pl-[162px] только для левой части */}
                <div className="w-full lg:w-1/2 flex flex-col gap-10 lg:pr-10 xl:pr-16">
                    
                    {/* Заголовок и текст */}
                    <div className="flex flex-col">
                    <Image src="/svg/stars.svg" alt="alt" width={46} height={20} className="w-[2.875rem] h-auto" />
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold text-[1.75rem] lg:text-[2.375rem] xl:text-[3rem] leading-tight text-white">
                            Наше путешествие
                        </h1>
                        <p className="font-medium text-sm lg:text-base text-grey-60">
                            Наша история - это история постоянного роста и эволюции. Мы начинали как небольшая команда с большими мечтами, полная решимости создать платформу для работы с недвижимостью, выходящую за рамки обычного. С годами мы расширили сферу своей деятельности, наладили ценные партнерские отношения и завоевали доверие бесчисленного количества клиентов.
                        </p>
                    </div>
                    </div>

                    {/* Статистика */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full mt-2">
                    <div className="min-w-[10.6875rem] flex flex-col items-center lg:items-start justify-center py-4 px-auto md:pl-6 bg-grey-10 border border-grey-15 rounded-xl gap-0.5">
                        <span className="text-2xl lg:text-[2.5rem] font-bold text-white">200+</span>
                        <span className="text-sm lg:text-lg text-grey-60 text-center md:text-start">Довольных клиентов</span>
                    </div>
                    <div className="min-w-[10.6875rem] flex flex-col items-center lg:items-start justify-center py-4 px-6 bg-grey-10 border border-grey-15 rounded-xl gap-0.5">
                        <span className="text-2xl lg:text-[2.5rem] font-bold text-white">10k+</span>
                        <span className="text-sm lg:text-lg text-grey-60">Недвижимостей</span>
                    </div>
                    <div className="col-span-2 md:col-span-1 flex flex-col items-center lg:items-start justify-center py-4 px-6 bg-grey-10 border border-grey-15 rounded-xl gap-0.5">
                        <span className="text-2xl lg:text-[2.5rem] font-bold text-white">16+</span>
                        <span className="text-sm lg:text-lg text-grey-60">Лет опыта</span>
                    </div>
                    </div>

                </div>

                {/* ПРАВАЯ КОЛОНКА (Картинка с бейджем) */}
                {/* Картинка прижимается к правому краю (нет правого паддинга) */}
                <div className="w-full lg:w-1/2 relative flex justify-center order-first lg:order-last h-full lg:px-0">
                    {/* lg:rounded-r-none и lg:border-r-0 убирают рамки справа на ПК, чтобы слить картинку с краем */}
                    <div className="w-full rounded-xl  overflow-hidden ">
                    <Image 
                        src="/img/houseonhand.png" 
                        alt="House" 
                        width={755} 
                        height={546} 
                        className="w-[22.375rem] lg:w-[47.1875rem] h-auto object-cover border border-grey-15 rounded-xl" 
                    />
                    </div>
                </div>
                </div>
            </main>
            <section className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20">
      
                {/* ЛЕВАЯ ЧАСТЬ: Заголовок и описание */}
                <div className="w-full lg:w-[35%] flex flex-col gap-4">
                    <Image src="/svg/stars.svg" alt="alt" width={46} height={20} className="w-[2.875rem] h-auto" />
                    <h2 className="text-[1.75rem] lg:text-[3rem] font-semibold text-white">Наши ценности</h2>
                    <p className="text-sm lg:text-base text-grey-60 leading-relaxed">
                    Наша история - это история постоянного роста и эволюции. Мы начинали как небольшая команда с большими мечтами, полная решимости создать платформу недвижимости, выходящую за рамки обыденности.
                    </p>
                </div>

                {/* ПРАВАЯ ЧАСТЬ: Сетка значений */}
                {/* Используем общую рамку. Внутри сетка 2х2 для десктопа */}
                <div className="w-full lg:w-[65%] p-6 lg:p-2 bg-grey-08 border border-grey-15 shadow-[0_0_0_6px] lg:shadow-[0_0_0_10px] shadow-[#191919] rounded-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                    {values.map((item, index) => (
                        <div 
                        key={index} 
                        className={`
                            {/* На десктопе рисуем линии между ячейками */}
                            lg:border-grey-15
                            ${index === 0 ? 'lg:border-r lg:border-b' : ''}
                            ${index === 1 ? 'lg:border-b' : ''}
                            ${index === 2 ? 'lg:border-r' : ''}
                        `}
                        >
                        <ValueItem 
                            icon={item.icon} 
                            title={item.title} 
                            description={item.description}
                            isLast={index === values.length - 1}
                        />
                        </div>
                    ))}
                    </div>
                </div>

                </section>
            <section className="flex flex-col">
                <Image src="/svg/stars.svg" alt="alt" width={46} height={20} className="w-[2.875rem] h-auto" />
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-semibold text-[1.75rem] lg:text-5xl text-white">Наши достижения</h1>
                        <p className="font-medium text-sm lg:text-lg text-grey-60">Наша история - это история постоянного роста и эволюции. Мы начинали как небольшая команда с большими мечтами, полная решимости создать платформу недвижимости, выходящую за рамки обыденности.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 md:gap-7.5 lg:gap-10">
                        <AchivementCard
                        title="Более 3-х лет безупречной работы"
                        description="За более чем 3-летний опыт работы в отрасли мы накопили огромный багаж знаний и опыта."
                        ></AchivementCard>
                        <AchivementCard
                        title="Довольные клиенты"
                        description="Нашим главным достижением является удовлетворенность наших клиентов. Их истории успеха подпитывают нашу страсть к тому, что мы делаем."
                        ></AchivementCard>
                        <AchivementCard
                        title="Признание в отрасли"
                        description="Мы заслужили уважение наших коллег и лидеров отрасли благодаря почестям и наградам, которые отражают наше стремление к совершенству."
                        ></AchivementCard>
                    </div>
                </div>
            </section>

            <section className="flex flex-col">
                <Image src="/svg/stars.svg" alt="alt" width={46} height={20} className="w-[2.875rem] h-auto" />
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-semibold text-[1.75rem] lg:text-5xl text-white">Знакомство с Estatein Experience</h1>
                        <p className="font-medium text-sm lg:text-lg text-grey-60">В Estatein мы разработали простой процесс, который поможет вам с легкостью найти и купить недвижимость вашей мечты. Вот пошаговое руководство по его использованию.</p>
                    </div>
                    <div className="flex flex-col md:grid md:grid-row-3 md:gap-10 lg:gap-12.5">
                        <div className="flex flex-col md:flex-row gap-7.5 md:gap-5 lg:gap-7.5">
                            <StepCard
                            stepNumber="01"
                            title="Откройте для себя мир возможностей"
                            description="Ваше путешествие начинается с изучения тщательно отобранных объектов недвижимости. Воспользуйтесь нашими интуитивно понятными инструментами поиска, чтобы отфильтровать объекты по своим предпочтениям, включая местоположение."
                            ></StepCard>
                            <StepCard
                            stepNumber="02"
                            title="Как сузить круг выбора"
                            description="Если вы нашли понравившиеся объекты недвижимости, сохраните их в своем аккаунте или составьте список. Так вы сможете сравнивать понравившиеся варианты и возвращаться к ним по мере принятия решения."
                            ></StepCard>
                            <StepCard
                            stepNumber="03"
                            title="Индивидуальное руководство"
                            description="У вас есть вопросы о недвижимости или вам нужна дополнительная информация? Наша команда экспертов по недвижимости всегда на связи."
                            ></StepCard>
                        </div>
                        <div className="flex hidden md:flex flex-row gap-7.5 md:gap-5 lg:gap-7.5">
                            <StepCard
                            stepNumber="04"
                            title="Убедитесь в этом сами"
                            description="Организуйте просмотр интересующих вас объектов недвижимости. Мы свяжемся с владельцами и будем сопровождать вас, чтобы вы могли лично оценить свой будущий дом."
                            ></StepCard>
                            <StepCard
                            stepNumber="05"
                            title="Принятие обоснованных решений"
                            description="Прежде чем сделать предложение, наша команда поможет вам провести комплексную проверку, включающую осмотр недвижимости, юридическую экспертизу и анализ рынка. Мы хотим, чтобы вы были полностью информированы."
                            ></StepCard>
                            <StepCard
                            stepNumber="06"
                            title="Получение наилучшего предложения"
                            description="Мы поможем вам договориться об оптимальных условиях и подготовить ваше предложение. Наша цель — приобрести недвижимость по выгодной цене и на выгодных условиях."
                            ></StepCard>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col">
                <Image src="/svg/stars.svg" alt="alt" width={46} height={20} className="w-[2.875rem] h-auto" />
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-semibold text-[1.75rem] lg:text-5xl text-white">Познакомьтесь с командой Estatein</h1>
                        <p className="font-medium text-sm lg:text-lg text-grey-60">Успех Estatein обусловлен преданностью делу и профессионализмом нашей команды. Познакомьтесь с людьми, которые воплощают в жизнь ваши мечты о недвижимости.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 lg:gap-7.5">
                        <PersonalCard
                            imageSrc="/img/MaxMitchell.png"
                            name="Max Mitchel"
                            position="Основатель"
                        ></PersonalCard>
                        <PersonalCard
                            imageSrc="/img/SarahJonson.png"
                            name="Sarah Johnson"
                            position="Главный специалист по недвижимости"
                        ></PersonalCard>
                        <PersonalCard
                            imageSrc="/img/DavidBrown.png"
                            name="David Brown"
                            position="Руководитель отдела управления недвижимостью"
                        ></PersonalCard>
                        <PersonalCard
                            imageSrc="/img/MichaelTurner.png"
                            name="Michael Turner"
                            position="Юрист-консультант"
                        ></PersonalCard>
                    </div>
                </div>
            </section>

            <section className="flex flex-col w-full min-w-0">
                <Image src="/svg/stars.svg" alt="alt" width={46} height={20} className="w-[2.875rem] h-auto" />
                <div className="flex flex-col gap-10 lg:gap-20">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-semibold text-[1.75rem] lg:text-5xl text-white">Наши уважаемые клиенты</h1>
                        <p className="font-medium text-sm lg:text-lg text-grey-60">В Estatein мы имели честь работать с самыми разными клиентами из различных отраслей. Вот некоторые из них, с которыми нам посчастливилось сотрудничать.</p>
                    </div>
                <BasicSlider slidesPerViewDesktop={2}>
  
                <SwiperSlide>
                    <ClientCard 
                    year="2019" 
                    title="ABC Corp" 
                    domain="Коммерческая недвижимость" 
                    category="Строительство роскошного дома" 
                    said="Опыт Estatein в поиске идеального офисного помещения для нашей расширяющейся компании оказался бесценным. Они действительно понимают потребности нашего бизнеса." 
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <ClientCard 
                    year="2020" 
                    title="GreenTech Enterprises" 
                    domain="Коммерческая недвижимость" 
                    category="Торговые площади" 
                    said="Благодаря умению Estatein находить лучшие места для розничной торговли мы смогли расширить присутствие нашего бренда. Они — надежный партнер в нашем деле." 
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ClientCard 
                    year="2019" 
                    title="ABC Corp" 
                    domain="Коммерческая недвижимость" 
                    category="Строительство роскошного дома" 
                    said="Опыт Estatein в поиске идеального офисного помещения для нашей расширяющейся компании оказался бесценным. Они действительно понимают потребности нашего бизнеса." 
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <ClientCard 
                    year="2020" 
                    title="GreenTech Enterprises" 
                    domain="Коммерческая недвижимость" 
                    category="Торговые площади" 
                    said="Благодаря умению Estatein находить лучшие места для розничной торговли мы смогли расширить присутствие нашего бренда. Они — надежный партнер в нашем деле." 
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ClientCard 
                    year="2019" 
                    title="ABC Corp" 
                    domain="Коммерческая недвижимость" 
                    category="Строительство роскошного дома" 
                    said="Опыт Estatein в поиске идеального офисного помещения для нашей расширяющейся компании оказался бесценным. Они действительно понимают потребности нашего бизнеса." 
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <ClientCard 
                    year="2020" 
                    title="GreenTech Enterprises" 
                    domain="Коммерческая недвижимость" 
                    category="Торговые площади" 
                    said="Благодаря умению Estatein находить лучшие места для розничной торговли мы смогли расширить присутствие нашего бренда. Они — надежный партнер в нашем деле." 
                    />
                </SwiperSlide>
                

                </BasicSlider>
                </div>
            </section>
        </div>
    )
}