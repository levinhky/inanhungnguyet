"use client";

import { menuItems } from "@/data/arrays";
import { CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";

type Props = {};

export default function NavBar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const genericHamburgerLine = `h-[3px] w-[16px] mb-[2px] mt-[1px] rounded-full bg-[var(--white)] transition ease transform duration-300`;
  const liClassName =
    "uppercase items-center h-full flex hover:bg-[var(--dark-blue)] cursor-pointer text-[var(--white)]";
  const liClassNameMobile =
    "text-sm uppercase text-[var(--blue)] font-semibold py-2.5 px-1";

  const handleMenuMobile = (isActiveMenu: boolean) => {
    setIsOpen(!isOpen);
    setIsActiveMenu(isActiveMenu);
  };

  return (
    <>
      <style jsx>{`
        #menu-mobile {
          transition: left 0.25s ease-in-out, opacity 0.25s ease-in-out;
        }
      `}</style>
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

      <div
        id="menu-mobile"
        className={`rock:hidden w-screen h-screen
      fixed top-0 right-auto z-50 bg-white px-[15px] py-[20px] 
      ${
        !isActiveMenu
          ? "-left-full opacity-50 invisible"
          : "left-0 opacity-100 visible"
      }`}
      >
        <button
          onClick={() => handleMenuMobile(false)}
          className="w-[40px] h-[40px] bg-[var(--blue)] text-white text-lg rounded-full flex items-center justify-center"
        >
          <CloseOutlined />
        </button>
        <ul className="p-2.5 border-2 border-[var(--gray-light)] rounded mt-3">
          {menuItems.map((item) => (
            <li className={liClassNameMobile} key={item.id}>
              <Link onClick={() => handleMenuMobile(false)} href={item.url}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
