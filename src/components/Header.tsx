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
            src={"/logo_nobg.svg"}
            alt="inanhungnguyetlogo"
            width={150}
            height={150}
          />
        </div>
        <div className="block-search h-[40px] relative">
          <div className="field-search w-[500px]">
            <input
              type="text"
              onInput={(e) => setSearchValue(e.currentTarget.value)}
              value={searchValue}
              className="px-3 py-2 bg-[#F0F2F5] border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0050b3] block w-full rounded-full sm:text-sm"
              placeholder="Tìm sản phẩm mong muốn ..."
            />
          </div>
          <button className="action-search absolute top-[5px] right-[15px]">
          <Image
            src={"/icons/search.svg"}
            alt="inanhungnguyetlogo"
            width={25}
            height={25}
          />
          </button>
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
