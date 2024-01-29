"use client";

import { menuItems } from "@/data/arrays";
import { Link } from "@/navigation";
import { useState } from "react";
import MenuMobile from "./MenuMobile";
import SwitcherLanguage from "./SwitcherLanguage";
import { useTranslations } from "next-intl";

type Props = {};

export default function NavBar({}: Props) {
  const [isMenuOpen, setMenuIsOpen] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const genericHamburgerLine = `h-[3px] w-[16px] mb-[2px] mt-[1px] runded-full bg-[var(--white)] transition ease transform duration-300`;
  const liClassName =
    "uppercase items-center h-full flex hover:bg-[var(--dark-blue)] cursor-pointer text-[var(--white)]";

  const handleMenuMobile = (isActiveMenu: boolean) => {
    setMenuIsOpen(!isMenuOpen);
    setIsActiveMenu(isActiveMenu);
  };
  const t = useTranslations("");

  const renderHamburgerMenu = () => {
    return (
      <div className="rock:hidden">
        <div className="uppercase text-white flex items-center">
          <button className="flex flex-col justify-center items-center group" onClick={() => handleMenuMobile(true)}>
            <div className={`${genericHamburgerLine} ${isMenuOpen ? "rotate-45 translate-y-[7px] " : ""}`} />
            <div className={`${genericHamburgerLine} ${isMenuOpen ? "opacity-0" : ""}`} />
            <div className={`${genericHamburgerLine} ${isMenuOpen ? "-rotate-45 -translate-y-[9px] " : ""}`} />
          </button>
          <b className="ml-2">{t('categories')}</b>
        </div>
      </div>
    );
  };

  const renderNavItems = () => {
    return (
      <ul className="rock:flex h-full hidden">
        {menuItems.map((item) => (
          <li className={liClassName} key={item.id}>
            <Link className="px-[20px] h-full flex items-center" href={item.url}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <nav className="h-[44px] bg-[var(--blue)] main-nav mt-[-25px]">
        <div className="container mx-auto flex justify-between items-center h-full">
          {renderNavItems()}
          {renderHamburgerMenu()}
          <SwitcherLanguage />
        </div>
      </nav>

      <MenuMobile isActiveMenu={isActiveMenu} handleMenuMobile={handleMenuMobile} />
    </>
  );
}
