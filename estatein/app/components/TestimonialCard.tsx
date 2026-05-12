import Image from 'next/image';

// Описываем, какие данные принимает карточка отзыва
interface TestimonialCardProps {
  title: string;
  description: string;
  authorName: string;
  authorLocation: string;
  authorImage: string;
}

export default function TestimonialCard({
  title,
  description,
  authorName,
  authorLocation,
  authorImage,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col p-8 bg-grey-08 border border-grey-15 rounded-2xl h-full">
      
      {/* 1. Звезды рейтинга (Генерируем 5 штук) */}
      <div className="flex gap-2.5 mb-8">
        {[...Array(5)].map((_, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center w-10 h-10 bg-grey-10 border border-grey-15 rounded-full"
          >
            {/* Встроенная SVG-иконка звезды (желтая) */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2L12.472 7.012L18 7.816L14 11.716L14.944 17.22L10 14.62L5.056 17.22L6 11.716L2 7.816L7.528 7.012L10 2Z" fill="#FFE500"/>
            </svg>
          </div>
        ))}
      </div>

      {/* 2. Заголовок и текст отзыва */}
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-grey-50 text-sm leading-relaxed mb-8">
        {description}
      </p>

      {/* 3. Блок автора (Прижимается к низу благодаря mt-auto) */}
      <div className="flex items-center gap-3 mt-auto w-full">
        {/* Аватарка */}
        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
          <Image 
            src={authorImage} 
            alt={authorName} 
            fill 
            className="object-cover"
          />
        </div>
        
        {/* Имя и локация */}
        <div className="flex flex-col">
          <span className="text-white font-medium text-sm">{authorName}</span>
          <span className="text-grey-50 text-sm">{authorLocation}</span>
        </div>
      </div>

    </div>
  );
}