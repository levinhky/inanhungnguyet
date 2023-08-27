"use client";

import { UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useState } from "react";

type Props = {};

export default function Header({}: Props) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <header className="mt-[-30px]">
      <div className="flex justify-between items-center">
        <div className="main-logo cursor-pointer" title="In Ấn Hùng Nguyệt">
          <Image
            src={"/logo.svg"}
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
              className="px-5 py-2 h-[44px] bg-[var(--gray-light)] border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[var(--blue)] block w-full rounded-full sm:text-sm"
              placeholder="Tìm sản phẩm mong muốn ..."
            />
          </div>
          <button
            title="Tìm kiếm"
            className="action-search min-w-[80px] w-[60px] absolute top-0 bg-[var(--blue)] h-[44px] right-0 rounded-full"
          >
            <Image
              className="mx-auto"
              src={"/icons/search.svg"}
              alt="inanhungnguyetlogo"
              width={25}
              height={25}
            />
          </button>
        </div>
        <div className="links">
          <button className="login flex items-center justify-center hover:text-[var(--blue)]">
            <UserOutlined className="text-xl mr-[5px]"/>
            <p className="text-base mt-[5px]">Đăng nhập</p>
          </button>
        </div>
      </div>
    </header>
  );
}
