'use client';

import Link from "next/link";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <nav className="h-[44px] bg-[var(--blue)] main-nav mt-[-25px]">
      <div className="container mx-auto flex justify-between items-center h-full">
      <ul className="flex h-full">
        <li className="uppercase items-center h-full flex hover:bg-[var(--dark-blue)] cursor-pointer px-[20px] text-[var(--white)]">
          <Link href={'/'}> Giới thiệu </Link>
        </li>
        <li className="uppercase items-center h-full flex hover:bg-[var(--dark-blue)] cursor-pointer px-[20px] text-[var(--white)]">
          <Link href={'/'}>Sản phẩm</Link>
        </li>
        <li className="uppercase items-center h-full flex hover:bg-[var(--dark-blue)] cursor-pointer px-[20px] text-[var(--white)]">
          <Link href={'/linh'}>Liên hệ</Link>
        </li>
      </ul>

      <div className="switcher-language cursor-pointer">
        <div className="text-[var(--white)] language flex items-center">VIE</div>
      </div>
      </div>

    </nav>
  );
}
