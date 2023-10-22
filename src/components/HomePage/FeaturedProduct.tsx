"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type Props = {
  products: [ProductAttributes];
};

export default function FeaturedProduct({ products }: Props) {
  const slides = Array.from({ length: 12 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    products.length > 0 && (
      <div className="mt-[70px]">
        <div className="flex justify-between items-center">
          <h1 className="font-bold rock:text-2xl text-lg capitalize">
            Sản phẩm nổi bật
          </h1>
          <Link
            href={"/"}
            className="text-[var(--blue)] capitalize font-bold rock:text-base text-lg rock:hover:text-[var(--red)]"
          >
            Xem thêm
          </Link>
        </div>

        <div className="mt-7 sm:hidden xs:hidden">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            modules={[Navigation]}
            navigation
          >
            {products.length > 0 &&
              products.map((product, index) => (
                <SwiperSlide key={product._id} virtualIndex={index}>
                  <div className="product">
                    <div className="thumb">
                      <Link href={product.slug}>
                        <img
                          src={product.thumbs[0]}
                          className="select-none rounded-lg"
                          alt={product.name}
                        />
                      </Link>
                    </div>
                    <div className="info px-5 py-3">
                      <h2 className="contact uppercase text-[var(--blue)] font-bold my-2 py-1 border-b border-[var(--gray)]">
                        liên hệ chúng tôi...
                      </h2>
                      <h1 className="name font-normal line-clamp-2">
                        <Link href={"/jennie"}>{product.name}</Link>
                      </h1>
                      <h3 className="sku uppercase text-[var(--gray-text)] text-sm">
                        SKU: {product.sku}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className="mt-7 rock:hidden">
          <Swiper spaceBetween={15} slidesPerView={2}>
            {products.length > 0 &&
              products.map((product, index) => (
                <SwiperSlide key={product._id} virtualIndex={index}>
                  <div className="product">
                    <div className="thumb">
                      <Link href={product.slug}>
                        <img
                          src={product.thumbs[0]}
                          className="select-none rounded-lg"
                          alt={product.name}
                        />
                      </Link>
                    </div>
                    <div className="info px-0 py-2">
                      <h2 className="contact uppercase text-sm text-[var(--blue)] font-bold my-2 py-1 border-b border-[var(--gray)]">
                        liên hệ chúng tôi...
                      </h2>
                      <h1 className="name font-normal text-sm line-clamp-2">
                        <Link href={"/jennie"}>{product.name}</Link>
                      </h1>
                      <h3 className="sku uppercase text-[var(--gray-text)] text-xs">
                        SKU: {product.sku}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    )
  );
}
