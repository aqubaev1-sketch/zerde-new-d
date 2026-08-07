import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#d1d5db] pt-16 pb-8 mt-auto">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        
        {/* Негізгі 3 бағанды бөлік */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10 md:gap-16 pb-12">
          
          {/* 1. Zerde туралы ақпарат */}
          <div>
            <h3 className="text-[#1f1f1f] font-extrabold text-xl tracking-tight uppercase mb-4 font-['Space_Grotesk',sans-serif]">
              ZERDE
            </h3>
            <p className="text-[#6a7282] text-sm leading-relaxed max-w-sm">
              Интерактивная образовательная платформа для быстрого и качественного освоения современных ИТ-технологий, баз данных и программирования.
            </p>
          </div>

          {/* 2. Карта платформы */}
          <div>
            <h4 className="text-[#1f1f1f] font-bold text-xs uppercase tracking-[1px] mb-5">
              Карта платформы
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/courses" className="text-[#6a7282] hover:text-[#1f1f1f] text-sm transition-colors">
                  Каталог курсов
                </Link>
              </li>
              <li>
                <Link href="/tasks" className="text-[#6a7282] hover:text-[#1f1f1f] text-sm transition-colors">
                  Практические задания
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-[#6a7282] hover:text-[#1f1f1f] text-sm transition-colors">
                  Поддержка и обратная связь
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Контакты */}
          <div>
            <h4 className="text-[#1f1f1f] font-bold text-xs uppercase tracking-[1px] mb-5">
              Контакты
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-[#6a7282]">
              <li>
                Email: <a href="mailto:info@qyzpu.edu.kz" className="hover:text-[#1f1f1f] transition-colors">info@qyzpu.edu.kz</a>
              </li>
              <li>
                Тел: <a href="tel:+77272370095" className="hover:text-[#1f1f1f] transition-colors">+7 (727) 237-00-95</a>
              </li>
              <li>
                <Link href="/license" className="hover:text-[#1f1f1f] transition-colors">
                  Лицензия
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Төменгі сызық және копирайт */}
        <div className="border-t border-[#e5e7eb] pt-8 text-center">
          <p className="text-[#6a7282] text-xs uppercase tracking-[2px]">
            © 2026 Zerde Educational Systems
          </p>
        </div>

      </div>
    </footer>
  );
}