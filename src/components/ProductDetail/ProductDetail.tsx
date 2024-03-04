"use client";

import BreadCrumb from "@/components/BreadCrumb";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Loading from "@/components/Loading";
import Link from "next/link";

type Props = {
  slug: string;
  product: ProductAttributes;
  slugName: string;
};

export default function ProductDetail({ slug, product, slugName }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (product._id !== "") {
      setIsLoading(false);
    }
  }, [slug]);

  const renderAttribute = (label: string, value: string) => {
    return (
      value !== "" && (
        <li>
          <b>{label}:</b> {value}
        </li>
      )
    );
  };

  const { capacity, uses, color, characteristics, design } = product.attributes;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container mx-auto">
          <BreadCrumb slug={slug} slugName={slugName} />
          <section id="content">
            <div className="flex flex-wrap rock:flex-nowrap">
              <div className="images rock:w-1/2 rock:mr-10">
                <Carousel className="rock:w-[500px]" swipeable={false} showStatus={false} thumbWidth={50}>
                  {product.thumbs &&
                    product.thumbs.map((thumb, index) => (
                      <div key={thumb}>
                        <img src={thumb} className="select-none rounded-lg" alt={thumb} />
                      </div>
                    ))}
                </Carousel>
              </div>

              <div className="info text-center rock:text-left w-full flex flex-col items-center rock:block">
                <h1 className="font-bold text-2xl rock:my-5 mb-3">{product.name}</h1>

                <p className="rock:mb-5 mb-3">
                  <span className="font-bold">Trạng Thái :</span> {product.status === true ? "Còn Hàng" : "Hết Hàng"}
                </p>

                <h2 className="text-[var(--gray-text)] text-sm rock:mb-5 mb-3">SKU: {product.sku}</h2>
                <Link
                  target="_blank"
                  rel="nofollow"
                  href={"https://zalo.me/0867673358"}
                  className="text-white bg-[var(--blue-text)] rock:hover:bg-[var(--blue)] rounded-full
                  flex items-center justify-center w-fit
                  text-base py-2 px-5 h-12 min-w-[200px]"
                >
                  <p>Liên Hệ Chúng Tôi...</p>
                </Link>
              </div>
            </div>

            <div className="additonal-infomation rock:w-1/2">
              <h3 className="rock:text-center text-left font-bold text-base pb-5 rock:pt-0 pt-7 border-b-[3px] border-b-[var(--blue)]">
                Thông Tin Thêm
              </h3>

              <ul className="info mt-5 list-disc list-inside">
                {renderAttribute("Dung tích", capacity)}
                {renderAttribute("Màu Sắc", color)}
                {renderAttribute("Đặc Tính", characteristics)}
                {renderAttribute("Mẫu Mã", design)}
                {renderAttribute("Công Dụng", uses)}
              </ul>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
