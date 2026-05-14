"use client";

import { useState } from 'react';
import OfficeCard from './OfficeCard'; // Убедись, что путь правильный

export default function OfficesSection() {
  // 1. Состояние для текущего фильтра
  const [activeFilter, setActiveFilter] = useState('All');

  // 2. Массив кнопок фильтрации (добавил на русском, но value оставил на английском для кода)
  const filters = [
    { label: 'Все', value: 'All' },
    { label: 'Региональные', value: 'Regional' },
    { label: 'Международные', value: 'International' },
  ];

  // 3. База данных карточек (обрати внимание на поле category)
  const offices = [
    {
      id: 1,
      category: 'Regional', // Метка для фильтра
      subtitle: 'Главная штаб-квартира',
      title: '123 Estatein Plaza, Центр города, Метрополис',
      description: 'Наша главная штаб-квартира служит сердцем Estatein. Расположенная в оживленном центре города, здесь работает наша основная команда экспертов, способствуя совершенству и инновациям, которые нас определяют.',
      email: 'info@estatein.com',
      phone: '+1 (123) 456-7890',
      city: 'Метрополис'
    },
    {
      id: 2,
      category: 'Regional', // Метка для фильтра
      subtitle: 'Региональные офисы',
      title: '456 Urban Avenue, Деловой район, Метрополис',
      description: 'Присутствие Estatein охватывает несколько регионов, каждый из которых имеет свой динамичный ландшафт недвижимости. Откройте для себя наши региональные офисы, в которых работают местные эксперты.',
      email: 'info@restatein.com',
      phone: '+1 (123) 628-7890',
      city: 'Метрополис'
    },
    {
      id: 3,
      category: 'International', // Эта карточка покажется только во вкладке "Все" или "Международные"
      subtitle: 'Международный офис',
      title: '789 Global Street, Финансовый квартал, Лондон',
      description: 'Наш лондонский офис обеспечивает поддержку клиентов по всей Европе, предоставляя эксклюзивный доступ к международным рынкам недвижимости высшего класса.',
      email: 'london@estatein.com',
      phone: '+44 (20) 1234-5678',
      city: 'Лондон'
    }
  ];

  // 4. ЛОГИКА ФИЛЬТРАЦИИ:
  // Если выбран 'All' - показываем всё. Иначе - только те, где category совпадает с activeFilter.
  const filteredOffices = activeFilter === 'All' 
    ? offices 
    : offices.filter(office => office.category === activeFilter);

  return (
    <section className="w-full flex flex-col gap-10">
      
      {/* КНОПКИ ФИЛЬТРАЦИИ */}
      {/* overflow-x-auto позволяет скроллить кнопки на маленьких экранах телефона, если они не влезают */}
      <div className="flex items-center gap-2.5 p-2.5 w-full bg-grey-10 md:w-fit overflow-x-auto custom-scrollbar rounded-lg">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-5 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
              activeFilter === filter.value
                ? 'bg-grey-08 border border-grey-20 text-white' // АКТИВНАЯ КНОПКА
                : 'bg-transparent border border-grey-15 text-grey-50 hover:text-white hover:border-grey-20' // НЕАКТИВНАЯ
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* СЕТКА С КАРТОЧКАМИ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7">
        {/* Мапим (перебираем) уже ОТФИЛЬТРОВАННЫЙ массив */}
        {filteredOffices.length > 0 ? (
          filteredOffices.map((office) => (
            <OfficeCard 
              key={office.id}
              subtitle={office.subtitle}
              title={office.title}
              description={office.description}
              email={office.email}
              phone={office.phone}
              city={office.city}
            />
          ))
        ) : (
          // На случай, если в какой-то категории пока нет офисов
          <p className="text-grey-50 py-10 col-span-full">В данной категории пока нет офисов.</p>
        )}
      </div>

    </section>
  );
}