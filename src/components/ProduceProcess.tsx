"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Props = {};

export default function ProduceProcess({}: Props) {
  const [active, setActive] = useState("lienhe");

  useEffect(() => {
    const el = document.querySelector(".process-thumbs > .thumb");
    el?.classList.add(
      "process-active",
      "after:w-[1px]",
      "after:h-[50px]",
      "after:bg-[var(--gray)]",
      "after:absolute",
      "after:top-full"
    );
  }, []);

  const handleActive = (value: string, e: any) => {
    setActive(value);
    const clickedElement = e.target;
    const activeElement = document.querySelector(".process-active");

    if (activeElement) {
      activeElement.classList.remove(
        "process-active",
        "after:w-[1px]",
        "after:h-[50px]",
        "after:bg-[var(--gray)]",
        "after:absolute",
        "after:top-full"
      );
    }

    clickedElement.classList.add(
      "process-active",
      "after:w-[1px]",
      "after:h-[50px]",
      "after:bg-[var(--gray)]",
      "after:absolute",
      "after:top-full"
    );
  };

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
            onClick={(e) => handleActive("lienhe", e)}
            className="thumb bg-[var(--gray-light)] relative cursor-pointer w-[150px] h-[150px] border-[var(--gray)] border rounded-full flex items-center justify-center flex-col"
          >
            <Image
              src="/lienhe.png"
              className="pointer-events-none select-none"
              width={55}
              height={55}
              alt="lienhe"
            />
            <h4 className="uppercase pointer-events-none select-none">
              liên hệ
            </h4>
          </div>
          <div
            onClick={(e) => handleActive("tuvan", e)}
            className="thumb bg-[var(--gray-light)] relative cursor-pointer w-[150px] h-[150px] border-[var(--gray)] border rounded-full flex items-center justify-center flex-col"
          >
            <Image
              src="/tuvan.png"
              className="pointer-events-none select-none"
              width={55}
              height={55}
              alt="tuvan"
            />
            <h4 className="uppercase pointer-events-none select-none">
              tƯ VẤN
            </h4>
          </div>
          <div
            onClick={(e) => handleActive("thietke", e)}
            className="thumb bg-[var(--gray-light)] relative cursor-pointer w-[150px] h-[150px] border-[var(--gray)] border rounded-full flex items-center justify-center flex-col"
          >
            <Image
              src="/thietke.png"
              className="pointer-events-none select-none"
              width={55}
              height={55}
              alt="thietke"
            />
            <h4 className="uppercase pointer-events-none select-none">
              thiết kế
            </h4>
          </div>
          <div
            onClick={(e) => handleActive("sanxuat", e)}
            className="thumb bg-[var(--gray-light)] relative cursor-pointer w-[150px] h-[150px] border-[var(--gray)] border rounded-full flex items-center justify-center flex-col"
          >
            <Image
              src="/sanxuat.png"
              className="pointer-events-none select-none"
              width={55}
              height={55}
              alt="sanxuat"
            />
            <h4 className="uppercase pointer-events-none select-none">
              sản xuất
            </h4>
          </div>
          <div
            onClick={(e) => handleActive("giaohang", e)}
            className="thumb bg-[var(--gray-light)] relative cursor-pointer w-[150px] h-[150px] border-[var(--gray)] border rounded-full flex items-center justify-center flex-col"
          >
            <Image
              src="/giaohang.png"
              className="pointer-events-none select-none"
              width={55}
              height={55}
              alt="giohang"
            />
            <h4 className="uppercase pointer-events-none select-none">
              giao HÀNG
            </h4>
          </div>
        </div>

        <div className="tab-content border-[var(--gray)] border-t pt-6 mt-12">
          {active === "lienhe" && (
            <div className="content ml-12">
              <p className="line-clamp-2">
                Quý khách hàng có nhu cầu vui lòng liên hệ qua các kênh sau:
                Call/sms/zalo : 086.767.3358 - Email : inanhungnguyet@gmail.com
              </p>
            </div>
          )}
          {active === "tuvan" && (
            <div className="content ml-12">
              <p className="line-clamp-2">
                Tiếp nhận thông tin khách hàng tổng hợp tất cả các nhu cầu của
                khách hàng như: thức uống đang kinh doanh chính, cần ly giấy hay
                ly nhựa. Cần in ấn đơn sắc hay nhiều màu
              </p>
            </div>
          )}
          {active === "thietke" && (
            <div className="content ml-12">
              <p className="line-clamp-2">
                Tiếp nhận yêu cầu và chuyển thông tin cho bộ phận thiết kế. Gửi
                bản demo và chỉnh sửa theo yêu cầu đến khi khách hài lòng
              </p>
            </div>
          )}
          {active === "sanxuat" && (
            <div className="content ml-12">
              <p className="line-clamp-2">
                Chuyển thông tin về đơn hàng cho xưởng sản xuất. Theo dõi tiến
                độ, duyệt mẫu để sản xuất hàng loạt
              </p>
            </div>
          )}
          {active === "giaohang" && (
            <div className="content ml-12">
              <p className="line-clamp-2">
                Giao hàng tới kho của khách hàng tại Kỳ Anh hoặc gửi hàng tới
                các đơn vị vận chuyển theo yêu cầu.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="process rock:hidden">
        <div className="process-thumbs flex justify-center items-center">
          <Swiper spaceBetween={0} slidesPerView={2}>
            <SwiperSlide>
              <div
                onClick={(e) => handleActive("lienhe", e)}
                className="thumb bg-[var(--gray-light)] relative cursor-pointer w-[170px] h-[170px] border-[var(--gray)] border rounded-full flex items-center justify-center flex-col"
              >
                <Image
                  src="/lienhe.png"
                  className="pointer-events-none select-none"
                  width={55}
                  height={55}
                  alt="lienhe"
                />
                <h4 className="uppercase pointer-events-none select-none">
                  liên hệ
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={(e) => handleActive("tuvan", e)}
                className="thumb bg-[var(--gray-light)] relative cursor-pointer w-[170px] h-[170px] border-[var(--gray)] border rounded-full flex items-center justify-center flex-col"
              >
                <Image
                  src="/tuvan.png"
                  className="pointer-events-none select-none"
                  width={55}
                  height={55}
                  alt="tuvan"
                />
                <h4 className="uppercase pointer-events-none select-none">
                  tƯ VẤN
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={(e) => handleActive("thietke", e)}
                className="thumb bg-[var(--gray-light)] relative cursor-pointer w-[170px] h-[170px] border-[var(--gray)] border rounded-full flex items-center justify-center flex-col"
              >
                <Image
                  src="/thietke.png"
                  className="pointer-events-none select-none"
                  width={55}
                  height={55}
                  alt="thietke"
                />
                <h4 className="uppercase pointer-events-none select-none">
                  thiết kế
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={(e) => handleActive("sanxuat", e)}
                className="thumb bg-[var(--gray-light)] relative cursor-pointer w-[170px] h-[170px] border-[var(--gray)] border rounded-full flex items-center justify-center flex-col"
              >
                <Image
                  src="/sanxuat.png"
                  className="pointer-events-none select-none"
                  width={55}
                  height={55}
                  alt="sanxuat"
                />
                <h4 className="uppercase pointer-events-none select-none">
                  sản xuất
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={(e) => handleActive("giaohang", e)}
                className="thumb bg-[var(--gray-light)] relative cursor-pointer w-[170px] h-[170px] border-[var(--gray)] border rounded-full flex items-center justify-center flex-col"
              >
                <Image
                  src="/giaohang.png"
                  className="pointer-events-none select-none"
                  width={55}
                  height={55}
                  alt="giohang"
                />
                <h4 className="uppercase pointer-events-none select-none">
                  giao HÀNG
                </h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="tab-content border-[var(--gray)] border-t rock:pt-6 pt-3 rock:mt-12 mt-5">
          {active === "lienhe" && (
            <div className="content rock:ml-12 ml-0">
              <p className="line-clamp-2">
                Quý khách hàng có nhu cầu vui lòng liên hệ qua các kênh sau:
                Call/sms/zalo : 086.767.3358 - Email : inanhungnguyet@gmail.com
              </p>
            </div>
          )}
          {active === "tuvan" && (
            <div className="content rock:ml-12 ml-0">
              <p className="line-clamp-2">
                Tiếp nhận thông tin khách hàng tổng hợp tất cả các nhu cầu của
                khách hàng như: thức uống đang kinh doanh chính, cần ly giấy hay
                ly nhựa. Cần in ấn đơn sắc hay nhiều màu
              </p>
            </div>
          )}
          {active === "thietke" && (
            <div className="content rock:ml-12 ml-0">
              <p className="line-clamp-2">
                Tiếp nhận yêu cầu và chuyển thông tin cho bộ phận thiết kế. Gửi
                bản demo và chỉnh sửa theo yêu cầu đến khi khách hài lòng
              </p>
            </div>
          )}
          {active === "sanxuat" && (
            <div className="content rock:ml-12 ml-0">
              <p className="line-clamp-2">
                Chuyển thông tin về đơn hàng cho xưởng sản xuất. Theo dõi tiến
                độ, duyệt mẫu để sản xuất hàng loạt
              </p>
            </div>
          )}
          {active === "giaohang" && (
            <div className="content rock:ml-12 ml-0">
              <p className="line-clamp-2">
                Giao hàng tới kho của khách hàng tại Kỳ Anh hoặc gửi hàng tới
                các đơn vị vận chuyển theo yêu cầu.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
