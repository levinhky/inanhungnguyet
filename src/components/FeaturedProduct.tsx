"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type Props = {};

export default function FeaturedProduct({}: Props) {
  const slides = Array.from({ length: 12 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <div className="mt-[70px]">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl capitalize">Sản phẩm nổi bật</h1>
        <Link
          href={"/"}
          className="text-[var(--blue)] capitalize font-bold hover:text-[var(--red)]"
        >
          Xem thêm
        </Link>
      </div>

      <div className="mt-7">
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          modules={[Navigation]}
          navigation
        >
          {slides.map((slideContent, index) => (
            <SwiperSlide key={slideContent} virtualIndex={index}>
              <div className="product">
                <div className="thumb">
                <Link href={"/"}>
                  <img src="/logommvn.png" className="select-none" alt="" />
                </Link>
                </div>
              <div className="info px-5 py-3">
                <h2 className="contact uppercase text-[var(--blue)] font-bold my-2 py-1 border-b border-[var(--gray)]">liên hệ chúng tôi...</h2>
                <h1 className="name font-normal line-clamp-2"><Link href={'/'}>Ly nhựa đáy bầu 500ml</Link></h1>
                <h3 className="sku uppercase text-[var(--gray-text)] text-sm">SKU: 250702</h3>
              </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
