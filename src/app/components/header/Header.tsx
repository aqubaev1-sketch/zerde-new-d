'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const isVerified = !!user && user.emailVerified;

  // Профиль: гостя отправляем на вход, неподтверждённого — на подтверждение email
  const handleProfileClick = (e: React.MouseEvent) => {
    closeMenu();
    if (!user) {
      e.preventDefault();
      router.push('/login?redirect=%2Fprofile');
    } else if (!user.emailVerified) {
      e.preventDefault();
      router.push('/verify-email?redirect=%2Fprofile');
    }
  };

  const handleLogout = async () => {
    closeMenu();
    await logout();
    router.push('/');
  };

  const navLinkClass =
    "block w-full text-center p-4 md:p-0 font-['Inter',sans-serif] text-[14px] font-bold uppercase tracking-[1px] text-[#6a7282] hover:text-[#1f1f1f] transition-colors";

  return (
    <header className="bg-white border-b border-[#464646] px-4 md:px-10 py-4 relative z-100">
      <div className="container">
        <nav className="grid grid-cols-[auto_1fr_auto] items-center uppercase">
          
          {/* 1. Логотип (Сол жақ) */}
          <Link href="/" className="inline-flex items-center text-[#1f1f1f] font-extrabold text-xl md:text-2xl tracking-tight no-underline pr-8">
            Zerde
          </Link>

          {/* 2. Ортадағы Мәзір (md:justify-center арқылы дәл ортаға тұрады) */}
          <div
            className={`
              absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg flex flex-col items-center gap-0 p-0 overflow-hidden transition-all duration-300 z-100
              md:static md:w-auto md:border-t-0 md:shadow-none md:flex-row md:justify-center md:overflow-visible
              ${isMenuOpen ? 'max-h-[80vh] overflow-y-auto visible py-4 md:py-0' : 'max-h-0 invisible md:max-h-none md:visible'}
            `}
          >
            <ul className="w-full flex flex-col items-center gap-0 m-0 p-0 list-none md:flex-row md:justify-center md:gap-10">
              {/* Скрыто для гостей и неподтверждённых — доступно только после верификации email */}
              {isVerified && (
                <>
                  <li>
                    <Link href="/ai-chat" className={navLinkClass} onClick={closeMenu}>
                      AI Агент
                    </Link>
                  </li>
                  <li>
                    <Link href="/testEnt" className={navLinkClass} onClick={closeMenu}>
                      Тест
                    </Link>
                  </li>
                </>
              )}

              {/* Для гостей в меню остаётся только главная (логотип) — профиль показываем, только если есть аккаунт */}
              {!!user && (
                <li>
                  <Link href="/profile" className={navLinkClass} onClick={handleProfileClick}>
                    Профиль
                  </Link>
                </li>
              )}
            </ul>

            {/* Мобильдік батырмалар */}
            <div className="flex flex-col items-center gap-[10px] w-full px-6 pt-4 md:hidden">
              {!loading && (
                user ? (
                  <button
                    onClick={handleLogout}
                    className="w-full max-w-[260px] py-3 text-center text-[14px] font-bold uppercase text-white bg-[#1b1b1b] rounded-[4px]"
                  >
                    Выйти
                  </button>
                ) : (
                  <>
                    <Link href="/login" className="w-full max-w-[260px] py-3 text-center text-[14px] font-bold uppercase text-[#6a7282] rounded-[4px]" onClick={closeMenu}>
                      Войти
                    </Link>
                    <Link href="/register" className="w-full max-w-[260px] py-3 text-center text-[14px] font-bold uppercase text-white bg-[#6960C5] rounded-[4px]" onClick={closeMenu}>
                      Регистрация
                    </Link>
                  </>
                )
              )}
            </div>
          </div>

          {/* 3. Оң жақтағы батырмалар (Войти / Регистрация / Профиль) */}
          <div className="hidden md:flex items-center justify-end gap-5">
            {!loading && (
              <div className="flex items-center gap-[15px]">
                {user ? (
                  <>
                    <span className="text-[14px] font-bold text-[#1f1f1f] normal-case">
                      {user.displayName || user.email}
                    </span>
                    <button
                      onClick={handleLogout}
                      className="text-[14px] font-bold uppercase text-[#6a7282] bg-transparent hover:text-[#1f1f1f] hover:bg-[#6960C5] transition-all px-[18px] py-[10px] rounded-[4px]"
                    >
                      Выйти
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="text-[14px] font-bold uppercase text-[#6a7282] bg-transparent hover:text-[#1f1f1f] hover:bg-[#e9e7e7] transition-all px-[18px] py-[10px] rounded-[4px]">
                      Войти
                    </Link>
                    <Link href="/register" className="inline-flex items-center justify-center px-[18px] py-[10px] tracking-[1px] text-[14px] font-bold uppercase bg-[#6960C5] text-white rounded-[4px] hover:opacity-85 transition-opacity font-['Inter',sans-serif]">
                      Регистрация
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Бургер меню (Телефондар үшін) */}
          <button
            className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 absolute right-5 top-1/2 -translate-y-1/2 z-101"
            onClick={toggleMenu}
            aria-label="Открыть меню"
            aria-expanded={isMenuOpen}
          >
            <span className={`w-[25px] h-[2px] bg-[#1b1b1b] transition-all duration-300 ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
            <span className={`w-[25px] h-[2px] bg-[#1b1b1b] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-[25px] h-[2px] bg-[#1b1b1b] transition-all duration-300 ${isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
          </button>
        </nav>
      </div>

      {/* Фон (Оверлей) */}
      <div 
        className={`fixed inset-0 bg-black/35 transition-opacity duration-300 z-90 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      ></div>
    </header>
  );
}
