"use client";

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface PersonalCardProps {
  name: string;
  position: string;
  imageSrc: string;
}

export default function PersonalCard({
  name,
  position,
  imageSrc,
}: PersonalCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // 1. Храним координаты мыши относительно центра карточки
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Делаем движения плавными (пружинная анимация), чтобы карточка не дергалась резко
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 20 });

  // 3. Твоя математика из script.js:
  // rotateX = (height / 2 - y) / 10 -> это то же самое, что -(y от центра) / 10
  // rotateY = (x - width / 2) / 10 -> это то же самое, что (x от центра) / 10
  const rotateX = useTransform(smoothY, (y) => -y / 20);
  const rotateY = useTransform(smoothX, (x) => x / 20);

  // Функция срабатывает при движении мыши по карточке
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Вычисляем позицию мыши относительно ЦЕНТРА карточки
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Передаем значения в motion-переменные
    mouseX.set(x);
    mouseY.set(y);
  };

  // Когда мышка уходит, возвращаем карточку в исходное положение
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      // Применяем 3D-трансформации
      style={{ 
        rotateX, 
        rotateY, 
        transformPerspective: 1000 // Тот самый perspective(1000px) из твоего CSS
      }}
      // Эффекты при наведении и клике (твои scale(1.1) и scale(1.05))
      whileHover={{ 
        scale: 1.05, // В React 1.1 может быть слишком огромным для сетки, я поставил 1.05, но можешь вернуть 1.1
        boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.3)",
        zIndex: 10 // Чтобы при увеличении карточка была поверх остальных
      }}
      className="flex flex-col p-6 bg-grey-08 border border-grey-15 rounded-2xl h-full w-full cursor-pointer will-change-transform"
    >
      
      {/* 1. Блок с изображением */}
      <div className="relative w-full aspect-[4/3] mb-8">
        
        {/* Внутренний контейнер только для фото */}
        <div className="w-full h-full rounded-xl overflow-hidden rounded-[0.625rem]">
            <Image
                src={imageSrc}
                alt={name}
                fill
                className="object-cover rounded-[0.625rem]"
            />
        </div>

        {/* 2. Иконка птицы */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-10 w-14.5 h-10 flex items-center justify-center rounded-full border border-grey-15 bg-purple-60">
            <Image src="/svg/bird.svg" alt="social" width={20} height={20}/>
        </div>
      </div>

      {/* 3. Инфо блок */}
      <div className="flex flex-col items-center gap-1.5 mb-6 flex-1">
        <span className="text-xl font-semibold text-white text-center">{name}</span>
        <span className="text-sm text-grey-60 text-center min-h-[40px]">{position}</span>
      </div>

      {/* 4. Кнопка */}
      <button className='mt-auto w-full p-2 pl-5 sm:pl-6 flex justify-between items-center bg-grey-10 border border-grey-15 rounded-full hover:border-purple-60 hover:bg-grey-15 transition-all duration-300 ease-out'>
        {/* Добавили truncate и ограничили отступ справа, чтобы текст не давил на кнопку */}
        <p className="text-white text-sm lg:text-[15px] font-medium whitespace-nowrap truncate pr-3">
          Поздороваться 👋
        </p>
        
        {/* Задали жесткие размеры (w-11 h-11), выровняли по центру и добавили shrink-0 */}
        <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center bg-purple-60 rounded-full shrink-0">
            <Image src="/svg/send.svg" alt="send" width={18} height={18} />
        </div>
      </button>

    </motion.div>
  );
}