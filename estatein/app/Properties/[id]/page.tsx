"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { propertiesData } from "../../data/propertiesData";
import MortgageCalculator from "../../components/MortgageCalculator";
import { useCurrency } from "../../components/CurrencyContext";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function PropertyDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const property = propertiesData.find((item) => item.id === id);

  const { formatPrice } = useCurrency();
  const formattedPrice = formatPrice(Number(String(property?.price).replace(/\D/g, "")));

  if (!property) {
    return (
      <div className="w-full min-h-screen bg-grey-08 flex flex-col items-center justify-center gap-4 text-white">
        <h1 className="text-2xl font-bold">Объект недвижимости не найден</h1>
        <Link href="/Properties" className="text-purple-60 hover:underline">
          Вернуться к поиску
        </Link>
      </div>
    );
  }

  // Функция для добавления нуля (чтобы было "04", а не "4")
  const formatNumber = (num: number) => (num < 10 ? `0${num}` : num);
  
  // Преобразуем цену из формата "1,200,000" в число 1200000 для калькулятора
  const numericPrice = Number(property.price.replace(/,/g, ""));

  return (
    <div className="w-full min-h-screen bg-grey-08 text-white py-10 px-4 md:px-20 lg:px-40.5 font-sans">
      <Link href="/Properties" className="flex items-center gap-2 text-grey-60 hover:text-white transition-colors mb-8 text-sm">
        ← Назад к списку
      </Link>

      <div className="flex flex-col gap-10">
        {/* ЗАГОЛОВОК */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{property.title}</h1>
            <div className="flex flex-col items-start">
              <span className="text-grey-60 text-base lg:text-lg">Цена</span>
              <p className="text-2xl md:text-3xl font-bold">{formattedPrice}</p>
            </div>
          </div>
          <p className="text-grey-50 text-base lg:text-lg">{property.location}</p>
        </div>

        {/* МЕДИА-БЛОК (Главое фото) */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-grey-15 bg-grey-10">
          <Image 
            unoptimized 
            src={property.imageSrc} 
            alt={property.title} 
            fill 
            className="object-cover"
          />
        </div>

        {/* === НОВАЯ ИНФОРМАЦИОННАЯ СЕТКА (КАК В ДИЗАЙНЕ) === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
          
          {/* Левая карточка: Description */}
          <div className="flex flex-col p-6 lg:p-10 bg-grey-08 border border-grey-15 rounded-xl h-full">
            <h2 className="text-xl lg:text-[1.375rem] font-semibold text-white mb-4">Описание</h2>
            <p className="text-grey-60 text-sm md:text-base leading-relaxed mb-6 lg:mb-10">
              {property.description}
            </p>

            {/* Сетка характеристик */}
            <div className="mt-auto border-t border-grey-15 pt-6 grid grid-cols-2 md:grid-cols-3 gap-y-6">
              
              {/* Спальни */}
              <div className="flex flex-col gap-2 border-r border-grey-15 pr-4">
                <div className="flex items-center gap-2 text-grey-60">
                  {/* Иконка Кровати */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7v10"/><path d="M21 7v10"/><path d="M3 12h18"/><path d="M6 7v5"/><path d="M18 7v5"/><path d="M9 7v5"/><path d="M15 7v5"/></svg>
                  <span className="text-sm">Спальни</span>
                </div>
                <span className="text-xl md:text-2xl font-semibold text-white">{formatNumber(property.bedrooms)}</span>
              </div>

              {/* Ванные */}
              <div className="flex flex-col gap-2 pl-4 md:px-4 md:border-r border-grey-15">
                <div className="flex items-center gap-2 text-grey-60">
                  {/* Иконка Ванной */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 4 8 8h6l-2-4"/><path d="M4 15v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"/><path d="M3 15h18v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3Z"/><path d="M7 20v2"/><path d="M17 20v2"/></svg>
                  <span className="text-sm">Ванные</span>
                </div>
                <span className="text-xl md:text-2xl font-semibold text-white">{formatNumber(property.bathrooms)}</span>
              </div>

              {/* Площадь */}
              <div className="flex flex-col gap-2 col-span-2 md:col-span-1 pt-6 md:pt-0 border-t md:border-t-0 border-grey-15 md:pl-4">
                <div className="flex items-center gap-2 text-grey-60">
                  {/* Иконка Площади */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="m3 9 6-6"/><path d="m3 15 12-12"/><path d="m3 21 18-18"/><path d="m9 21 12-12"/><path d="m15 21 6-6"/></svg>
                  <span className="text-sm">Площадь</span>
                </div>
                <span className="text-xl md:text-2xl font-semibold text-white">{property.area}</span>
              </div>

            </div>
          </div>

          {/* Правая карточка: Key Features and Amenities */}
          <div className="flex flex-col p-6 lg:p-10 bg-grey-08 border border-grey-15 rounded-xl h-full">
            <h2 className="text-xl lg:text-[1.375rem] font-semibold text-white mb-6">Ключевые особенности и удобства</h2>
            <div className="flex flex-col gap-4 md:gap-5">
              {property.amenities?.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-4 py-3 md:py-4 px-4 md:px-5 bg-grey-10 border border-grey-15 border-l-[3px] border-l-purple-60 rounded-r-[10px]">
                  {/* Иконка молнии */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
                  </svg>
                  <span className="text-grey-60 text-sm md:text-base leading-snug">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
        
        {/* Блок с ипотечным калькулятором */}
        <MortgageCalculator initialPrice={numericPrice} />

        {/* === ЛОКАЛЬНАЯ КАРТА ОБЪЕКТА === */}
        <div className="flex flex-col gap-4 p-6 lg:p-10 bg-grey-08 border border-grey-15 rounded-xl w-full mt-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl lg:text-[1.375rem] font-semibold text-white">Расположение на карте</h2>
            <p className="text-sm md:text-base text-grey-60">{property.location}</p>
          </div>
          
          <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden border border-grey-15 mt-4">
            <YMaps>
              <Map defaultState={{ center: property.coordinates, zoom: 14 }} width="100%" height="100%">
                <Placemark 
                  geometry={property.coordinates} 
                  options={{
                    preset: 'islands#violetDotIcon' // Фиолетовая иконка
                  }}
                />
              </Map>
            </YMaps>
          </div>
        </div>

      </div>
    </div>
  );
}