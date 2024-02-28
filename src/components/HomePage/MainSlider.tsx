"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getList } from "@/services/hooks/useSlide";
import { useEffect, useState } from "react";

type Props = {};

export default function MainSlider({}: Props) {
  const [slides, setSlides] = useState<SlideAttributes[]>([]);

  useEffect(() => {
    const fetchSlides = async () => {
      const data = await getList();
      setSlides(data);
    };

    fetchSlides();
  }, []);

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
          {slides.map((slide, index) => {
            return (
              slide.display && (
                <SwiperSlide key={slide._id} virtualIndex={index}>
                  <img src={slide.thumb} className="w-full h-[400px]" alt={slide.title} />
                  <div
                    className="banner-container absolute bottom-[-30px] right-[22%] top-[230px]
               w-[320px] h-auto max-h-[80%] bg-[var(--red)] pt-[20px] px-[24px]"
                  >
                    <h5 className="title text-[var(--white)] text-lg font-bold mb-3">{slide.title}</h5>
                    <p className="desc text-[var(--white)]">{slide.description}</p>
                  </div>
                </SwiperSlide>
              )
            );
          })}
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
          {slides.map((slide, index) => {
            return (
              slide.display && (
                <SwiperSlide key={slide._id} virtualIndex={index}>
                  <img src={slide.thumb} className="w-full h-[400px]  min-h-[320px] object-cover" alt={slide.title} />
                  <div className="banner-container bg-[var(--red)] py-[30px] px-[24px]">
                    <h5 className="title text-[var(--white)] text-2xl font-bold mb-3">{slide.title}</h5>
                    <p className="desc text- text-[var(--white)] line-clamp-3">{slide.description}</p>
                  </div>
                </SwiperSlide>
              )
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
