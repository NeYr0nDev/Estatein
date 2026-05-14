"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ClientCardProps {
    year: string;
    title: string;
    domain: string;
    category: string;
    said: string;
}

export default function ClientCard({
    year,
    title,
    domain,
    category,
    said
}: ClientCardProps) {
    return (
        <motion.div 
            // Поднимаем карточку на 8px вверх при наведении
            whileHover={{ y: -8 }}
            // Пружинная анимация для максимальной плавности
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            // group - позволяет синхронизировать hover-эффекты внутри карточки
            className="group flex flex-col p-6 gap-7.5 border border-grey-15 bg-grey-08 rounded-[0.625rem] shadow-[0_0_0_0.375rem_#191919] hover:border-purple-60/50 hover:shadow-[0_10px_30px_rgba(112,59,247,0.15)] transition-colors duration-300 cursor-pointer h-full"
        >
            {/* 1. ШАПКА С КНОПКОЙ */}
            <div className="flex flex-col md:flex-row gap-5 md:justify-between md:items-center">
                <div className="flex flex-col gap-0.5">
                    <p className="font-medium text-sm leading-normal md:text-base lg:text-lg text-grey-60">Год {year}</p>
                    <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl text-white">{title}</h1>
                </div>
                {/* Кнопка заливается фиолетовым при наведении на саму карточку (group-hover) */}
                <button className="w-full md:w-fit py-3.5 px-5 rounded-lg bg-grey-10 border border-grey-15 text-white text-sm lg:text-lg group-hover:bg-purple-60 group-hover:border-purple-60 active:scale-99 transition-all duration-300">
                    Посетить сайт
                </button>
            </div>

            {/* 2. СТАТИСТИКА */}
            <div className="grid grid-flow-col w-full">
                <div className="flex flex-col gap-1">
                    <div className="flex gap-0.5 items-center">
                        <Image src="/svg/domain.svg" alt="domain" width={18} height={18} className="lg:w-6 opacity-60 group-hover:opacity-100 transition-opacity" />
                        <p className="text-xs md:text-base lg:text-lg text-grey-60">Сфера</p>
                    </div>
                    <h2 className="font-medium text-sm md:text-base lg:text-xl text-white">{domain}</h2>
                </div>
                
                <div className="w-0.5 bg-grey-15 group-hover:bg-grey-20 transition-colors"></div>
                
                <div className="flex flex-col gap-1">
                    <div className="flex gap-0.5 items-center">
                        <Image src="/svg/category.svg" alt="category" width={18} height={18} className="lg:w-6 opacity-60 group-hover:opacity-100 transition-opacity" />
                        <p className="text-xs md:text-base lg:text-lg text-grey-60">Категория</p>
                    </div>
                    <h2 className="font-medium text-sm md:text-base lg:text-xl text-white">{category}</h2>
                </div>
            </div>

            {/* 3. БЛОК С ОТЗЫВОМ */}
            {/* relative и overflow-hidden нужны для выезжающей линии */}
            <div className="relative flex flex-col gap-2 p-5 rounded-xl border border-grey-15 bg-grey-10/50 overflow-hidden mt-auto">
                {/* Выезжающая фиолетовая линия слева */}
                <div className="absolute left-0 top-0 w-1 h-full bg-purple-60 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                
                <p className="font-medium text-sm text-grey-60 md:text-base lg:text-lg">Что Они сказали 🤗</p>
                <p className="font-medium text-sm md:text-base lg:text-lg text-white leading-relaxed">{said}</p>
            </div>
        </motion.div>
    );
}