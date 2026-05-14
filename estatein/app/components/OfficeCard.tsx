import React from 'react';

interface OfficeCardProps {
  subtitle: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  city: string;
}

export default function OfficeCard({
  subtitle,
  title,
  description,
  email,
  phone,
  city,
}: OfficeCardProps) {
  return (
    <div className="flex flex-col p-6 lg:p-10 border border-grey-15 rounded-2xl bg-grey-08 h-full">
      
      {/* 1. Текстовый блок */}
      <div className="flex flex-col gap-2.5 mb-8 md:mb-10">
        <span className="text-sm font-medium text-grey-60">{subtitle}</span>
        <h3 className="text-xl lg:text-2xl font-semibold text-white leading-snug">{title}</h3>
        <p className="text-sm lg:text-base text-grey-50 leading-relaxed mt-1">
          {description}
        </p>
      </div>

      {/* 2. Блок с плашками контактов */}
      {/* flex-wrap позволяет плашкам переноситься на новую строку на узких экранах */}
      <div className="flex flex-wrap items-center gap-2.5 lg:gap-4 mb-8 md:mb-10">
        
        {/* Email */}
        <div className="flex items-center gap-2 px-4 py-2 border border-grey-15 rounded-full bg-grey-10 transition-colors hover:border-purple-60 cursor-pointer group">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <span className="text-sm text-white group-hover:text-purple-60 transition-colors">{email}</span>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2 px-4 py-2 border border-grey-15 rounded-full bg-grey-10 transition-colors hover:border-purple-60 cursor-pointer group">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
             <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span className="text-sm text-white group-hover:text-purple-60 transition-colors">{phone}</span>
        </div>

        {/* City/Location */}
        <div className="flex items-center gap-2 px-4 py-2 border border-grey-15 rounded-full bg-grey-10 transition-colors hover:border-purple-60 cursor-pointer group">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span className="text-sm text-white group-hover:text-purple-60 transition-colors">{city}</span>
        </div>

      </div>

      {/* 3. Кнопка (mt-auto прижимает её к самому низу, если карточки разной высоты) */}
      <button className="mt-auto w-full py-3.5 bg-purple-60 hover:bg-purple-65 active:scale-99 transition-all rounded-lg text-white font-medium text-sm">
        Получить маршрут
      </button>

    </div>
  );
}