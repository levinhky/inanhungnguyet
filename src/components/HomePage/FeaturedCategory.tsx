"use client";
import { getCategoryLink } from "@/utils/common";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  categories: [CategoryAttributes];
};

export default function CategoryList({ categories }: Props) {
  const [active, setActive] = useState(false);

  // const slides = Array.from({ length: 6 }).map(
  //   (el, index) => `Slide ${index + 1}`
  // );

  return (
    categories &&
    categories.length > 0 && (
      <section
        className="mt-11 relative bg-[#F0F5FF] px-3 rock:py-10 pt-5 pb-6 
    rock:before:absolute rock:before:top-0 rock:before:bottom-0 rock:before:right-full rock:before:bg-[#F0F5FF] rock:before:w-full rock:before:block
    rock:after:absolute rock:after:top-0 rock:after:bottom-0 rock:after:left-full rock:after:bg-[#F0F5FF] rock:after:w-full rock:after:block"
      >
        <h3 className="text-center rock:text-2xl text-base font-bold">Danh mục nổi bật</h3>

        <div
          className={`categories mt-6 rock:grid-cols-6 grid-cols-2 grid rock:gap-x-5 gap-x-3 ${
            active ? "pb-14" : "pb-0"
          } rock:pb-0 rock:gap-y-[2%] gap-y-[4%]`}
        >
          {categories.map((category, index) => (
            <Link
              href={getCategoryLink(category)}
              className={`item select-none rock:hover:shadow-xl bg-white p-3 border border-[#d9d9d9] rounded-xl 
            flex items-center justify-center flex-col ${active && "active"}`}
              key={category._id}
            >
              <h3 className="text-[#595959] text-center mb-3">{category.name}</h3>
              <Image
                className="mt-auto w-28 h-28 rounded-full"
                src={category.thumb}
                width={100}
                height={100}
                alt={category.name}
              />
            </Link>
          ))}
        </div>

        <button
          onClick={() => setActive(!active)}
          className="flex mx-auto capitalize text-[#096dd9] rock:hover:text-[var(--red)] font-bold mt-10 rock:hidden"
        >
          {active ? "Thu Gọn" : "Xem Thêm"}
        </button>
      </section>
    )
  );
}
