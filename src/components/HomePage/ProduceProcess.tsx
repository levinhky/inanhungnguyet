"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Props = {};

export default function ProduceProcess({}: Props) {
  const [active, setActive] = useState("lienhe");
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
      <h3 className="my-7 mx-auto text-2xl font-bold border-b border-[var(--red)] w-fit pb-2">
        Quy trình sản xuất
      </h3>

      <div className="process sm:hidden xs:hidden">
        <div className="process-thumbs flex justify-evenly items-center">
          <div
            onClick={() => setActive("lienhe")}
            id="first-process"
            className={`${thumbClass} ${
              active === "lienhe" && acitiveClassName
            }`}
          >
            <Image
              src="/lienhe.png"
              className="pointer-events-none select-none"
              width={55}
              height={55}
              alt="Liên Hệ"
            />
            <h4 className="uppercase pointer-events-none select-none">
              Liên Hệ
            </h4>
          </div>
          <div
            onClick={() => setActive("tuvan")}
            className={`${thumbClass} ${
              active === "tuvan" && acitiveClassName
            }`}
          >
            <Image
              src="/tuvan.png"
              className="pointer-events-none select-none"
              width={55}
              height={55}
              alt="Tư Vấn"
            />
            <h4 className="uppercase pointer-events-none select-none">
              Tư Vấn
            </h4>
          </div>
          <div
            onClick={() => setActive("thietke")}
            className={`${thumbClass} ${
              active === "thietke" && acitiveClassName
            }`}
          >
            <Image
              src="/thietke.png"
              className="pointer-events-none select-none"
              width={55}
              height={55}
              alt="Thiết Kế"
            />
            <h4 className="uppercase pointer-events-none select-none">
              Thiết Kế
            </h4>
          </div>
          <div
            onClick={() => setActive("sanxuat")}
            className={`${thumbClass} ${
              active === "sanxuat" && acitiveClassName
            }`}
          >
            <Image
              src="/sanxuat.png"
              className="pointer-events-none select-none"
              width={55}
              height={55}
              alt="Sản Xuất"
            />
            <h4 className="uppercase pointer-events-none select-none">
              Sản Xuất
            </h4>
          </div>
          <div
            onClick={() => setActive("giaohang")}
            className={`${thumbClass} ${
              active === "giaohang" && acitiveClassName
            }`}
          >
            <Image
              src="/giaohang.png"
              className="pointer-events-none select-none"
              width={55}
              height={55}
              alt="Giao Hàng"
            />
            <h4 className="uppercase pointer-events-none select-none">
              Giao Hàng
            </h4>
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
                className={`${mobileThumbClass} ${
                  active === "lienhe" && acitiveClassName
                }`}
              >
                <Image
                  src="/lienhe.png"
                  className="pointer-events-none select-none"
                  width={55}
                  height={55}
                  alt="Liên Hệ"
                />
                <h4 className="uppercase pointer-events-none select-none">
                  Liên Hệ
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setActive("tuvan")}
                className={`${mobileThumbClass} ${
                  active === "tuvan" && acitiveClassName
                }`}
              >
                <Image
                  src="/tuvan.png"
                  className="pointer-events-none select-none"
                  width={55}
                  height={55}
                  alt="Tư Vấn"
                />
                <h4 className="uppercase pointer-events-none select-none">
                  Tư Vấn
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setActive("thietke")}
                className={`thumb bg-[var(--gray-light)] relative cursor-pointer w-[100%] h-[100%] border-[var(--gray)] border rounded-lg
            flex items-center justify-center flex-col ${
              active === "thietke" && acitiveClassName
            }`}
              >
                <Image
                  src="/thietke.png"
                  className="pointer-events-none select-none"
                  width={55}
                  height={55}
                  alt="Thiết Kế"
                />
                <h4 className="uppercase pointer-events-none select-none">
                  Thiết Kế
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setActive("sanxuat")}
                className={`${mobileThumbClass} ${
                  active === "sanxuat" && acitiveClassName
                }`}
              >
                <Image
                  src="/sanxuat.png"
                  className="pointer-events-none select-none"
                  width={55}
                  height={55}
                  alt="Sản Xuất"
                />
                <h4 className="uppercase pointer-events-none select-none">
                  Sản Xuất
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() => setActive("giaohang")}
                className={`${mobileThumbClass} ${
                  active === "giaohang" && acitiveClassName
                }`}
              >
                <Image
                  src="/giaohang.png"
                  className="pointer-events-none select-none"
                  width={55}
                  height={55}
                  alt="Giao Hàng"
                />
                <h4 className="uppercase pointer-events-none select-none">
                  Giao Hàng
                </h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="tab-content border-[var(--gray)] border-t rock:pt-6 pt-3 rock:mt-12 mt-5">
        {active === "lienhe" && (
          <div className="content rock:ml-12 ml-0">
            <p className="line-clamp-3 text-sm rock:text-base">
              Quý khách hàng có nhu cầu vui lòng liên hệ qua các kênh sau:
              Call/sms/zalo: 086.767.3358 - Email: inanhungnguyet@gmail.com
            </p>
          </div>
        )}
        {active === "tuvan" && (
          <div className="content rock:ml-12 ml-0">
            <p className="line-clamp-3 text-sm rock:text-base">
              Tiếp nhận thông tin khách hàng tổng hợp tất cả các nhu cầu của
              khách hàng như: thức uống đang kinh doanh chính, cần ly giấy hay
              ly nhựa. Cần in ấn đơn sắc hay nhiều màu
            </p>
          </div>
        )}
        {active === "thietke" && (
          <div className="content rock:ml-12 ml-0">
            <p className="line-clamp-3 text-sm rock:text-base">
              Tiếp nhận yêu cầu và chuyển thông tin cho bộ phận thiết kế. Gửi
              bản demo và chỉnh sửa theo yêu cầu đến khi khách hài lòng
            </p>
          </div>
        )}
        {active === "sanxuat" && (
          <div className="content rock:ml-12 ml-0">
            <p className="line-clamp-3 text-sm rock:text-base">
              Chuyển thông tin về đơn hàng cho xưởng sản xuất. Theo dõi tiến độ,
              duyệt mẫu để sản xuất hàng loạt
            </p>
          </div>
        )}
        {active === "giaohang" && (
          <div className="content rock:ml-12 ml-0">
            <p className="line-clamp-3 text-sm rock:text-base">
              Giao hàng tới địa chỉ của khách hàng tại Kỳ Anh hoặc gửi hàng tới
              các đơn vị vận chuyển theo yêu cầu.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
