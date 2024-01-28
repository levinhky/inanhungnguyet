"use client";

import { HeartOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Link } from "@/navigation";
import { useState, useEffect } from "react";
import Tippy from "@tippyjs/react/headless";
import PopperWrapper from "../Search/PopperWrapper";
import MobilePopperWrapper from "../Search/SearchModal";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import {
  getUserInfo,
  handleSignOut,
} from "@/redux/features/authentication/authSlice";
import { auth } from "@/data/firebase";
import useDebounce from "@/assets/libs/hooks";
import HeaderLinks from "./HeaderLinks";

type Props = {};

export default function Header({}: Props) {
  const [searchValue, setSearchValue] = useState("");
  const [isActiveSearchModal, setIsActiveSearchModal] = useState(false);
  const [isUserLogged, setIsUserLogged] = useState(false);
  const dispath = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispath(
          getUserInfo({
            displayName: user.displayName ?? "",
            email: user.email ?? "",
            emailVerified: user.emailVerified ?? false,
            isAnonymous: user.isAnonymous ?? false,
            phoneNumber: user.phoneNumber ?? "",
            photoURL: user.photoURL ?? "",
            uid: user.uid,
          })
        );
        setIsUserLogged(true);
      } else {
        setIsUserLogged(false);
      }
    });
  }, []);

  const searchInputClass =
    "px-5 py-2 h-[44px] bg-[var(--gray-light)] border shadow-sm border-slate-300 placeholder-slate-400 \
     focus:outline-none focus:border-[var(--blue)] block w-full rounded-full sm:text-sm";
  const searchIconClass =
    "action-search min-w-[80px] w-[60px] absolute top-0 bg-[var(--blue)] h-[44px] right-0 rounded-full";
  const debounceValue = useDebounce(searchValue, 300);

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

        <Tippy
          interactive={true}
          visible={searchValue.length > 0}
          render={(attrs) => (
            <PopperWrapper
              setSearchValue={setSearchValue}
              searchValue={debounceValue}
              {...attrs}
            />
          )}
        >
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
              <SearchOutlined className="text-white text-xl" />
            </button>
          </div>
        </Tippy>

        <div className="links flex items-center">
          <button
            onClick={() => setIsActiveSearchModal(true)}
            title="Tìm kiếm"
            className="rock:hidden text-2xl"
          >
            <SearchOutlined />
          </button>
          <button className={`${!isUserLogged ? "hidden" : ""} text-2xl ml-3`}>
            <HeartOutlined />
          </button>
          <HeaderLinks isUserLogged={isUserLogged} />
        </div>
      </div>

      <MobilePopperWrapper
        isActiveSearchModal={isActiveSearchModal}
        setIsActiveSearchModal={setIsActiveSearchModal}
      />
    </header>
  );
}