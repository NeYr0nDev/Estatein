"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Типы доступных валют
type Currency = "RUB" | "USD" | "EUR";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (priceInRubles: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Курсы валют (для курсовой можно захардкодить статичные значения)
const EXCHANGE_RATES = {
  RUB: 1,
  USD: 73, // 1 доллар = 73 рубля
  EUR: 85, // 1 евро = 85 рублей
};

const SYMBOLS = {
  RUB: "₽",
  USD: "$",
  EUR: "€",
};

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("RUB"); // По умолчанию рубли

  // Умная функция форматирования
  const formatPrice = (priceInRubles: number) => {
    // Конвертируем цену
    const convertedValue = priceInRubles / EXCHANGE_RATES[currency];
    // Форматируем с запятыми/пробелами
    const formattedNumber = Math.round(convertedValue).toLocaleString("en-US");
    
    // Возвращаем цену с правильным символом
    return currency === "RUB" 
      ? `${formattedNumber} ${SYMBOLS[currency]}` // Рубли пишем после суммы: 1 000 ₽
      : `${SYMBOLS[currency]}${formattedNumber}`; // Валюту перед: $1,000
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

// Пользовательский хук для быстрого доступа
export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}