import Image from 'next/image';

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
  return (
    <div className="flex flex-col p-6 bg-grey-08 border border-grey-15 rounded-2xl h-full w-full">
      
      {/* 1. Блок с изображением */}
      {/* ИСПРАВЛЕНО: добавил квадратные скобки aspect-[4/3], чтобы все фото были 100% одинакового размера */}
      <div className="relative w-full aspect-4/3 mb-8">
        
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
      {/* Добавил flex-1, чтобы этот блок выталкивал кнопку вниз */}
      <div className="flex flex-col items-center gap-1.5 mb-6 flex-1">
        <span className="text-xl font-semibold text-white text-center">{name}</span>
        {/* ИСПРАВЛЕНО: добавил min-h-[40px]. Это резервирует ровно 2 строчки под текст. */}
        <span className="text-sm text-grey-60 text-center min-h-10">{position}</span>
      </div>

      {/* 4. Кнопка */}
      <button className='mt-auto w-full p-2 pl-6 flex justify-between items-center bg-grey-10 border border-grey-15 rounded-full hover:border-purple-60 hover:shadow-purple-60 hover:bg-grey-15 hover:shadow-[0_0_4px] duration-300 ease-out'>
        <p>Поздароваться👋</p>
        <div className="p-3.5 bg-purple-60 rounded-full">
            <Image src="/svg/send.svg" alt="send" width={20} height={20} />
        </div>
      </button>

    </div>
  );
}