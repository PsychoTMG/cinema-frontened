'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
import Logo from "./Logo";
import BurgerIcon from "./BurgerIcon";
import NavItem from "./NavItem";

const navLinks = [
  { name: 'Главная', href: '/' },
  { name: 'Каталог', href: '/catalog' },
  { name: 'Моё', href: '/my' }
];

const Header = () => {
  const [activeBurger, setActiveBurger] = useState(false);

  useEffect(() => {
    document.body.style.overflow = activeBurger ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeBurger]);

  const closeMenu = () => setActiveBurger(false);

  return (
    <header className="relative flex items-center justify-between h-14 px-3 bg-black z-50">

      {/* Слева: Профиль */}
      <div className={`flex items-center gap-2 text-ui-13 font-medium transition-opacity duration-500 
        ${activeBurger ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Image src='/profile.png' width={32} height={32} alt="profile" className="rounded-full" />
        <span>Войти</span>
      </div>

      {/* Центр: Лого */}
      <Logo />

      {/* Справа: Поиск и Бургер */}
      <div className="flex gap-5 items-center">
        <button className={`transition-opacity duration-500 ${activeBurger ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <Image src='/icons/search.svg' width={24} height={24} alt="search" />
        </button>

        <button onClick={() => setActiveBurger(!activeBurger)} className="z-50">
          <BurgerIcon active={activeBurger} />
        </button>
      </div>

      {/* Выпадающее меню */}
      <nav className={`fixed inset-0 top-14 bg-black transition-all duration-300 z-50
        ${activeBurger ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}`}>
        <ul className="flex flex-col gap-3 p-6 text-[20px]">
          {navLinks.map((link) => (
            <NavItem key={link.href} {...link} onClick={closeMenu} />
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;