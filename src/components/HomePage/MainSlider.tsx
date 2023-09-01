"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {};

export default function MainSlider({}: Props) {
  const slides = Array.from({ length: 3 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <div>
      <div className="sm:hidden xs:hidden">
      <Swiper
        spaceBetween={15}
        slidesPerView={1}
        modules={[Navigation, Pagination, Autoplay]}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        id="main-slider"
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            <img src="/slider1.png" className="w-full h-[400px]" alt="" />
            <div className="banner-container absolute bottom-[-30px] right-[20%]
             w-[320px] h-[270px] max-h-[80%] bg-[var(--red)] pt-[30px] px-[24px]">
              <h1 className="title text-[var(--white)] text-lg font-bold mb-3">
                Sáng Tạo và Màu Sắc Trên Ly Nhựa và Bao Bì In ấn
              </h1>
              <p className="desc text-[var(--white)]">
                Khám phá sự sáng tạo và màu sắc độc đáo trên các sản phẩm ly
                nhựa và bao bì in ấn. Tạo điểm nhấn cho thương hiệu của bạn với
                những hình ảnh và thiết kế sắc nét trên bề mặt sản phẩm.
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>

      <div className="rock:hidden">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        id="main-slider"
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            <img src="/slider2.png" className="w-full h-[400px]  min-h-[320px] object-cover" alt="" />
            <div className="banner-container bg-[var(--red)] py-[30px] px-[24px]">
              <h1 className="title text-[var(--white)] text-2xl font-bold mb-3">
                Sáng Tạo và Màu Sắc Trên Ly Nhựa và Bao Bì In ấn
              </h1>
              <p className="desc text- text-[var(--white)] line-clamp-3">
                Khám phá sự sáng tạo và màu sắc độc đáo trên các sản phẩm ly
                nhựa và bao bì in ấn. Tạo điểm nhấn cho thương hiệu của bạn với
                những hình ảnh và thiết kế sắc nét trên bề mặt sản phẩm.
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
}
