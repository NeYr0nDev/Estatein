import React from "react";

export default function PropertyCardSkeleton() {
  return (
    // Обертка карточки точно такая же, как в оригинале
    <div className="flex flex-col p-6 bg-grey-10 border border-grey-15 rounded-xl gap-5 h-full w-full">
      
      {/* Имитация картинки: серый прямоугольник с пульсацией */}
      <div className="relative w-full aspect-[4/3] rounded-lg bg-grey-15 animate-pulse"></div>
      
      <div className="flex flex-col gap-3">
        {/* Имитация бейджика (например, "Вилла") */}
        <div className="w-24 h-6 bg-grey-15 rounded-full animate-pulse"></div>
        
        {/* Имитация заголовка (две строки разной длины) */}
        <div className="w-3/4 h-7 bg-grey-15 rounded-md animate-pulse"></div>
        
        {/* Имитация описания (три тонкие линии) */}
        <div className="flex flex-col gap-2 mt-1">
          <div className="w-full h-3 bg-grey-15 rounded animate-pulse"></div>
          <div className="w-full h-3 bg-grey-15 rounded animate-pulse"></div>
          <div className="w-2/3 h-3 bg-grey-15 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Имитация нижнего блока с ценой и кнопкой */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-grey-15">
        <div className="flex flex-col gap-2">
          <div className="w-10 h-3 bg-grey-15 rounded animate-pulse"></div>
          <div className="w-24 h-6 bg-grey-15 rounded-md animate-pulse"></div>
        </div>
        
        {/* Имитация кнопки */}
        <div className="w-32 h-11 bg-grey-15 rounded-lg animate-pulse"></div>
      </div>
    </div>
  );
}