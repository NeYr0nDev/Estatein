"use client";

import { useState, useEffect } from "react";
import { useCurrency } from "./CurrencyContext";

interface MortgageCalculatorProps {
  initialPrice: number;
}

export default function MortgageCalculator({ initialPrice }: MortgageCalculatorProps) {
  const { formatPrice } = useCurrency();
  const formattedInitialPrice = formatPrice(initialPrice);
  // Состояния ползунков
  const [propertyPrice, setPropertyPrice] = useState(initialPrice);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(20);

  // Состояния для результатов
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [downPaymentAmount, setDownPaymentAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  // Формула аннуитетного платежа пересчитывается при любом изменении ползунков
  useEffect(() => {
    // 1. Первоначальный взнос
    const dpAmount = propertyPrice * (downPaymentPercent / 100);
    setDownPaymentAmount(dpAmount);

    // 2. Тело кредита (сколько берем у банка)
    const principal = propertyPrice - dpAmount;
    setLoanAmount(principal);

    // 3. Месячная процентная ставка (годовая ставка / 100 / 12 месяцев)
    const monthlyRate = interestRate / 100 / 12;

    // 4. Срок кредита в месяцах
    const numberOfPayments = loanTermYears * 12;

    // 5. Расчет ежемесячного платежа по банковской формуле
    if (principal > 0 && monthlyRate > 0) {
      const payment =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      
      setMonthlyPayment(payment);
      setTotalInterest(payment * numberOfPayments - principal);
    } else {
      setMonthlyPayment(0);
      setTotalInterest(0);
    }
  }, [propertyPrice, downPaymentPercent, interestRate, loanTermYears]);

  // Форматирование чисел для красоты (напр. 1200000 -> 1,200,000)
  const formatVal = (val: number) => Math.round(val).toLocaleString("en-US");

  // Для визуального прогресс-бара
  const totalPaid = loanAmount + totalInterest;
  const principalPercent = totalPaid > 0 ? (loanAmount / totalPaid) * 100 : 0;
  const interestPercent = totalPaid > 0 ? (totalInterest / totalPaid) * 100 : 0;

  return (
    <div className="flex flex-col gap-8 p-6 lg:p-10 bg-grey-08 border border-grey-15 rounded-xl h-full w-full">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl lg:text-[1.75rem] font-semibold text-white">
          Ипотечный калькулятор
        </h2>
        <p className="text-sm md:text-base text-grey-60">
          Рассчитайте свои ежемесячные платежи и оцените условия кредитования.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        
        {/* ЛЕВАЯ КОЛОНКА: Настройки (Ползунки) */}
        <div className="flex flex-col gap-8">
          
          {/* Ползунок: Сумма недвижимости */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-end">
              <label className="text-sm text-grey-60">Сумма недвижимости</label>
              <span className="text-xl font-semibold text-white">{formatPrice(propertyPrice)}</span>
            </div>
            <input
              type="range"
              min={500000}
              max={1000000000}
              step={10000}
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
              className="w-full h-2 bg-grey-15 rounded-lg appearance-none cursor-pointer accent-purple-60"
            />
          </div>

          {/* Ползунок: Первоначальный взнос */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-end">
              <label className="text-sm text-grey-60">Первоначальный взнос ({downPaymentPercent}%)</label>
              <span className="text-xl font-semibold text-white">{formatPrice(downPaymentAmount)}</span>
            </div>
            <input
              type="range"
              min={10}
              max={90}
              step={1}
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
              className="w-full h-2 bg-grey-15 rounded-lg appearance-none cursor-pointer accent-purple-60"
            />
          </div>

          {/* Ползунок: Процентная ставка */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-end">
              <label className="text-sm text-grey-60">Процентная ставка</label>
              <span className="text-xl font-semibold text-white">{interestRate.toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min={2}
              max={30}
              step={0.1}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-grey-15 rounded-lg appearance-none cursor-pointer accent-purple-60"
            />
          </div>

          {/* Ползунок: Срок кредита */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-end">
              <label className="text-sm text-grey-60">Срок кредита</label>
              <span className="text-xl font-semibold text-white">{loanTermYears} лет</span>
            </div>
            <input
              type="range"
              min={5}
              max={40}
              step={1}
              value={loanTermYears}
              onChange={(e) => setLoanTermYears(Number(e.target.value))}
              className="w-full h-2 bg-grey-15 rounded-lg appearance-none cursor-pointer accent-purple-60"
            />
          </div>

        </div>

        {/* ПРАВАЯ КОЛОНКА: Результаты расчета */}
        <div className="flex flex-col gap-8 p-6 lg:p-8 bg-grey-10 border border-grey-15 rounded-xl">
          
          <div className="flex flex-col gap-2">
            <span className="text-sm text-grey-60">Ежемесячный платеж</span>
            <span className="text-4xl lg:text-5xl font-bold text-purple-60">
              {formatPrice(monthlyPayment)}
            </span>
          </div>

          {/* Визуальная полоса (Тело кредита vs Переплата) */}
          <div className="flex flex-col gap-3 mt-4">
            <div className="w-full h-3 rounded-full overflow-hidden flex bg-grey-15">
              <div 
                style={{ width: `${principalPercent}%` }} 
                className="bg-white h-full transition-all duration-300"
              ></div>
              <div 
                style={{ width: `${interestPercent}%` }} 
                className="bg-purple-60 h-full transition-all duration-300"
              ></div>
            </div>
            
            <div className="flex justify-between text-xs md:text-sm mt-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <span className="text-grey-60">Тело кредита</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-60"></div>
                <span className="text-grey-60">Переплата по %</span>
              </div>
            </div>
          </div>

          {/* Детализация в виде сетки */}
          <div className="grid grid-cols-2 gap-4 mt-4 border-t border-grey-15 pt-6">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-grey-60">Сумма кредита</span>
              <span className="text-lg font-semibold text-white">{formatPrice(loanAmount)}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-grey-60">Сумма переплаты</span>
              <span className="text-lg font-semibold text-white">{formatPrice(totalInterest)}</span>
            </div>
          </div>

          <button className="w-full py-4 mt-auto bg-grey-08 border border-grey-15 hover:border-purple-60 transition-colors text-white font-medium rounded-lg text-sm md:text-base">
            Одобрить ипотеку онлайн
          </button>
        </div>

      </div>
    </div>
  );
}