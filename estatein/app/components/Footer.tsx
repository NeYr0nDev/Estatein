"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center mt-20">
      {/* --- Верхний блок (CTA) --- */}
      {/* На десктопе (lg) включаем flex-row и раздвигаем текст и кнопку по краям */}
      <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center relative gap-7.5 px-4 lg:px-20 py-12.5 border-t border-b border-grey-15 overflow-hidden">
        <Image
          src="/svg/AbstractDesign-1.svg"
          alt="alt"
          width={522}
          height={284}
          className="w-[32.625rem] h-[17.75rem] absolute -z-10 -left-[7.5625rem] top-0 lg:opacity-100 opacity-50"
        />
        <Image
          src="/svg/AbstractDesign.svg"
          alt="alt"
          width={398}
          height={217}
          className="w-[24.875rem] h-[13.5625rem] absolute -z-10 top-[14.25rem] lg:top-1/2 left-[2.5625rem] lg:left-auto lg:right-0 lg:-translate-y-1/2 lg:opacity-100 opacity-50"
        />

        <div className="w-full lg:w-2/3 flex flex-col gap-4 z-10">
          <h1 className="text-[1.5rem] lg:text-[2.5rem] font-semibold text-white leading-tight">
            Начните Свое путешествие по недвижимости уже сегодня
          </h1>
          <p className="text-sm font-medium text-grey-60">
            Недвижимость вашей мечты находится всего в нескольких шагах от вас.
            Ищете ли вы новый дом, стратегическую инвестицию или
            квалифицированную консультацию по недвижимости, Estatein готов
            помочь вам на каждом шагу. Сделайте первый шаг к достижению своих
            целей в сфере недвижимости и изучите наши доступные объекты
            недвижимости или свяжитесь с нашей командой для получения
            персональной помощи.
          </p>
        </div>

        <button className="w-full lg:w-auto h-fit px-8 py-3.5 bg-purple-60 hover:bg-purple-65 transition-colors rounded-lg text-white font-medium whitespace-nowrap z-10">
          Посмотреть недвижимость
        </button>
      </div>

      {/* --- Средний блок (Логотип + Навигация) --- */}
      {/* На десктопе разделяем логотип и навигацию на две колонки */}
      <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-12.5 px-4 lg:px-20 py-12.5">
        {/* Логотип и поле Email */}
        <div className="w-full lg:w-[30%] flex flex-col gap-5">
          <Image
            src="/svg/Logo.svg"
            alt="Logo"
            width={113}
            height={34}
            className="w-28.25 h-8.25"
          />
          <div className="flex items-center gap-1.5 w-full max-w-[423px] h-[66px] px-5 bg-grey-08 border border-grey-15 rounded-xl">
            <div className="flex-shrink-0 flex items-center justify-center w-6 h-6">
              <Image src="/svg/mail.svg" alt="Email" width={24} height={24} />
            </div>
            <input
              type="email"
              placeholder="Введите ваш Email"
              className="flex-1 w-full h-full py-3.5 bg-transparent border-none outline-none text-white placeholder-grey-50 text-sm"
            />
            <button
              type="button"
              className="flex-shrink-0 flex items-center justify-center w-6 h-6 transition-transform hover:scale-110 active:scale-95"
            >
              <Image src="/svg/send.svg" alt="Send" width={24} height={24} />
            </button>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* ВАРИАНТ НАВИГАЦИИ ДЛЯ МОБИЛОК */}
        {/* ---------------------------------------------------- */}
        <div className="w-fit lg:hidden h-fit flex flex-col gap-5">
          <div className="w-fit h-fit flex gap-5">
            <div className="flex flex-col w-[9.9063rem] h-fit gap-4 border-b border-grey-15 pb-5">
              <h4 className="text-base text-grey-60">Главная</h4>
              <div className="flex flex-col gap-2 w-fit h-fit text-sm text-white">
                <Link href="/#heroSection">Главный блок</Link>
                <Link href="/#features">Особенности</Link>
                <Link href="/#Properties">Отзывы</Link>
                <Link href="/#testimonials">Рекомендации</Link>
                <Link href="/#faq">FAQ</Link>
              </div>
            </div>
            <div className="w-px bg-grey-15"></div>
            <div className="flex flex-col w-[9.9063rem] h-fit gap-4 border-b border-grey-15 pb-5">
              <h4 className="text-base text-grey-60">О нас</h4>
              <div className="flex flex-col gap-2 w-fit h-fit text-sm text-white">
                <Link href="/About/#histories">Наши истории</Link>
                <Link href="/About/#works">Наши работы</Link>
                <Link href="/About/#hwt">Как это работает</Link>
                <Link href="/About/#team">Наша команда</Link>
                <Link href="/About/#clients">Наши клиенты</Link>
              </div>
            </div>
          </div>

          <div className="w-fit h-fit flex gap-5">
            <div className="w-[9.9063rem] h-fit flex flex-col gap-5 border-b border-grey-15">
              <div className="flex flex-col w-[9.9063rem] h-fit gap-4 border-b border-grey-15 pb-5">
                <h4 className="text-base text-grey-60">Свойства</h4>
                <div className="flex flex-col gap-2 w-fit h-fit text-sm text-white">
                  <Link href="/About/#histories">Портфолио</Link>
                  <Link href="/About/#works">Категории</Link>
                </div>
              </div>
              <div className="flex flex-col w-[9.9063rem] h-fit gap-4 pb-5">
                <h4 className="text-base text-grey-60">Контакты</h4>
                <div className="flex flex-col gap-2 w-fit h-fit text-sm text-white">
                  <Link href="/About/#histories">Контактная форма</Link>
                  <Link href="/About/#works">Наш офис</Link>
                </div>
              </div>
            </div>
            <div className="w-px bg-grey-15"></div>
            <div className="flex flex-col w-[9.9063rem] gap-4 border-b border-grey-15 pb-5">
              <h4 className="text-base text-grey-60">Услуги</h4>
              <div className="flex flex-col gap-2 w-fit h-fit text-sm text-white">
                <Link href="/About/#histories">Мастерство в оценке</Link>
                <Link href="/About/#works">Стратегический маркетинг</Link>
                <Link href="/About/#histories">Искусство переговоров</Link>
                <Link href="/About/#works">Успешное завершение</Link>
                <Link href="/About/#histories">Управление недвижимостью</Link>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* ВАРИАНТ НАВИГАЦИИ ДЛЯ ДЕСКТОПА (5 колонок в ряд)       */}
        {/* Появляется только на десктопе с помощью hidden lg:flex */}
        {/* ---------------------------------------------------- */}
        <div className="hidden lg:flex w-[65%] justify-between gap-4">
          <div className="flex flex-col gap-5">
            <h4 className="text-base text-grey-60 font-medium mb-1">Главная</h4>
            <div className="flex flex-col gap-3 text-sm text-white font-medium">
              <Link
                href="#heroSection"
                className="hover:text-purple-60 transition-colors"
              >
                Главный блок
              </Link>
              <Link
                href="#features"
                className="hover:text-purple-60 transition-colors"
              >
                Особенности
              </Link>
              <Link
                href="#Properties"
                className="hover:text-purple-60 transition-colors"
              >
                Отзывы
              </Link>
              <Link
                href="#testimonials"
                className="hover:text-purple-60 transition-colors"
              >
                Рекомендации
              </Link>
              <Link
                href="#faq"
                className="hover:text-purple-60 transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-base text-grey-60 font-medium mb-1">О нас</h4>
            <div className="flex flex-col gap-3 text-sm text-white font-medium">
              <Link
                href="/About/#histories"
                className="hover:text-purple-60 transition-colors"
              >
                Наши истории
              </Link>
              <Link
                href="/About/#works"
                className="hover:text-purple-60 transition-colors"
              >
                Наши работы
              </Link>
              <Link
                href="/About/#hwt"
                className="hover:text-purple-60 transition-colors"
              >
                Как это работает
              </Link>
              <Link
                href="/About/#team"
                className="hover:text-purple-60 transition-colors"
              >
                Наша команда
              </Link>
              <Link
                href="/About/#clients"
                className="hover:text-purple-60 transition-colors"
              >
                Наши клиенты
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-base text-grey-60 font-medium mb-1">
              Свойства
            </h4>
            <div className="flex flex-col gap-3 text-sm text-white font-medium">
              <Link
                href="/Properties/#portfolio"
                className="hover:text-purple-60 transition-colors"
              >
                Портфолио
              </Link>
              <Link
                href="/Properties/#categories"
                className="hover:text-purple-60 transition-colors"
              >
                Категории
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-base text-grey-60 font-medium mb-1">Услуги</h4>
            <div className="flex flex-col gap-3 text-sm text-white font-medium">
              <Link
                href="/Services/#valuation"
                className="hover:text-purple-60 transition-colors"
              >
                Мастерство в оценке
              </Link>
              <Link
                href="/Services/#marketing"
                className="hover:text-purple-60 transition-colors"
              >
                Стратегический маркетинг
              </Link>
              <Link
                href="/Services/#negotiation"
                className="hover:text-purple-60 transition-colors"
              >
                Искусство переговоров
              </Link>
              <Link
                href="/Services/#closing"
                className="hover:text-purple-60 transition-colors"
              >
                Успешное завершение
              </Link>
              <Link
                href="/Services/#management"
                className="hover:text-purple-60 transition-colors"
              >
                Управление недвижимостью
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-base text-grey-60 font-medium mb-1">
              Контакты
            </h4>
            <div className="flex flex-col gap-3 text-sm text-white font-medium">
              <Link
                href="/contact/#form"
                className="hover:text-purple-60 transition-colors"
              >
                Контактная форма
              </Link>
              <Link
                href="/contact/#offices"
                className="hover:text-purple-60 transition-colors"
              >
                Наши офисы
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* --- Нижний блок (Копирайт и Соцсети) --- */}
      {/* На десктопе используем lg:flex-row и разносим элементы по краям с помощью justify-between */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-5 bg-grey-10 py-5 px-4 lg:px-20 border-t border-grey-15">
        {/* Соцсети (меняем визуальный порядок через order: на мобилках сверху, на ПК - справа) */}
        <div className="flex w-fit h-fit gap-2 order-1 lg:order-2">
          <div className="bg-grey-08 p-3.5 rounded-full hover:bg-grey-15 cursor-pointer transition-colors">
            <Image
              src="/svg/facebook.svg"
              alt="facebook"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </div>
          <div className="bg-grey-08 p-3.5 rounded-full hover:bg-grey-15 cursor-pointer transition-colors">
            <Image
              src="/svg/in.svg"
              alt="linkedin"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </div>
          <div className="bg-grey-08 p-3.5 rounded-full hover:bg-grey-15 cursor-pointer transition-colors">
            <Image
              src="/svg/twitter.svg"
              alt="twitter"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </div>
          <div className="bg-grey-08 p-3.5 rounded-full hover:bg-grey-15 cursor-pointer transition-colors">
            <Image
              src="/svg/youtube.svg"
              alt="youtube"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </div>
        </div>

        {/* Текст (на мобилках снизу, на ПК - слева) */}
        <div className="w-fit h-fit flex flex-col lg:flex-row lg:items-center gap-2.5 lg:gap-6 items-center order-2 lg:order-1 text-grey-50">
          <p className="text-sm">@2023 Estatein. All Rights Reserved.</p>
          <p className="text-sm hidden lg:block">•</p>
          <p className="text-sm hover:text-white cursor-pointer transition-colors">
            Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
}
