"use client";

import { HeartOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useState, useEffect, KeyboardEvent, useCallback, memo } from "react";
import Tippy from "@tippyjs/react/headless";
import PopperWrapper from "../Search/PopperWrapper";
import MobilePopperWrapper from "../Search/SearchModalMobile";
import { onAuthStateChanged } from "firebase/auth";
import {
  setUserInfo,
  handleSignOut,
} from "@/redux/features/authentication/authSlice";
import { auth } from "@/data/firebase";
import useDebounce from "@/assets/libs/hooks/useDebounce";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};

const Header = ({}: Props) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchValueMobile, setSearchValueMobile] = useState("");
  const [isActiveSearchModal, setIsActiveSearchModal] = useState(false);
  const [isUserLogged, setIsUserLogged] = useState(false);
  const dispath = useAppDispatch();
  const route = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispath(
          setUserInfo({
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
  const debounceValue = useDebounce(searchValue, 150);

  const renderHeaderLinks = () => {
    return !isUserLogged ? (
      <Link href={"/dang-nhap"}>
        <button className="login flex items-center justify-center rock:hover:text-[var(--blue)]">
          <UserOutlined className="rock:text-xl rock:mr-[5px] text-2xl ml-3" />
          <p className="rock:text-base rock:mt-[5px] rock:block hidden">
            Đăng ký / Đăng nhập
          </p>
        </button>
      </Link>
    ) : (
      <button
        onClick={() => dispath(handleSignOut())}
        className="login flex items-center justify-center rock:hover:text-[var(--blue)]"
      >
        <UserOutlined className="rock:text-xl rock:mr-[5px] text-2xl ml-3" />
        <p className="rock:text-base ml-1 rock:ml-0 mt-[5px]">Đăng Xuất</p>
      </button>
    );
  };

  const handlePushSearch = useCallback((value: string) => {
    route.push("/search/" + value);
    setSearchValue("");
    setSearchValueMobile("");
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>, value: string) => {
      if (e.nativeEvent.key === "Enter") {
        handlePushSearch(value);
        setIsActiveSearchModal(false);
      }
    },
    []
  );

  return (
    <header className="mt-[-30px]">
      <div className="flex justify-between items-center">
        <div className="main-logo cursor-pointer" title="Bao Bì Hùng Nguyệt">
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              alt="inanhungnguyetlogo"
              width={150}
              height={150}
              priority={true}
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
              searchHistoryTitle={"Lịch sử tìm kiếm"}
              searchHistoryEmpty={"Lịch sử tìm kiếm rỗng"}
              products={"Sản Phẩm"}
              noResult={"Không tìm thấy kết quả"}
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
                placeholder={"Tìm sản phẩm mong muốn ..."}
                onKeyDown={(e) => handleKeyDown(e, debounceValue)}
              />
            </div>
            <button
              title={"Tìm Kiếm"}
              onClick={() => handlePushSearch(debounceValue)}
              className={searchIconClass}
            >
              <SearchOutlined className="text-white text-xl" />
            </button>
          </div>
        </Tippy>

        <div className="links flex items-center">
          <button
            onClick={() => setIsActiveSearchModal(true)}
            title={"Tìm Kiếm"}
            className="rock:hidden text-2xl"
          >
            <SearchOutlined />
          </button>
          <button className={`${!isUserLogged ? "hidden" : ""} text-2xl ml-3`}>
            <HeartOutlined />
          </button>

          {renderHeaderLinks()}
        </div>
      </div>

      <MobilePopperWrapper
        isActiveSearchModal={isActiveSearchModal}
        setIsActiveSearchModal={setIsActiveSearchModal}
        handleKeyDown={handleKeyDown}
        handlePushSearch={handlePushSearch}
        searchValue={searchValueMobile}
        setSearchValue={setSearchValueMobile}
      />
    </header>
  );
};

export default memo(Header);
