"use client";

import BreadCrumb from "@/components/BreadCrumb";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="container mx-auto rock:text-base text-center text-sm">
      <style jsx>{`
        #fb {
          background: #546ea6 url(/icons/fb.png) no-repeat 0 center;
        }
        #gg {
          background: #df5656 url(/icons/gg.png) no-repeat 0 center;
        }
      `}</style>
      <BreadCrumb />
      <h1 className="font-bold rock:text-xl text-lg">Đăng nhập bằng</h1>

      <div className="text-center mt-5">
        <button className="text-white indent-8 rounded-xl pr-3 mx-1" id="fb">
          Facebook
        </button>
        <button className="text-white indent-8 rounded-xl pr-3 mx-1" id="gg">
          Google
        </button>
      </div>

      <div className="w-full relative mt-10 mb-5 border-b border-b-[#dfdfdf]">
        <span className="absolute left-2/4 -translate-x-2/4 -top-3 rock:text-sm text-xs bg-white px-2 uppercase">
          Hoặc
        </span>
      </div>

      <section className="flex rock:flex-nowrap flex-wrap rock:gap-10 gap-7">
        <div className="w-full" id="login-form">
          <h1 className="text-center rock:text-lg text-base uppercase mb-3">
            Đăng nhập
          </h1>

          <div className="relative rock:mb-6 mb-3 form-group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <MailOutlined />
            </div>
            <input
              type="email"
              id="email-login"
              className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="Email của bạn"
            />
          </div>
          <div className="relative rock:mb-6 mb-3 form-group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <LockOutlined />
            </div>
            <input
              type="password"
              id="password-login"
              className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="Nhập mật khẩu"
            />
          </div>

          <button className="w-full p-2.5 border rounded-lg text-sm rock:hover:bg-[var(--blue)] rock:hover:text-white rock:duration-75 rock:delay-75 rock:ease-in-out">
            Đăng nhập
          </button>
        </div>

        <div className="w-full" id="reg-form">
          <h1 className="text-center rock:text-lg text-base uppercase mb-3">
            Đăng ký thành viên mới
          </h1>

          <div className="relative rock:mb-6 mb-3 form-group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <UserOutlined />
            </div>
            <input
              type="text"
              id="fullname-reg"
              className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="Họ và tên"
            />
          </div>
          <div className="relative rock:mb-6 mb-3 form-group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <MailOutlined />
            </div>
            <input
              type="email"
              id="email-reg"
              className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="Email"
            />
          </div>
          <div className="relative rock:mb-6 mb-3 form-group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <LockOutlined />
            </div>
            <input
              type="password"
              id="password-reg"
              className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="Mật khẩu"
            />
          </div>

          <button className="w-full p-2.5 border rounded-lg text-sm rock:hover:bg-[var(--blue)] rock:hover:text-white rock:duration-75 rock:delay-75 rock:ease-in-out">
            Đăng ký
          </button>
        </div>
      </section>
    </div>
  );
}
