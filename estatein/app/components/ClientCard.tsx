import Image from "next/image";

interface ClientCardProps{
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
    return(
        <div className="flex flex-col p-6 gap-7.5 border border-grey-15 bg-grey-08 rounded-[0.625rem] shadow-[0_0_0_0.375rem_#191919]">
            <div className="flex flex-col md:flex-row gap-5 md:justify-between">
                <div className="flex flex-col gap-0.5">
                    <p className="font-medium text-sm leading-normal md:text-base lg:text-lg">Год {year}</p>
                    <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl">{title}</h1>
                </div>
                <button className="w-full md:w-fit py-3.5 px-5 rounded-lg bg-grey-10 border border-grey-15 text-sm lg:text-lg">Посетить сайт</button>
            </div>
            <div className="grid grid-flow-col w-full">
                <div className="flex flex-col gap-1 ">
                    <div className="flex gap-0.5 items-center">
                        <Image src="/svg/domain.svg" alt="domain" width={18} height={18} className="lg:w-6" />
                        <p className="text-xs md:text-base lg:text-lg text-grey-60">Сфера</p>
                    </div>
                    <h2 className="font-medium text-sm md:text-base lg:text-xl">{domain}</h2>
                </div>
                <div className="w-0.25 bg-grey-15"></div>
                <div className="flex flex-col gap-1 ">
                    <div className="flex gap-0.5 items-center">
                        <Image src="/svg/category.svg" alt="domain" width={18} height={18} className="lg:w-6" />
                        <p className="text-xs md:text-base lg:text-lg text-grey-60">Категория</p>
                    </div>
                    <h2 className="font-medium text-sm md:text-base lg:text-xl">{category}</h2>
                </div>
            </div>
            <div className="flex flex-col gap-2 p-5 rounded-xl border border-grey-15">
                <p className="font-medium text-sm text-grey-60 md:text-base lg:text-lg">Что Они сказали 🤗</p>
                <p className="font-medium text-sm md:text-base lg:text-lg">{said}</p>
            </div>
        </div>
    )
}