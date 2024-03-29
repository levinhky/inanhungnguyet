"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

type Props = {
  products: [ProductAttributes];
};

export default function FeaturedProduct({ products }: Props) {
  // const slides = Array.from({ length: 12 }).map(
  //   (el, index) => `Slide ${index + 1}`
  // );

  const renderSeeMoreBtn = () => {
    return (
      <div className="flex justify-between items-center">
        <h1 className="font-bold rock:text-2xl text-lg capitalize">
          Sản phẩm nổi bật
        </h1>
        <Link
          href={"/danh-sach-san-pham?page=1&limit=8&sort=name-asc"}
          className="text-[var(--blue)] capitalize font-bold rock:text-base text-lg rock:hover:text-[var(--red)]"
        >
          Xem Thêm
        </Link>
      </div>
    );
  };

  const renderDesktopView = () => {
    return (
      <div className="mt-7 sm:hidden xs:hidden">
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          modules={[Navigation]}
          navigation
        >
          {products.length > 0 &&
            products.map((product, index) => {
              return (
                product.attributes.display && (
                  <SwiperSlide key={product._id} virtualIndex={index}>
                    <div className="product flex flex-col h-[350px]">
                      <div className="thumb flex justify-center mt-auto">
                        <Link href={`/${product.slug}`}>
                          <img
                            src={product.thumbs[0]}
                            className="select-none rounded-lg w-36"
                            alt={product.name}
                          />
                        </Link>
                      </div>
                      <div className="info px-5 py-3 mt-auto h-28">
                        <h2 className="contact uppercase text-[var(--blue)] font-bold my-2 py-1 border-b border-[var(--gray)]">
                          Liên hệ chúng tôi...
                        </h2>
                        <h3 className="name font-normal line-clamp-2">
                          <Link href={`/${product.slug}`}>{product.name}</Link>
                        </h3>
                        <h3 className="sku uppercase text-[var(--gray-text)] text-sm">
                          SKU: {product.sku}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              );
            })}
        </Swiper>
      </div>
    );
  };

  const renderMobileView = () => {
    return (
      <div className="mt-7 rock:hidden">
        <Swiper spaceBetween={15} slidesPerView={2}>
          {products.length > 0 &&
            products.map((product, index) => {
              return (
                product.attributes.display && (
                  <SwiperSlide key={product._id} virtualIndex={index}>
                    <div className="product flex flex-col h-[350px]">
                      <div className="thumb mt-auto flex justify-center">
                        <Link href={`/${product.slug}`}>
                          <img
                            src={product.thumbs[0]}
                            className="select-none rounded-lg h-[170px]"
                            alt={product.name}
                          />
                        </Link>
                      </div>
                      <div className="info px-0 py-2 mt-auto">
                        <h2 className="contact uppercase text-sm text-[var(--blue)] font-bold my-2 py-1 border-b border-[var(--gray)]">
                          Liên hệ chúng tôi...
                        </h2>
                        <h3 className="name font-normal text-sm rock:line-clamp-2 line-clamp-1 text-ellipsis">
                          <Link href={`/${product.slug}`}>{product.name}</Link>
                        </h3>
                        <h3 className="sku uppercase text-[var(--gray-text)] text-xs">
                          SKU: {product.sku}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              );
            })}
        </Swiper>
      </div>
    );
  };

  return (
    products.length > 0 && (
      <div className="mt-[70px]">
        {renderSeeMoreBtn()}
        {renderDesktopView()}
        {renderMobileView()}
      </div>
    )
  );
}
