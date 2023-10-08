"use client";

import BreadCrumb from "@/components/BreadCrumb";
import Link from "next/link";
import React from "react";

type Props = {};

export default function ProductListing({}: Props) {
  return (
    <div className="container mx-auto rock:text-base text-sm">
      <style jsx>{`
        article {
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
        }
        select {
          background: url(/icons/select.svg);
          background-repeat: no-repeat;
          background-position: right;
        }
      `}</style>
      <BreadCrumb />
      <h1 className="font-bold rock:text-2xl text-xl text-center">
        Danh sách sản phẩm{" "}
        <span className="count text-[var(--gray-text)] text-xs rock:text-sm font-medium">
          (25 sản phẩm )
        </span>
      </h1>

      <section className="flex flex-col-reverse rock:flex-row mt-7">
        <article className="p-5 rounded-xl rock:w-64 w-full h-fit rock:mt-0 mt-5">
          <h3 className="font-bold pb-2.5 mb-5 border-b border-b-[#ccc] uppercase">
            Danh mục
          </h3>
          <ul>
            <li className="mb-1">
              <Link
                className="rock:hover:text-[var(--blue-text)] rock:ease-linear rock:delay-75"
                href="aa"
              >
                Ly nhựa (5)
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="rock:hover:text-[var(--blue-text)] rock:ease-linear rock:delay-75"
                href="aa"
              >
                Bao bì (5)
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="rock:hover:text-[var(--blue-text)] rock:ease-linear rock:delay-75"
                href="aa"
              >
                Khăn lạnh (5)
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="rock:hover:text-[var(--blue-text)] rock:ease-linear rock:delay-75"
                href="aa"
              >
                Hoá đơn (5)
              </Link>
            </li>
            <li className="mb-1">
              <Link
                className="rock:hover:text-[var(--blue-text)] rock:ease-linear rock:delay-75"
                href="aa"
              >
                Thẻ (5)
              </Link>
            </li>
          </ul>
        </article>

        <aside className="rock:ml-10">
          <div className="toolbar-sorter mb-7">
            <label htmlFor="options" className="text-xs rock:text-sm">Sắp xếp theo:</label>
            <select
              id="options"
              className="mx-3 min-w-[150px] py-2 pr-7 appearance-none pl-3 text-xs rock:text-sm border rock:cursor-pointer rounded-lg font-bold focus:border-[#ccc]"
            >
              <option value="US" selected>
                Tên sản phẩm (A tới Z)
              </option>
              <option value="CA">Tên sản phẩm (Z tới A) </option>
              <option value="FR">Xem nhiều </option>
            </select>
          </div>

          <div className="products grid rock:grid-cols-4 grid-cols-2 rock:gap-7 gap-4">
            {Array(8)
              .fill("")
              .map((i, a) => (
                <div key={i} className="product">
                  <div className="thumb">
                    <Link href={"/"}>
                      <img
                        src="/logommvn.png"
                        className="select-none rounded-lg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="info px-5 py-3">
                    <h2 className="contact uppercase text-[var(--blue)] font-bold my-2 py-1 border-b border-[var(--gray)]">
                      liên hệ chúng tôi...
                    </h2>
                    <h1 className="name font-normal line-clamp-2">
                      <Link href={"/"}>Ly nhựa đáy bầu 500ml</Link>
                    </h1>
                    <h3 className="sku uppercase text-[var(--gray-text)] text-sm">
                      SKU: 250702
                    </h3>
                  </div>
                </div>
              ))}
          </div>
        </aside>
      </section>
    </div>
  );
}
