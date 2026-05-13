interface StepCardProps {
  stepNumber: string; // Например: "01"
  title: string;
  description: string;
}

export default function StepCard({ stepNumber, title, description }: StepCardProps) {
  return (
    // 1. Подняли класс group на самый верх, чтобы свечение срабатывало при наведении на любую часть
    <div className="flex flex-col w-full h-full group">
      
      {/* ВЕРХНЯЯ ЧАСТЬ: Номер шага */}
      {/* 2. Добавили z-20 и relative. Убрали стандартный border-l */}
      <div className="text-white font-medium text-base lg:text-lg px-4 py-3.5 relative z-20">
        {/* 3. МАГИЯ ТУТ: h-[calc(100%+1px)] заставляет линию вылезти на 1px вниз и "сшить" стык с карточкой */}
        <div className="absolute left-0 top-0 w-px h-[calc(100%+1px)] bg-purple-60"></div>
        Шаг {stepNumber}
      </div>

      {/* НИЖНЯЯ ЧАСТЬ: Сама карточка */}
      {/* 4. Обертка relative (z-10), чтобы оторвать линии от overflow-hidden */}
      <div className="relative h-full z-10">
        
        {/* 5. ГРАДИЕНТНЫЕ ЛИНИИ вынесены сюда. Они ложатся ИДЕАЛЬНО поверх серой рамки */}
        {/* Заменили w-0.25 на w-px (ровно 1 пиксель) */}
        <div className="absolute left-0 top-0 w-px h-2/3 bg-gradient-to-b from-purple-60 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none"></div>
        <div className="absolute left-0 top-0 w-1/3 h-px bg-gradient-to-r from-purple-60 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none"></div>
        
        {/* 6. Сама карточка с контентом и overflow-hidden */}
        <div className="relative p-7.5 lg:p-10 bg-grey-08 border border-grey-15 rounded-xl rounded-tl-none overflow-hidden h-full">
          
          {/* Легкое фиолетовое свечение в левом верхнем углу */}
          <div className="absolute -left-12 -top-12 w-32 h-32 bg-purple-60 opacity-10 blur-3xl rounded-full pointer-events-none"></div>

          {/* Контент */}
          <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3.5 relative z-10">
            {title}
          </h3>
          <p className="text-sm lg:text-base text-grey-60 leading-relaxed relative z-10">
            {description}
          </p>
          
        </div>
      </div>
    </div>
  );
}