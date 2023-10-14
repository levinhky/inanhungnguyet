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
        <div className="flex">
          <div className="images mr-10 w-[600px]">
            <Carousel showStatus={false}>
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

          <div className="info">
            <h1 className="font-bold text-2xl my-5">Ly giấy King</h1>

            <p className="mb-5"><span className="font-bold">Tình trạng :</span> Còn hàng</p>

            <h2 className="text-[var(--gray-text)] text-sm mb-5">
              SKU: 250702
            </h2>

            <button className="text-white bg-[var(--blue-text)] rock:hover:bg-[var(--blue)] rounded-full text-base py-2 px-5 h-12 min-w-[200px]">
              Nhận báo giá
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
