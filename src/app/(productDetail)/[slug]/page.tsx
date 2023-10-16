"use client";

import BreadCrumb from "@/components/BreadCrumb";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

type Props = {
  params: {
    slug: string;
  };
};

export default function page({ params }: Props) {
  return (
    <div className="container mx-auto">
      <BreadCrumb slug={params.slug} />
      <section id="content">
        <div className="flex flex-wrap rock:flex-nowrap">
          <div className="images rock:w-1/2 rock:mr-10">
            <Carousel className="rock:w-[600px]" showStatus={false}>
              <div>
                <img
                  src="/lynhua1.png"
                  className="select-none rounded-lg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="/lynhua1.png"
                  className="select-none rounded-lg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="/lynhua1.png"
                  className="select-none rounded-lg"
                  alt=""
                />
              </div>
            </Carousel>
          </div>

          <div className="info text-center rock:text-left w-full">
            <h1 className="font-bold text-2xl rock:my-5 mb-3">Ly giấy King</h1>

            <p className="rock:mb-5 mb-3"><span className="font-bold">Tình trạng :</span> Còn hàng</p>

            <h2 className="text-[var(--gray-text)] text-sm rock:mb-5 mb-3">
              SKU: 250702
            </h2>

            <button className="text-white bg-[var(--blue-text)] rock:hover:bg-[var(--blue)] rounded-full text-base py-2 px-5 h-12 min-w-[200px]">
              Nhận báo giá
            </button>
          </div>
        </div>

        <div className="additonal-infomation rock:w-1/2">
              <h3 className="rock:text-center text-left font-bold text-base pb-5 rock:pt-0 pt-7 border-b-[3px] border-b-[var(--blue)]">Thông tin thêm</h3>

              <ul className="info mt-5 list-disc list-inside">
                  <li><b>Dung tích:</b> 360ml </li>
                  <li><b>Màu sắc:</b> Ly trong, bóng & sáng</li>
                  <li><b>Đặc tính:</b> Không chịu nhiệt chỉ có thể dùng nắp cầu hoặc nắp cầu</li>
                  <li><b>Mẫu mã:</b> Ly đáy bầu là mắt, dung tích nhỏ rất xinh xắn và dễ thương</li>
                  <li><b>Công dụng:</b> Đựng trà sữa size S (cỡ nhỏ), đựng cafe take away, đựng trà trái cây, nước ép và sinh tố, đá xay </li>
              </ul>
            </div>
      </section>
    </div>
  );
}
