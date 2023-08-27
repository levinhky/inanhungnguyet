'use client';

import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function CategoryList({}: Props) {
  const slides = Array.from({ length: 6 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <section
      className="mt-11 relative bg-[#F0F5FF] px-3 py-10
    before:absolute before:top-0 before:bottom-0 before:right-full before:bg-[#F0F5FF] before:w-full before:block
    after:absolute after:top-0 after:bottom-0 after:left-full after:bg-[#F0F5FF] after:w-full after:block"
    >
      <h3 className="text-center text-2xl font-bold">Danh mục phổ biến</h3>

      <div className="categories mt-6 grid-cols-6 grid gap-x-5 gap-y-[2%]">
        {slides.map((item, index) => (
          <Link href={'/'} className="item select-none hover:shadow-xl bg-white p-3 border border-[#d9d9d9] rounded-xl flex items-center justify-center flex-col" key={index}>
            <h1 className="text-[#595959] text-center mb-3">Ly nhựa</h1>
            <Image src="/lynhua.png" width={160} height={160} alt="" />
          </Link>
        ))}
      </div>
    </section>
  );
}
