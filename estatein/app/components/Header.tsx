"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-5 shadow-md bg-grey-10 md:px-30">
      {/* Логотип */}
      <Image src="svg/Logo.svg" alt="" width={93} height={28} className='w-[5.8125rem] h-7 md:w-[10rem] h-[3rem]'/>

      {/* Кнопка бургера*/}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="z-999 p-2 md:hidden"
      >
        {/* Иконка бургера */}
        <Image src="svg/burgerMenu.svg" alt="burgerMenu" width={28} height={28} className='w-7 h-7'/>
      </button>

      {/* Навигация */}
      <nav className={`
        fixed inset-0 bg-grey-10 flex flex-col items-center justify-center gap-6 
        transition-transform duration-300 md:static md:flex-row md:transform-none z-998
        ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
      `}>
        <Link className='hover:text-purple-75 duration-150 ease-in' href="/" onClick={() => setIsOpen(false)}>Главная</Link>
        <Link className='hover:text-purple-75 duration-150 ease-in' href="/About" onClick={() => setIsOpen(false)}>О нас</Link>
        <Link className='hover:text-purple-75 duration-150 ease-in' href="/Properties" onClick={() => setIsOpen(false)}>Имущество</Link>
        <Link className='hover:text-purple-75 duration-150 ease-in' href="/Services" onClick={() => setIsOpen(false)}>Услуги</Link>

        <button className='hover:border-purple-60 hover:bg-black hover:shadow-purple-60 hover:shadow-[0_0_8px] active:scale-98 active:shadow-[0_0_12px] duration-350 cursor-pointer ease md:hidden w-fit h-fit px-5 py-3.5 bg-grey-08 border border-grey-15 text-center items-cente rounded-lg text-[.875rem]'>Связаться</button>
      </nav>
      <button className='hover:border-purple-60 hover:bg-black hover:shadow-purple-60 hover:shadow-[0_0_8px] active:scale-98 active:shadow-[0_0_12px] duration-350 cursor-pointer ease hidden md:block px-5 py-3.5 bg-grey-08 border border-grey-15 rounded-lg text-sm'>
        Связаться
      </button>
    </header>
  );
}