"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion"; // 1. Импортируем motion

export default function ContactForm() {
  const [contactMethod, setContactMethod] = useState<"phone" | "email">(
    "phone",
  );
  const [isAgreed, setIsAgreed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Единое состояние для всех полей формы
  const [formValues, setFormValues] = useState<Record<string, string>>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    location: "",
    propertyType: "",
    bathrooms: "",
    bedrooms: "",
    budget: "",
  });

  // Состояние для ошибок валидации
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const formRef = useRef<HTMLFormElement>(null);

  // Закрытие выпадающих списков по клику вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Универсальный обработчик ввода текста
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    // Убираем ошибку, если пользователь начал вводить текст
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: false }));
  };

  // Умная маска для телефона (+7 (XXX) XXX-XX-XX)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, ""); // Оставляем только цифры
    let formatted = "";

    if (!input) {
      setFormValues((prev) => ({ ...prev, phone: "" }));
      return;
    }

    // Игнорируем первую 7 или 8, так как код страны всегда +7
    const numbers =
      input[0] === "7" || input[0] === "8" ? input.slice(1) : input;

    formatted = "+7";
    if (numbers.length > 0) formatted += " (" + numbers.substring(0, 3);
    if (numbers.length >= 4) formatted += ") " + numbers.substring(3, 6);
    if (numbers.length >= 7) formatted += "-" + numbers.substring(6, 8);
    if (numbers.length >= 9) formatted += "-" + numbers.substring(8, 10);

    setFormValues((prev) => ({ ...prev, phone: formatted }));
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: false }));
  };

  const handleSelectOption = (id: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: false }));
    setOpenDropdown(null);
  };

  // ВАЛИДАЦИЯ ФОРМЫ
  const handleSubmit = () => {
    const newErrors: Record<string, boolean> = {};
    let isValid = true;

    // Проверка текстовых полей
    if (!formValues.firstName.trim()) newErrors.firstName = true;
    if (!formValues.lastName.trim()) newErrors.lastName = true;
    if (!formValues.message.trim()) newErrors.message = true;

    // Проверка email (регулярное выражение)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.email)) newErrors.email = true;

    // Проверка телефона (должно быть ровно 18 символов: +7 (999) 999-99-99)
    if (formValues.phone.length !== 18) newErrors.phone = true;

    // Проверка выпадающих списков
    ["location", "propertyType", "bathrooms", "bedrooms", "budget"].forEach(
      (key) => {
        if (!formValues[key]) newErrors[key] = true;
      },
    );

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      isValid = false;
    }

    if (isValid) {
      alert("Форма успешно отправлена! 🎉\nДанные в консоли.");
      console.log("Отправленные данные:", formValues);
    }
  };

  // Динамические классы инпутов с учетом ошибок
  const getInputClasses = (fieldName: string) =>
    `w-full bg-grey-10 border rounded-lg px-5 py-4 text-white placeholder-grey-50 text-sm focus:bg-grey-08 transition-colors duration-300 outline-none ${
      errors[fieldName]
        ? "border-red-500 focus:border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]"
        : "border-grey-15 focus:border-purple-60"
    }`;

  const labelClasses = "text-sm lg:text-base font-medium text-white mb-2.5";

  // Генератор выпадающих списков
  const renderCustomSelect = (
    id: string,
    label: string,
    placeholder: string,
    options: string[],
    colSpanClass: string = "col-span-1",
  ) => {
    const isOpen = openDropdown === id;
    const selectedValue = formValues[id];
    const hasError = errors[id];

    return (
      <div className={`flex flex-col relative ${colSpanClass}`} key={id}>
        <label className={labelClasses}>{label}</label>
        <div
          onClick={() => setOpenDropdown(isOpen ? null : id)}
          className={`w-full bg-grey-10 border rounded-lg px-5 py-4 text-sm flex justify-between items-center cursor-pointer transition-colors duration-300 ${
            hasError
              ? "border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]"
              : isOpen
                ? "border-purple-60 bg-grey-08"
                : "border-grey-15"
          }`}
        >
          <span
            className={`truncate ${selectedValue ? "text-white" : "text-grey-50"}`}
          >
            {selectedValue || placeholder}
          </span>
          <div
            className={`text-grey-50 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180 text-white" : ""}`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>

        <div
          className={`absolute left-0 top-[calc(100%+8px)] w-full bg-grey-10 border border-grey-15 rounded-lg shadow-xl z-50 overflow-hidden transition-all duration-200 origin-top ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}
        >
          <div className="flex flex-col py-2 max-h-60 overflow-y-auto custom-scrollbar">
            {options.map((opt, idx) => (
              <div
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectOption(id, opt);
                }}
                className={`px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer hover:bg-grey-15 ${selectedValue === opt ? "text-purple-60 bg-grey-08" : "text-grey-50 hover:text-white"}`}
              >
                {opt}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    // 2. ОБЕРТКА С АНИМИРОВАННЫМ ГРАДИЕНТОМ
    <div className="relative w-full p-[1px] bg-grey-15 rounded-2xl overflow-hidden">
      
      {/* 3. Вращающийся градиент (Светящаяся фиолетовая полоса) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        // Делаем элемент огромным (250%), чтобы при вращении не было видно его углов
        className="absolute top-1/2 left-1/2 w-[250%] h-[250%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_75%,#703bf7_100%)] z-0"
      />

      <form
        ref={formRef}
        // 4. Сама форма теперь поверх градиента (z-10), со своим фоном (bg-grey-08) 
        // и чуть меньшим скруглением (rounded-[15px]), чтобы градиент было видно только по краям
        className="relative z-10 w-full p-5 lg:p-10 rounded-[15px] bg-grey-08"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {/* --- 1 РЯД --- */}
          <div className="flex flex-col col-span-1">
            <label className={labelClasses}>Имя</label>
            <input
              name="firstName"
              value={formValues.firstName}
              onChange={handleInputChange}
              type="text"
              placeholder="Введите имя"
              className={getInputClasses("firstName")}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <label className={labelClasses}>Фамилия</label>
            <input
              name="lastName"
              value={formValues.lastName}
              onChange={handleInputChange}
              type="text"
              placeholder="Введите фамилию"
              className={getInputClasses("lastName")}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <label className={labelClasses}>Почта</label>
            <input
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              type="email"
              placeholder="Введите ваш Email"
              className={getInputClasses("email")}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <label className={labelClasses}>Телефон</label>
            <input
              name="phone"
              value={formValues.phone}
              onChange={handlePhoneChange}
              type="tel"
              placeholder="Ваш номер"
              className={getInputClasses("phone")}
            />
          </div>

          {/* --- 2 РЯД (Dropdowns) --- */}
          {renderCustomSelect(
            "location",
            "Предпочитаемое местоположение",
            "Выберите место",
            ["Москва", "Санкт-Петербург", "Казань", "Сочи"],
            "truncate",
          )}
          {renderCustomSelect(
            "propertyType",
            "Тип недвижимости",
            "Выберите тип",
            ["Вилла", "Квартира", "Коттедж", "Таунхаус"],
          )}
          {renderCustomSelect("bathrooms", "Ванные комнаты", "Выберите кол-во", [
            "1",
            "2",
            "3",
            "4+",
          ])}
          {renderCustomSelect("bedrooms", "Спальни", "Выберите кол-во", [
            "1",
            "2",
            "3",
            "4+",
          ])}

          {/* --- 3 РЯД --- */}
          {renderCustomSelect(
            "budget",
            "Бюджет",
            "Выберите бюджет",
            ["До 5 млн ₽", "5 - 10 млн ₽", "10 - 20 млн ₽", "От 20 млн ₽"],
            "col-span-1 md:col-span-2",
          )}

         {/* Способ связи */}
          <div className="flex flex-col col-span-1 md:col-span-2">
            <label className={labelClasses}>Предпочтительный способ связи</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                onClick={() => setContactMethod("phone")}
                className={`flex items-center justify-between px-5 py-3.5 border bg-grey-10 rounded-lg cursor-pointer transition-colors group ${
                  errors.phone
                    ? "border-red-500"
                    : contactMethod === "phone"
                      ? "border-purple-60"
                      : "border-grey-15 hover:border-purple-60"
                }`}
              >
                <div className="flex items-center gap-3 w-full pr-4">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white flex-shrink-0"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <input
                    name="phone"
                    value={formValues.phone}
                    onChange={handlePhoneChange}
                    type="tel"
                    placeholder="Ваш номер телефона"
                    className="w-full bg-transparent border-none outline-none text-white text-sm placeholder-grey-50"
                    onFocus={() => setContactMethod("phone")}
                  />
                </div>
                <div className="w-4 h-4 flex-shrink-0 rounded-full border border-purple-60 flex items-center justify-center p-0.5">
                  <div
                    className={`w-full h-full rounded-full transition-all duration-300 ${contactMethod === "phone" ? "bg-purple-60" : "bg-transparent"}`}
                  ></div>
                </div>
              </div>

              <div
                onClick={() => setContactMethod("email")}
                className={`flex items-center justify-between px-5 py-3.5 border bg-grey-10 rounded-lg cursor-pointer transition-colors group ${
                  errors.email
                    ? "border-red-500"
                    : contactMethod === "email"
                      ? "border-purple-60"
                      : "border-grey-15 hover:border-purple-60"
                }`}
              >
                <div className="flex items-center gap-3 w-full pr-4">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white flex-shrink-0"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <input
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Ваша электронная почта"
                    className="w-full bg-transparent border-none outline-none text-white text-sm placeholder-grey-50"
                    onFocus={() => setContactMethod("email")}
                  />
                </div>
                <div className="w-4 h-4 flex-shrink-0 rounded-full border border-purple-60 flex items-center justify-center p-0.5">
                  <div
                    className={`w-full h-full rounded-full transition-all duration-300 ${contactMethod === "email" ? "bg-purple-60" : "bg-transparent"}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* --- 4 РЯД (Текстовое поле) --- */}
          <div className="flex flex-col col-span-1 md:col-span-2 xl:col-span-4">
            <label className={labelClasses}>Сообщение</label>
            <textarea
              name="message"
              value={formValues.message}
              onChange={handleInputChange}
              placeholder="Введите ваше сообщение здесь..."
              rows={5}
              className={`${getInputClasses("message")} resize-none`}
            ></textarea>
          </div>
        </div>

        {/* --- 5 РЯД (Подвал) --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-10 w-full">
          <div
            className="flex items-center gap-2.5 cursor-pointer group w-full md:w-auto"
            onClick={() => setIsAgreed(!isAgreed)}
          >
            <div
              className={`w-5 h-5 flex-shrink-0 rounded border flex items-center justify-center transition-colors duration-200 ${isAgreed ? "bg-purple-60 border-purple-60" : "border-grey-15 bg-grey-10 group-hover:border-purple-60"}`}
            >
              {isAgreed && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
            </div>
            <span className="text-grey-50 text-sm select-none group-hover:text-white transition-colors">
              Я соглашаюсь с Условиями использования и Политикой
              конфиденциальности
            </span>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!isAgreed}
            className={`w-full md:w-auto px-8 py-3.5 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-300 
              ${
                isAgreed
                  ? "bg-purple-60 hover:bg-purple-65 active:scale-95 text-white cursor-pointer"
                  : "bg-grey-15 text-grey-50 cursor-not-allowed opacity-70"
              }`}
          >
            Отправить сообщение
          </button>
        </div>
      </form>
    </div>
  );
}