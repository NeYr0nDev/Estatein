"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // 1. Импортируем хук

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // 2. Получаем текущий адрес страницы

  // 3. Создаем массив ссылок, чтобы не дублировать код
  const navLinks = [
    { name: 'Главная', href: '/' },
    { name: 'О нас', href: '/About' },
    { name: 'Имущество', href: '/Properties' },
    { name: 'Услуги', href: '/Services' },
  ];

  return (
    <header className="flex items-center justify-between px-4 py-5 shadow-md bg-grey-10 md:px-30">
      {/* Логотип (добавил слэш / перед svg, чтобы картинка не ломалась на других страницах) */}
      <Image src="/svg/Logo.svg" alt="Estatein" width={93} height={28} className='w-[5.8125rem] h-7 md:w-[10rem] md:h-[3rem]'/>

      {/* Кнопка бургера*/}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="z-999 p-2 md:hidden"
      >
        <Image src="/svg/burgerMenu.svg" alt="burgerMenu" width={28} height={28} className='w-7 h-7'/>
      </button>

      {/* Навигация */}
      <nav className={`
        fixed inset-0 bg-grey-10 flex flex-col items-center justify-center gap-6 
        transition-transform duration-300 md:static md:flex-row md:transform-none z-998
        ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
      `}>
        
        {/* Перебираем массив ссылок и рендерим их */}
        {navLinks.map((link) => {
          // Проверяем, активна ли текущая ссылка
          const isActive = pathname === link.href;
          
          return (
            <Link 
              key={link.name}
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className={`px-5 py-2.5 rounded-lg transition-all duration-150 ease-in ${
                isActive 
                  ? 'bg-grey-08 border border-grey-15 text-white' // Стили для АКТИВНОЙ ссылки
                  : 'border border-transparent hover:text-purple-75 text-white/80 hover:text-white' // Стили для НЕАКТИВНОЙ
              }`}
            >
              {link.name}
            </Link>
          );
        })}

        <button className='hover:border-grey-20 hover:bg-grey-08 hover:shadow-grey-20 hover:shadow-[0_0_8px] active:scale-98 active:shadow-[0_0_12px] duration-350 cursor-pointer ease md:hidden w-fit h-fit px-5 py-3.5 bg-grey-08 border border-grey-15 text-center items-center rounded-lg text-[.875rem]'>
          Связаться
        </button>
      </nav>
      
      <button className='hover:border-grey-20 hover:bg-grey-08 hover:shadow-grey-20 hover:shadow-[0_0_8px] active:scale-98 active:shadow-[0_0_12px] duration-350 cursor-pointer ease hidden md:block px-5 py-3.5 bg-grey-08 border border-grey-15 rounded-lg text-sm'>
        Связаться
      </button>
    </header>
  );
}