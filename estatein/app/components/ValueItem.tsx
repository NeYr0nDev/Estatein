import Image from 'next/image';

interface ValueItemProps {
  icon: string;
  title: string;
  description: string;
  isLast?: boolean; // Нужно для того, чтобы не рисовать линию у последнего элемента на мобилке
}

export default function ValueItem({ icon, title, description, isLast }: ValueItemProps) {
  return (
    <div className={`flex flex-col gap-4 py-6 lg:p-10 ${!isLast ? 'border-b lg:border-none border-grey-15' : ''}`}>
      <div className="flex items-center gap-3">
        {/* Круглая иконка */}
        <div className="flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-full border border-purple-60 bg-grey-10">
           <Image src={icon} alt={title} width={24} height={24} className="lg:w-8 lg:h-8" />
        </div>
        <h3 className="text-lg lg:text-2xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-sm lg:text-base text-grey-60 leading-relaxed">
        {description}
      </p>
    </div>
  );
}