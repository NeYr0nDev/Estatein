"use client"
import Image from "next/image";

interface ServiceCardBigProps{
    title: string;
    description: string;
}

export default function ServiceCardBig({
    title,
    description
}: ServiceCardBigProps) {
    return(
        <div className="w-full h-full bg-[url(/svg/cardBG.svg)] bg-no-repeat bg-cover flex flex-col gap-5 md:gap-5 lg:gap-7.5 p-6 md:p-10 lg:p-12.5 rounded-xl border border-grey-15 hover:border-purple-60 hover:shadow-[0_0_6px_#262626] duration-350 ease hover:scale-102">
            <div className="w-full flex flex-col md:flex-row md:justify-between gap-2.5 items-center">
                <h1 className="font-semibold text-lg md:text-xl lg:text-2xl text-white">{title}</h1>
                <button className="w-full md:w-fit p-3.5 md:px-5 lg:px-6 lg:py-4.5 bg-grey-08 border border-grey-15 text-sm md:text-base lg:text-lg rounded-lg hover:border-grey-60 hover:shadow-[0_0_6px_#999999] duration-350 ease">Узнать больше</button>
            </div>
            <p className="font-medium text-sm md:text-base lg:text-lg text-grey-60">{description}</p>
        </div>
    )
}