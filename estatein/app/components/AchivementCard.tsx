interface AchivementCardProps{
    title: string;
    description: string;
}

export default function AchivementCard({
    title,
    description,
}: AchivementCardProps){
    return(
        <div className="w-full flex flex-col gap-4 p-7.5 bg-grey-08 border border-grey-15 shadow-[0_0_0_0.25rem] shadow-[#191919] rounded-[0.625rem] lg:rounded-xl lg:p-12.5 lg:shadow-[0_0_0_0.5rem] hover:border-purple-60 hover:shadow-purple-60 hover:shadow-[0_0_6px_4px] hover:scale-102 duration-350 ease-in-out">
            <h1 className="font-semibold text-xl lg:text-3xl text-white">{title}</h1>
            <p className="text-sm font-medium lg:text-lg text-grey-60">{description}</p>
        </div>
    )
}