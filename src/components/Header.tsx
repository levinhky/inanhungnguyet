"use client";

import { HeartOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {};

export default function Header({}: Props) {
  const [searchValue, setSearchValue] = useState("");
  const searchInputClass =
    "px-5 py-2 h-[44px] bg-[var(--gray-light)] border shadow-sm border-slate-300 placeholder-slate-400 \
     focus:outline-none focus:border-[var(--blue)] block w-full rounded-full sm:text-sm";
  const searchIconClass =
    "action-search min-w-[80px] w-[60px] absolute top-0 bg-[var(--blue)] h-[44px] right-0 rounded-full";

  return (
    <header className="mt-[-30px]">
      <div className="flex justify-between items-center">
        <div className="main-logo cursor-pointer" title="In Ấn Hùng Nguyệt">
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              alt="inanhungnguyetlogo"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <div className="block-search h-[40px] relative hidden rock:block">
          <div className="field-search w-[500px]">
            <input
              type="text"
              onInput={(e) => setSearchValue(e.currentTarget.value)}
              value={searchValue}
              className={searchInputClass}
              placeholder="Tìm sản phẩm mong muốn ..."
            />
          </div>
          <button title="Tìm kiếm" className={searchIconClass}>
          <SearchOutlined className="text-white text-2xl" />
          </button>
        </div>
        <div className="links flex items-center">
          <button title="Tìm kiếm" className="rock:hidden text-2xl">
            <SearchOutlined />
          </button>
          <button className="rock:hidden text-2xl ml-3">
            <HeartOutlined />
          </button>
          <button className="login flex items-center justify-center rock:hover:text-[var(--blue)]">
            <UserOutlined className="rock:text-xl rock:mr-[5px] text-2xl ml-3" />
            <p className="rock:text-base rock:mt-[5px] rock:block hidden">
              Đăng nhập
            </p>
          </button>
        </div>
      </div>
    </header>
  );
}
