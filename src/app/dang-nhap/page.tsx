"use client";

import BreadCrumb from "@/components/BreadCrumb";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
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

      <div className="w-full relative my-10 border-b border-b-[#dfdfdf]">
        <span className="absolute left-2/4 -translate-x-2/4 -top-3 rock:text-sm text-xs bg-white px-2 uppercase">
          Hoặc
        </span>
      </div>

      <section className="flex gap-10">
        <div className="w-full">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <MailOutlined />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
            />
          </div>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <LockOutlined />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
            />
          </div>
        </div>

        <div className="w-full">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <MailOutlined />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
            />
          </div>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <LockOutlined />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
