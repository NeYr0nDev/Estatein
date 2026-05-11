"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-12.5 items-center ">
      {/* Верхний блок */}
      <div className="w-full h-fit flex flex-col gap-12.5 px-4 py-12.5">
        <div className="w-full h-fit flex flex-col gap-5 ">
          {/* Лого */}
          <Image
            src="svg/Logo.svg"
            alt="Logo"
            width={113}
            height={34}
            className="w-28.25 h-8.25"
          />
          {/* Поле ввода почты */}
          <div className="flex items-center gap-1.5 w-full max-w-[423px] h-[66px] px-5 bg-grey-08 border border-grey-15 rounded-xl ">
            <div className="flex-shrink-0 flex items-center justify-center w-6 h-6">
              <Image src="/svg/mail.svg" alt="Email" width={24} height={24} />
            </div>

            <input
              type="email"
              placeholder="Введите ваш Email"
              className="flex-1 w-full h-full py-3.5 bg-transparent border-none outline-none text-white placeholder-grey-50 text-sm"
            />

            {/* Кнопка отправки (справа) */}
            <button
              type="button"
              className="flex-shrink-0 flex items-center justify-center w-6 h-6 transition-transform hover:scale-110 active:scale-95"
            >
              <Image src="/svg/send.svg" alt="Send" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
      {/* Блок навигации */}
      <div className="w-fit h-fit flex flex-col gap-5 ">
        {/* Top */}
        <div className="w-fit h-fit flex gap-5">
          {/* Home */}
            <div className="flex flex-col w-[9.9063rem] h-fit gap-4 border-b border-grey-15 pb-5">
              <h4 className="text-base text-grey-60">Главная</h4>
              <div className="flex flex-col gap-2 w-fit h-fit">
                  <Link href="/#heroSection">Главный блок</Link>
                  <Link href="/#features">Особенности</Link>
                  <Link href="/#properties">Свойства</Link>
                  <Link href="/#testimonials">Рекомендации</Link>
                  <Link href="/#faq">FAQ</Link>
              </div>
            </div>

            {/* Линия */}
            <div className="w-px bg-grey-15"></div>

            {/* About us */}
            <div className="flex flex-col w-[9.9063rem] h-fit gap-4 border-b border-grey-15 pb-5">
              <h4 className="text-base text-grey-60">О нас</h4>
              <div className="flex flex-col gap-2 w-fit h-fit">
                  <Link href="/about/#histories">Наши истории</Link>
                  <Link href="/about/#works">Наши работы</Link>
                  <Link href="/about/#hwt">Как это работает</Link>
                  <Link href="/about/#team">Наша команда</Link>
                  <Link href="/about/#clients">Наши клиенты</Link>
              </div>
            </div>
        </div>

        {/* Bottom */}
        <div className="w-fit h-fit flex gap-5">
          <div className="w-[9.9063rem] h-fit flex flex-col gap-5 border-b border-grey-15">
            {/* Properties */}
            <div className="flex flex-col w-[9.9063rem] h-fit gap-4 border-b border-grey-15 pb-5">
              <h4 className="text-base text-grey-60">Свойства</h4>
              <div className="flex flex-col gap-2 w-fit h-fit">
                  <Link href="/about/#histories">Портфолио</Link>
                  <Link href="/about/#works">Категории</Link>
              </div>
            </div>
            {/* Contacts */}
            <div className="flex flex-col w-[9.9063rem] h-fit gap-4 pb-5">
              <h4 className="text-base text-grey-60">Контакты</h4>
              <div className="flex flex-col gap-2 w-fit h-fit">
                  <Link href="/about/#histories">Контактная форма</Link>
                  <Link href="/about/#works">Наш офис</Link>
              </div>
            </div>
          </div>

            {/* Линия */}
            <div className="w-px bg-grey-15"></div>
            {/* Services */}
            <div className="flex flex-col w-[9.9063rem] gap-4 border-b border-grey-15 pb-5">
              <h4 className="text-base text-grey-60">Услуги</h4>
              <div className="flex flex-col gap-2 w-fit h-fit">
                  <Link href="/about/#histories">Мастерство в оценке</Link>
                  <Link href="/about/#works">Стратегический маркетинг</Link>
                  <Link href="/about/#histories">Искусство переговоров</Link>
                  <Link href="/about/#works">Успешное завершение</Link>
                  <Link href="/about/#histories">Управление недвижимостью</Link>
              </div>
            </div>
        </div>
      </div>
      {/* Нижний блок */}
      <div className="w-full h-fit flex flex-col gap-5 items-center justify-center bg-grey-10 py-5 px-4">
        <div className="flex w-fit h-fit gap-2">
          <div className="w-fit h-fit flex gap-2 items-center">
            <div className="bg-grey-08 p-5 rounded-full"><Image src="/svg/facebook.svg" alt="alt" width={20} height={20} className="w-5 h-5"/></div>
          </div>
          <div className="w-fit h-fit flex gap-2 items-center">
            <div className="bg-grey-08 p-5 rounded-full"><Image src="/svg/in.svg" alt="alt" width={20} height={20} className="w-5 h-5"/></div>
          </div>
          <div className="w-fit h-fit flex gap-2 items-center">
            <div className="bg-grey-08 p-5 rounded-full"><Image src="/svg/twitter.svg" alt="alt" width={20} height={20} className="w-5 h-5"/></div>
          </div>
          <div className="w-fit h-fit flex gap-2 items-center">
            <div className="bg-grey-08 p-5 rounded-full"><Image src="/svg/youtube.svg" alt="alt" width={20} height={20} className="w-5 h-5"/></div>
          </div>
        </div>
        <div className="w-fit h-fit flex flex-col gap-2.5 items-center">
          <p className="text-sm">@2023 Estatein. All Rights Reserved.</p>
          <p className="text-sm">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}
