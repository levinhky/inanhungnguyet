import { Link } from "@/navigation";
import { handleSignOut } from "@/redux/features/authentication/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { UserOutlined } from "@ant-design/icons";
import React from "react";

type Props = {
  isUserLogged: Boolean;
};

function HeaderLinks({ isUserLogged }: Props) {
  const dispath = useAppDispatch();

  return (
    <>
      {!isUserLogged ? (
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
          <p className="rock:text-base ml-1 rock:ml-0 mt-[5px]">Đăng xuất</p>
        </button>
      )}
    </>
  );
}

export default HeaderLinks;
