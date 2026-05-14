"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Главная', href: '/' },
    { name: 'О нас', href: '/About' },
    { name: 'Имущество', href: '/Properties' },
    { name: 'Услуги', href: '/Services' },
  ];

  // Проверяем, находимся ли мы на странице контактов
  const isContactActive = pathname === '/Contacts';

  return (
    <header className="flex items-center justify-between px-4 py-5 shadow-md bg-grey-10 md:px-30 relative z-50">
      
      {/* Логотип */}
      <Link href="/">
        <Image src="/svg/Logo.svg" alt="Estatein" width={93} height={28} className='w-[5.8125rem] h-7 md:w-[10rem] md:h-[3rem]'/>
      </Link>

      {/* Кнопка бургера */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="z-[999] p-2 md:hidden"
      >
        <Image src="/svg/burgerMenu.svg" alt="burgerMenu" width={28} height={28} className='w-7 h-7'/>
      </button>

      {/* Навигация */}
      <nav className={`
        fixed inset-0 bg-grey-10 flex flex-col items-center justify-center gap-6 
        transition-transform duration-300 md:static md:flex-row md:transform-none z-[998]
        ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
      `}>
        
        {/* Основные ссылки */}
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          
          return (
            <Link 
              key={link.name}
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className={`px-5 py-2.5 rounded-lg transition-all duration-150 ease-in ${
                isActive 
                  ? 'bg-grey-08 border border-grey-15 text-white'
                  : 'border border-transparent hover:text-purple-75 text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          );
        })}

        {/* Мобильная кнопка "Связаться" */}
        <Link 
          href="/Contacts"
          onClick={() => setIsOpen(false)} // Закрываем меню при клике на мобилке
          className={`
            md:hidden px-5 py-3.5 rounded-lg text-[.875rem] font-medium transition-all duration-300 active:scale-95
            ${isContactActive 
              ? 'bg-purple-60 border border-purple-60 text-white' // АКТИВНАЯ: Фиолетовая
              : 'bg-grey-08 border border-grey-15 text-white hover:bg-purple-60' // НЕАКТИВНАЯ: Серая
            }
          `}
        >
          Связаться
        </Link>
      </nav>
      
      {/* Десктопная кнопка "Связаться" */}
      <Link 
        href="/Contacts"
        className={`
          hidden md:block px-5 py-3.5 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-[0_0_8px_rgba(255,255,255,0.05)] active:scale-95
          ${isContactActive 
            ? 'bg-purple-60 border border-purple-60 text-white shadow-[0_0_12px_rgba(112,59,247,0.4)]' // АКТИВНАЯ: Фиолетовая с легким свечением
            : 'bg-grey-08 border border-grey-15 text-white hover:bg-grey-10 hover:border-purple-60' // НЕАКТИВНАЯ: Серая
          }
        `}
      >
        Связаться
      </Link>
      
    </header>
  );
}