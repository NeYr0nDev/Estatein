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
        <div className="w-auto h-full flex flex-col gap-4 md:gap-5 lg:gap-7.5 p-6 md:p-10 lg:p-12.5 rounded-xl border border-grey-15 bg-grey-08 hover:border-purple-60 hover:shadow-[0_0_6px_#262626] duration-350 ease hover:scale-102">
            <div className="w-full flex gap-2.5 md:gap-4 lg:gap-5 items-center">
                <Image src={imgSrc} alt="icon" width={48} height={48} className="w-12 md:w-15 lg:w-20.5" />
                <h1 className="font-semibold text-lg md:text-xl lg:text-2xl text-white">{title}</h1>
            </div>
            <p className="font-medium text-sm md:text-base lg:text-lg text-grey-60">{description}</p>
        </div>
    )
}