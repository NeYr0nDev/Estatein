"use client"
import Image from "next/image";
import { SwiperSlide } from 'swiper/react'; 
import SliderSection from "./components/SliderSection";
import PropertyCard from "./components/PropertyCard";
import TestimonialCard from "./components/TestimonialCard";

export default function Home() {
  return (
      <div className="w-full flex flex-col flex-1 items-center gap-16 xl:gap-[120px] py-10 bg-zinc-50 font-sans dark:bg-grey-08 overflow-hidden">
            
            <main id="heroSection" className="w-full flex flex-col gap-10 xl:gap-24">
              
              {/* ВЕРХНЯЯ ЧАСТЬ: Две колонки на десктопе */}
              {/* lg:gap-0 убирает стандартный зазор, мы контролируем его через паддинг левой колонки */}
              <div className="flex flex-col lg:flex-row items-center w-full gap-10 lg:gap-0">
                
                {/* ЛЕВАЯ КОЛОНКА (Текст, Кнопки, Статистика) */}
                {/* Добавили pl-[162px] только для левой части */}
                <div className="w-full lg:w-1/2 flex flex-col gap-10 px-4 md:px-10 lg:pl-20 xl:pl-[162px] lg:pr-10 xl:pr-16">
                  
                  {/* Заголовок и текст */}
                  <div className="flex flex-col gap-4">
                    <h1 className="font-semibold text-[2rem] lg:text-[3rem] xl:text-[3.5rem] leading-tight text-white">
                      Откройте для себя недвижимость своей мечты с Estatein
                    </h1>
                    <p className="font-medium text-sm lg:text-base text-grey-60">
                      Здесь начинается ваш путь к поиску идеальной недвижимости. Изучите наши объявления, чтобы найти дом, соответствующий вашим мечтам.
                    </p>
                  </div>

                  {/* Кнопки */}
                  <div className="flex flex-col sm:flex-row gap-4 w-full">
                    <button className="w-full sm:w-auto px-6 py-3.5 bg-grey-08 border border-grey-15 text-white text-sm rounded-lg hover:bg-grey-10 transition-colors">
                      Узнать больше
                    </button>
                    <button className="w-full sm:w-auto px-6 py-3.5 bg-purple-60 hover:bg-purple-65 transition-colors text-white text-sm rounded-lg">
                      Смотреть недвижимость
                    </button>
                  </div>

                  {/* Статистика */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full mt-2">
                    <div className="flex flex-col items-start justify-center py-4 px-6 bg-grey-10 border border-grey-15 rounded-xl gap-0.5">
                      <span className="text-2xl lg:text-[2.5rem] font-bold text-white">200+</span>
                      <span className="text-sm lg:text-lg text-grey-60">Довольных клиентов</span>
                    </div>
                    <div className="flex flex-col items-start justify-center py-4 px-6 bg-grey-10 border border-grey-15 rounded-xl gap-0.5">
                      <span className="text-2xl lg:text-[2.5rem] font-bold text-white">10k+</span>
                      <span className="text-sm lg:text-lg text-grey-60">Недвижимостей</span>
                    </div>
                    <div className="col-span-2 md:col-span-1 flex flex-col items-start justify-center py-4 px-6 bg-grey-10 border border-grey-15 rounded-xl gap-0.5">
                      <span className="text-2xl lg:text-[2.5rem] font-bold text-white">16+</span>
                      <span className="text-sm lg:text-lg text-grey-60">Лет опыта</span>
                    </div>
                  </div>

                </div>

                {/* ПРАВАЯ КОЛОНКА (Картинка с бейджем) */}
                {/* Картинка прижимается к правому краю (нет правого паддинга) */}
                <div className="w-full lg:w-1/2 relative flex justify-center order-first lg:order-last h-full px-4 lg:px-0">
                  {/* lg:rounded-r-none и lg:border-r-0 убирают рамки справа на ПК, чтобы слить картинку с краем */}
                  <div className="w-full rounded-xl lg:rounded-l-2xl lg:rounded-r-none overflow-hidden border border-grey-15 lg:border-r-0">
                    <Image 
                      src="/img/house.png" 
                      alt="House" 
                      width={920} 
                      height={814} 
                      className="w-[22.375rem] lg:w-[57.5rem] h-auto object-cover" 
                    />
                  </div>
                  
                  {/* Круглый бейдж */}
                  <div className="absolute left-4 -bottom-10 lg:-left-16 lg:top-1/4 z-10 w-[7.3125rem] h-[7.3125rem] lg:w-[8.125rem] lg:h-[8.125rem]">
                    <Image 
                      src="/svg/SubContainer.svg" 
                      alt="Badge" 
                      width={130} 
                      height={130} 
                      className="w-full h-full" 
                    />
                  </div>
                </div>

              </div>

              {/* НИЖНЯЯ ЧАСТЬ: 4 Карточки */}
              {/* Растягиваем на 100% ширины, как в макете */}
              <div id="features" className="w-full bg-grey-08 border-y border-grey-15 p-4 lg:py-4 lg:px-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-2.5 w-full">
                  
                  {/* Карточка 1 */}
                  <div className="group relative flex flex-col gap-3.5 items-center justify-center py-5 px-3.5 bg-grey-10 border border-grey-15 rounded-xl cursor-pointer hover:bg-grey-15 transition-colors">
                    <div className="absolute top-4 right-4 text-grey-40 group-hover:text-white transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                    </div>
                    <Image src="/svg/icon-home.svg" alt="Home" width={48} height={48} className="w-12 h-auto"/>
                    <span className="text-white text-sm font-semibold text-center">Найдите дом своей мечты</span>
                  </div>

                  {/* Карточка 2 */}
                  <div className="group relative flex flex-col gap-3.5 items-center justify-center py-5 px-3.5 bg-grey-10 border border-grey-15 rounded-xl cursor-pointer hover:bg-grey-15 transition-colors">
                    <div className="absolute top-4 right-4 text-grey-40 group-hover:text-white transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                    </div>
                    <Image src="/svg/icon-value.svg" alt="Value" width={48} height={48} className="w-12 h-auto" />
                    <span className="text-white text-sm font-semibold text-center">Раскройте ценность недвижимости</span>
                  </div>

                  {/* Карточка 3 */}
                  <div className="group relative flex flex-col gap-3.5 items-center justify-center py-5 px-3.5 bg-grey-10 border border-grey-15 rounded-xl cursor-pointer hover:bg-grey-15 transition-colors">
                    <div className="absolute top-4 right-4 text-grey-40 group-hover:text-white transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                    </div>
                    <Image src="/svg/icon-management.svg" alt="Management" width={48} height={48} className="w-12 h-auto" />
                    <span className="text-white text-sm font-semibold text-center">Легкое управление недвижимостью</span>
                  </div>

                  {/* Карточка 4 */}
                  <div className="group relative flex flex-col gap-3.5 items-center justify-center py-5 px-3.5 bg-grey-10 border border-grey-15 rounded-xl cursor-pointer hover:bg-grey-15 transition-colors">
                    <div className="absolute top-4 right-4 text-grey-40 group-hover:text-white transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
                    </div>
                    <Image src="/svg/icon-investments.svg" alt="Investments" width={48} height={48} className="w-12 h-auto" />
                    <span className="text-white text-sm font-semibold text-center">Умные инвестиции,<br />взвешенные решения</span>
                  </div>

                </div>
              </div>
            </main>

            {/* КОНТЕЙНЕР ДЛЯ СЛАЙДЕРОВ (Здесь возвращаем паддинги по бокам!) */}
            <div id="testimonials" className="w-full flex flex-col gap-16 xl:gap-[120px] px-4 md:px-10 lg:px-20 xl:px-[162px]">
              
              {/* Slider 1 */}
              <SliderSection
              title="Рекомендации"
              description="Ознакомьтесь с нашей тщательно отобранной подборкой предлагаемых объектов недвижимости. Каждое объявление дает представление об исключительных домах и инвестициях, доступных через Estatein."
              buttonText="Все рекомендации">
                <SwiperSlide>
                  <PropertyCard
                    imageSrc="/img/villa.png"
                    title="Вилла на берегу моря"
                    description="Потрясающая вилла с 4 спальнями и 3 ванными комнатами в тихом пригородном районе..."
                    bedrooms={4}
                    bathrooms={3}
                    type="Вилла"
                    price="$550,000"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PropertyCard
                    imageSrc="/img/haven.png"
                    title="Столичный рай"
                    description="Шикарные и полностью меблированные апартаменты с 2 спальнями и панорамным видом на город..."
                    bedrooms={2}
                    bathrooms={2}
                    type="Вилла"
                    price="$550,000"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PropertyCard
                    imageSrc="/img/cottage.png"
                    title="Уединенный коттедж"
                    description="Элегантный таунхаус с 3 спальнями и 2,5 ванными комнатами в закрытом жилом комплексе..."
                    bedrooms={3}
                    bathrooms={3}
                    type="Вилла"
                    price="$550,000"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PropertyCard
                    imageSrc="/img/villa.png"
                    title="Вилла на берегу моря"
                    description="Потрясающая вилла с 4 спальнями и 3 ванными комнатами в тихом пригородном районе..."
                    bedrooms={4}
                    bathrooms={3}
                    type="Вилла"
                    price="$550,000"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PropertyCard
                    imageSrc="/img/haven.png"
                    title="Столичный рай"
                    description="Шикарные и полностью меблированные апартаменты с 2 спальнями и панорамным видом на город..."
                    bedrooms={2}
                    bathrooms={2}
                    type="Вилла"
                    price="$550,000"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PropertyCard
                    imageSrc="/img/cottage.png"
                    title="Уединенный коттедж"
                    description="Элегантный таунхаус с 3 спальнями и 2,5 ванными комнатами в закрытом жилом комплексе..."
                    bedrooms={3}
                    bathrooms={3}
                    type="Вилла"
                    price="$550,000"
                  />
                </SwiperSlide>
              </SliderSection>

              {/* Slider 2 */}
              <div className="hidden" id="properties"></div>
              <SliderSection 
                title="Что говорят наши клиенты"
                description="Ознакомьтесь с историями успеха и искренними отзывами наших уважаемых клиентов. Узнайте, почему они выбрали Estatein для своих нужд в сфере недвижимости."
                buttonText="Все отзывы"
              >
                <SwiperSlide>
                  <TestimonialCard 
                    title="Прекрасный сервис!"
                    description="Наш опыт работы с Estatein был выдающимся. Преданность делу и профессионализм их команды позволили нам легко найти дом нашей мечты. Настоятельно рекомендуем!"
                    authorName="Wade Warren"
                    authorLocation="USA, California"
                    authorImage="/img/wade.png"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialCard 
                    title="Эффективный и надежный"
                    description="Estatein предоставила нам первоклассный сервис. Они помогли нам продать нашу недвижимость быстро и по отличной цене. Мы были очень довольны результатами."
                    authorName="Emelie Thomson"
                    authorLocation="USA, Florida"
                    authorImage="/img/emelie.png" 
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialCard 
                    title="Доверенные консультанты"
                    description="Команда Estatein сопровождала нас на протяжении всего процесса покупки. Их знания и приверженность нашим потребностям были впечатляющими."
                    authorName="John Mans"
                    authorLocation="USA, Nevada"
                    authorImage="/img/john.png" 
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialCard 
                    title="Прекрасный сервис!"
                    description="Наш опыт работы с Estatein был выдающимся. Преданность делу и профессионализм их команды позволили нам легко найти дом нашей мечты. Настоятельно рекомендуем!"
                    authorName="Wade Warren"
                    authorLocation="USA, California"
                    authorImage="/img/wade.png"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialCard 
                    title="Эффективный и надежный"
                    description="Estatein предоставила нам первоклассный сервис. Они помогли нам продать нашу недвижимость быстро и по отличной цене. Мы были очень довольны результатами."
                    authorName="Emelie Thomson"
                    authorLocation="USA, Florida"
                    authorImage="/img/emelie.png" 
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialCard 
                    title="Доверенные консультанты"
                    description="Команда Estatein сопровождала нас на протяжении всего процесса покупки. Их знания и приверженность нашим потребностям были впечатляющими."
                    authorName="John Mans"
                    authorLocation="USA, Nevada"
                    authorImage="/img/john.png" 
                  />
                </SwiperSlide>
              </SliderSection>

              {/* Slider 3 */}
              <SliderSection 
              title="Часто задаваемые вопросы"
              description="Найдите ответы на распространенные вопросы об услугах Estatein, списках недвижимости и процессе продажи недвижимости. Мы здесь для того, чтобы внести ясность и помочь вам на каждом этапе."
              buttonText="Все ответы"
            >
              <SwiperSlide>
                <div id="faq" className="p-7.5 bg-grey-08 border border-grey-15 rounded-[0.625rem] h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-4">Как мне искать недвижимость на сайте Estatein?</h3>
                  <p className="text-grey-50 text-sm mb-6">Узнайте, как использовать наши удобные инструменты поиска для поиска объектов недвижимости, соответствующих вашим критериям.</p>
                  <button className="w-full py-3.5 bg-grey-10 border border-grey-15 rounded-lg text-white mt-auto hover:bg-grey-15 transition-colors">
                    Читать дальше
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="p-7.5 bg-grey-08 border border-grey-15 rounded-[0.625rem] h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-4">Какие документы мне нужны?</h3>
                  <p className="text-grey-50 text-sm mb-6">Узнайте, какие документы требуются для оформления недвижимости</p>
                  <button className="w-full py-3.5 bg-grey-10 border border-grey-15 rounded-lg text-white mt-auto hover:bg-grey-15 transition-colors">
                    Читать дальше
                  </button>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="p-7.5 bg-grey-08 border border-grey-15 rounded-[0.625rem] h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-4">Как мне искать недвижимость на сайте Estatein?</h3>
                  <p className="text-grey-50 text-sm mb-6">Узнайте, как использовать наши удобные инструменты поиска для поиска объектов недвижимости, соответствующих вашим критериям.</p>
                  <button className="w-full py-3.5 bg-grey-10 border border-grey-15 rounded-lg text-white mt-auto hover:bg-grey-15 transition-colors">
                    Читать дальше
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="p-7.5 bg-grey-08 border border-grey-15 rounded-[0.625rem] h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-4">Какие документы мне нужны?</h3>
                  <p className="text-grey-50 text-sm mb-6">Узнайте, какие документы требуются для оформления недвижимости</p>
                  <button className="w-full py-3.5 bg-grey-10 border border-grey-15 rounded-lg text-white mt-auto hover:bg-grey-15 transition-colors">
                    Читать дальше
                  </button>
                </div>
              </SwiperSlide>

            </SliderSection>
            
          </div>
        </div>
  );
}