'use client';

import Image from "next/image";
import { useState } from "react";

type Props = {};

export default function Header({}: Props) {
const [searchValue, setSearchValue] = useState('');

  return (
    <header>
      <div className="flex justify-between items-center">
        <div className="main-logo">
          <Image
            src={"/logo-nobg.svg"}
            alt="inanhungnguyetlogo"
            width={120}
            height={120}
          />
        </div>
        <div className="block-search">
          <div className="field-search">
            <input
              type="text"
              onInput={(e) => setSearchValue(e.currentTarget.value)}
              value={searchValue}
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0050b3] focus:ring-[#0050b3] block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Tìm sản phẩm mong muốn ..."
            />
          </div>
          <button className="action-search"></button>
        </div>
        <div className="links">
          <button className="login">
            <p>Đăng nhập</p>
          </button>
        </div>
      </div>
    </header>
  );
}
