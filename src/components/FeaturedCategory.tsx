"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function CategoryList({}: Props) {
  const slides = Array.from({ length: 6 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <section
      className="mt-11 relative bg-[#F0F5FF] px-3 rock:py-10 pt-5 pb-16 
    rock:before:absolute rock:before:top-0 rock:before:bottom-0 rock:before:right-full rock:before:bg-[#F0F5FF] rock:before:w-full rock:before:block
    rock:after:absolute rock:after:top-0 rock:after:bottom-0 rock:after:left-full rock:after:bg-[#F0F5FF] rock:after:w-full rock:after:block"
    >
      <h3 className="text-center rock:text-2xl text-base font-bold">
        Danh mục phổ biến
      </h3>

      <div className="categories mt-6 rock:grid-cols-6 grid-cols-2 grid rock:gap-x-5 gap-x-3 rock:gap-y-[2%] gap-y-[4%]">
        {slides.map((item, index) => (
          <Link
            href={"/"}
            className="item select-none rock:hover:shadow-xl bg-white p-3 border border-[#d9d9d9] rounded-xl flex items-center justify-center flex-col"
            key={index}
          >
            <h1 className="text-[#595959] text-center mb-3">Ly nhựa</h1>
            <Image src="/lynhua.png" width={160} height={160} alt="" />
          </Link>
        ))}
      </div>
    </section>
  );
}
