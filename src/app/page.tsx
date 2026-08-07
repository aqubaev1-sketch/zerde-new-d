import Image from 'next/image';
import { Plus } from 'lucide-react';
import { Unbounded } from 'next/font/google';

// cyrillic-ext обязателен: казахские буквы (ә, ғ, қ, ң, ө, ұ, ү, і, h)
// лежат именно в этом сабсете, обычного 'cyrillic' для них недостаточно.
const unbounded = Unbounded({
  subsets: ['cyrillic', 'cyrillic-ext', 'latin'],
  weight: ['700', '800', '900'],
  display: 'swap',
  variable: '--font-unbounded',
});

export default function Home() {
  return (
    <section
      className={`${unbounded.variable} font-[family-name:var(--font-unbounded)] relative bg-[#6C52EE] rounded-[40px_20px_50px_30px] sm:rounded-[55px_30px_65px_40px] p-6 sm:p-10 lg:p-14 text-white overflow-hidden mt-20 mb-6 max-w-7xl mx-auto transform -rotate-1 sm:-rotate-2 shadow-xl`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* Левый блок с текстом */}
        <div className="lg:col-span-7 z-10">

          {/* Наклоненный бейдж ОНЛАЙН */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-semibold mb-6 transform -rotate-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>[•] QYZPU AI-ПЛАТФОРМАСЫ</span>
          </div>

          {/*
            leading-[1.25] вместо leading-tight — иначе диакритики казахских
            букв (Ғ, Қ) у длинных строк наезжают на соседнюю строку;
            [font-feature-settings:'lnum'_1,'tnum'_1] — принудительно табличные
            цифры, иначе "1" и "5" рисуются мельче и тоньше, чем "9".
          */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase leading-[1.25] mb-8 tracking-wide [font-feature-settings:'lnum'_1,'tnum'_1]">
            ZERDE ЖАСАНДЫ ИНТЕЛЛЕКТІМЕН <br className="hidden sm:inline" />
            ҰБТ-ҒА ДАЙЫНДЫҚwwwwwwrgtrhsj{' '}
            <span className="relative inline-block text-[#FFE600] whitespace-nowrap">
              от 9 до 15 лет
              {/* Волнистое подчёркивание */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#FFE600]"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,10 Q25,18 50,10 T100,10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Преимущества */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-xs sm:text-sm font-medium leading-snug">
            <div className="flex items-start gap-2">
              <Plus className="text-[#FFE600] shrink-0 mt-0.5" size={18} />
              <span>Научим вашего ребёнка программировать уже на первом занятии</span>
            </div>
            <div className="flex items-start gap-2">
              <Plus className="text-[#FFE600] shrink-0 mt-0.5" size={18} />
              <span>Каждое занятие проходит в группах от 2 до 4 человек</span>
            </div>
          </div>

          {/* Наклоненная кнопка */}
          <button className="bg-[#FFE600] hover:bg-[#ebd300] text-gray-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider py-4 px-8 rounded-full transform -rotate-2 shadow-lg">
            Попробовать бесплатно
          </button>
        </div>

        {/* Правый блок с персонажем */}
        <div className="lg:col-span-5 relative flex justify-center items-center">

          {/* Слегка повернутый спичбабл */}
          <div className="absolute -top-4 right-4 sm:top-2 sm:right-8 bg-white text-gray-900 px-4 py-2 rounded-full shadow-lg text-xs font-bold flex items-center gap-1 z-20 transform rotate-3">
            <span>СКОРЕЕ К НАМ!</span>
            <span className="text-base">🙂</span>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45" />
          </div>

          {/* Изображение */}
          <div className="relative w-full max-w-90 aspect-square">
            <Image
              src="/boy-illustration.png"
              alt="3D персонаж мальчика с ноутбуком"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}