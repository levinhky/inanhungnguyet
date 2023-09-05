"use client";

import { menuItems } from "@/data/arrays";
import Link from "next/link";
import { useState } from "react";
import MenuMobile from "./MenuMobile";

type Props = {};

export default function NavBar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const genericHamburgerLine = `h-[3px] w-[16px] mb-[2px] mt-[1px] rounded-full bg-[var(--white)] transition ease transform duration-300`;
  const liClassName =
    "uppercase items-center h-full flex hover:bg-[var(--dark-blue)] cursor-pointer text-[var(--white)]";

  const handleMenuMobile = (isActiveMenu: boolean) => {
    setIsOpen(!isOpen);
    setIsActiveMenu(isActiveMenu);
  };

  return (
    <>
      <nav className="h-[44px] bg-[var(--blue)] main-nav mt-[-25px]">
        <div className="container mx-auto flex justify-between items-center h-full">
          <ul className="rock:flex h-full hidden">
            {menuItems.map((item) => (
              <li className={liClassName} key={item.id}>
                <Link
                  className="px-[20px] h-full flex items-center"
                  href={item.url}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="rock:hidden">
            <div className="uppercase text-white flex items-center">
              <button
                className="flex flex-col justify-center items-center group"
                onClick={() => handleMenuMobile(true)}
              >
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen ? "rotate-45 translate-y-[7px] " : ""
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen ? "-rotate-45 -translate-y-[9px] " : ""
                  }`}
                />
              </button>
              <b className="ml-2">Danh mục</b>
            </div>
          </div>

          <div className="switcher-language cursor-pointer">
            <div className="text-[var(--white)] language flex items-center">
              VIE
            </div>
          </div>
        </div>
      </nav>

      <MenuMobile isActiveMenu={isActiveMenu} handleMenuMobile={handleMenuMobile} />
    </>
  );
}
