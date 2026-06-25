"use client"
import Image from "next/image";

interface ServiceCardProps{
    imgSrc: string;
    title: string;
    description: string;
}

export default function ServiceCard({
    imgSrc,
    title,
    description
}: ServiceCardProps) {
    return(
        // 1. Уменьшили гигантский padding (lg:p-12.5 -> lg:p-8)
        <div className="w-full h-full flex flex-col gap-4 md:gap-5 p-5 md:p-6 lg:p-8 rounded-xl border border-grey-15 bg-grey-08 hover:border-purple-60 hover:shadow-[0_0_6px_#262626] transition-all duration-300 ease-out hover:scale-[1.02]">
            
            <div className="w-full flex gap-3 md:gap-4 lg:gap-5 items-center">
                {/* 2. Немного уменьшили иконку и жестко запретили ей сжиматься (shrink-0) */}
                <div className="shrink-0 flex items-center justify-center">
                    <Image src={imgSrc} alt="icon" width={60} height={60} className="w-12 md:w-14 lg:w-16 h-auto" />
                </div>
                
                {/* 3. Оптимизировали шрифт (lg:text-xl вместо 2xl) и добавили leading-tight для красивых переносов */}
                <h1 className="font-semibold text-lg md:text-[1.15rem] lg:text-xl leading-tight text-white flex-1 break-words">
                    {title}
                </h1>
            </div>
            
            <p className="font-medium text-sm md:text-base text-grey-60 mt-2">{description}</p>
        </div>
    )
}