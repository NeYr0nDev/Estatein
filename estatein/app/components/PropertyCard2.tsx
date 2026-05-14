import Image from 'next/image';

// Описываем, какие данные будет принимать карточка
interface PropertyCard2Props {
  imageSrc: string;
  name: string;
  title: string;
  description: string;
  price: string;
}

export default function PropertyCard2({
  imageSrc,
  name,
  title,
  description,
  price
}: PropertyCard2Props) {
  return (
    // h-full и flex-col нужны, чтобы карточки в свайпере были одинаковой высоты
    <div className="flex flex-col p-5 md:p-7.5 lg:p-10 bg-grey-08 border border-grey-15 rounded-xl h-full">
      
      {/* 1. Изображение */}
      {/* aspect-[4/3] сохраняет пропорции фото независимо от ширины экрана */}
      <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden mb-4">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover"
        />
      </div>

      <p className='w-fit px-3 py-1.5 rounded-[1.75rem] bg-grey-10 border border-grey-15 text-sm font-medium mb-5.5'>{name}</p>

      {/* 2. Заголовок и описание */}
      <h3 className="text-xl font-semibold text-white mb-0.5">{title}</h3>
      <p className="text-grey-50 text-sm mb-5 leading-relaxed">
        {description}{' '}
        <button className="text-white underline font-medium">
          Читать дальше
        </button>
      </p>

      {/* 4. Подвал (Цена и кнопка) */}
      {/* mt-auto прижимает этот блок к самому низу, если описание сверху короткое */}
      <div className="flex items-center justify-between mt-auto w-full pt-2">
        <div className="flex flex-col">
          <span className="text-grey-50 text-sm mb-1">Цена</span>
          <span className="text-xl font-semibold text-white">${price}</span>
        </div>
        
        <button className="px-5 py-3.5 w-fit bg-purple-60 hover:bg-purple-65 transition-colors rounded-lg text-white text-sm font-medium">
          Подробная информация
        </button>
      </div>

    </div>
  );
}