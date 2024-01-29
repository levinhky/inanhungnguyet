"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useTranslations } from "next-intl";

type Props = {};

export default function ProduceProcess({}: Props) {
  const [active, setActive] = useState("lienhe");
  const t = useTranslations("");
  const acitiveClassName =
    "process-active after:w-[1px] after:h-[50px] after:bg-[var(--gray)] after:absolute after:top-full";
  const thumbClass =
    "thumb bg-[var(--gray-light)] relative cursor-pointer w-[150px] h-[150px] border-[var(--gray)] border rounded-full flex items-center justify-center flex-col";
  const mobileThumbClass =
    "thumb bg-[var(--gray-light)] relative cursor-pointer w-[100%] h-[100%] border-[var(--gray)] border rounded-lg flex items-center justify-center flex-col";

  return (
    <div>
      <style jsx>{`
        .process-active {
          border-color: #00aeef;
          background-color: #fff;
        }
      `}</style>
      <h3 className="my-7 mx-auto text-2xl font-bold border-b border-[var(--red)] w-fit pb-2">{t("produceProcess")}</h3>

      <div className="process sm:hidden xs:hidden">
        <div className="process-thumbs flex justify-evenly items-center">
          <div
            onClick={() => setActive("lienhe")}
            id="first-process"
            className={`${thumbClass} ${active === "lienhe" && acitiveClassName}`}
          >
            <Image
              src="/lienhe.png"
              className="pointer-events-none select-none"
              width={55}
              height={55}
              alt={t("contact")}
            />
            <h4 className="uppercase pointer-events-none select-none">{t("contact")}</h4>
          </div>
          <div onClick={() => setActive("tuvan")} className={`${thumbClass} ${active === "tuvan" && acitiveClassName}`}>
            <Image
              src="/tuvan.png"
              className="pointer-events-none select-none"
              width={55}
              height={55}
              alt={t("advice")}
            />
            <h4 className="uppercase pointer-events-none select-none">{t("advice")}</h4>
          </div>
          <div
            onClick={() => setActive("thietke")}
            className={`${thumbClass} ${active === "thietke" && acitiveClassName}`}
          >
            <Image
              src="/thietke.png"
              className="pointer-events-none select-none"
              width={55}
              height={55}
              alt={t("design")}
            />
            <h4 className="uppercase pointer-events-none select-none">{t("design")}</h4>
          </div>
          <div
            onClick={() => setActive("sanxuat")}
            className={`${thumbClass} ${active === "sanxuat" && acitiveClassName}`}
          >
            <Image
              src="/sanxuat.png"
              className="pointer-events-none select-none"
              width={55}
              height={55}
              alt={t("produce")}
            />
            <h4 className="uppercase pointer-events-none select-none">{t("produce")}</h4>
          </div>
          <div
            onClick={() => setActive("giaohang")}
            className={`${thumbClass} ${active === "giaohang" && acitiveClassName}`}
          >
            <Image
              src="/giaohang.png"
              className="pointer-events-none select-none"
              width={55}
              height={55}
              alt={t("delivery")}
            />
            <h4 className="uppercase pointer-events-none select-none">{t("delivery")}</h4>
          </div>
        </div>
      </div>

      <div className="process rock:hidden">
        <div className="process-thumbs flex justify-center items-center">
          <Swiper spaceBetween={15} slidesPerView={2}>
            <SwiperSlide>
              <div
                onClick={() => setActive("lienhe")}
                id="first-process-mobile"
                className={`${mobileThumbClass} ${active === "lienhe" && acitiveClassName}`}
              >
                <Image
                  src="/lienhe.png"
                  className="pointer-events-none select-none"
                  width={55}
                  height={55}
                  alt={t("contact")}
                />
                <h4 className="uppercase pointer-events-none select-none">{t("contact")}</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setActive("tuvan")}
                className={`${mobileThumbClass} ${active === "tuvan" && acitiveClassName}`}
              >
                <Image
                  src="/tuvan.png"
                  className="pointer-events-none select-none"
                  width={55}
                  height={55}
                  alt={t("advice")}
                />
                <h4 className="uppercase pointer-events-none select-none">{t("advice")}</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setActive("thietke")}
                className={`thumb bg-[var(--gray-light)] relative cursor-pointer w-[100%] h-[100%] border-[var(--gray)] border rounded-lg
            flex items-center justify-center flex-col ${active === "thietke" && acitiveClassName}`}
              >
                <Image
                  src="/thietke.png"
                  className="pointer-events-none select-none"
                  width={55}
                  height={55}
                  alt={t("design")}
                />
                <h4 className="uppercase pointer-events-none select-none">{t("design")}</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setActive("sanxuat")}
                className={`${mobileThumbClass} ${active === "sanxuat" && acitiveClassName}`}
              >
                <Image
                  src="/sanxuat.png"
                  className="pointer-events-none select-none"
                  width={55}
                  height={55}
                  alt={t("produce")}
                />
                <h4 className="uppercase pointer-events-none select-none">{t("produce")}</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setActive("giaohang")}
                className={`${mobileThumbClass} ${active === "giaohang" && acitiveClassName}`}
              >
                <Image
                  src="/giaohang.png"
                  className="pointer-events-none select-none"
                  width={55}
                  height={55}
                  alt={t("delivery")}
                />
                <h4 className="uppercase pointer-events-none select-none">{t("delivery")}</h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="tab-content border-[var(--gray)] border-t rock:pt-6 pt-3 rock:mt-12 mt-5">
        {active === "lienhe" && (
          <div className="content rock:ml-12 ml-0">
            <p className="line-clamp-3 text-sm rock:text-base">
              {t("mainProcess.inquiries", { phoneNumber: t("mainPhoneNumber"), email: t("mainEmail") })}
            </p>
          </div>
        )}
        {active === "tuvan" && (
          <div className="content rock:ml-12 ml-0">
            <p className="line-clamp-3 text-sm rock:text-base">{t("mainProcess.gather")}</p>
          </div>
        )}
        {active === "thietke" && (
          <div className="content rock:ml-12 ml-0">
            <p className="line-clamp-3 text-sm rock:text-base">{t("mainProcess.satisfied")}</p>
          </div>
        )}
        {active === "sanxuat" && (
          <div className="content rock:ml-12 ml-0">
            <p className="line-clamp-3 text-sm rock:text-base">{t("mainProcess.produce")}</p>
          </div>
        )}
        {active === "giaohang" && (
          <div className="content rock:ml-12 ml-0">
            <p className="line-clamp-3 text-sm rock:text-base">{t("mainProcess.delivery")}</p>
          </div>
        )}
      </div>
    </div>
  );
}
