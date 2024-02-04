"use client";

import BreadCrumb from "@/components/BreadCrumb";
import Loading from "@/components/Loading";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

type Props = {
  categories: [CategoryAttributes];
  products: [ProductAttributes];
  totalPages: number;
  totalCount: number;
  page: number;
  limit: number;
};

export default function ProductList(props: Props) {
  const { categories, products, totalCount, totalPages, page, limit } = props;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sortOption, setSortOption] = useState<string>("name-asc");
  const [pagination, setPagination] = useState<number[]>([]);
  const t = useTranslations("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    router.refresh();
  }, [sortOption]);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (totalPages > 0) {
      setPagination(Array.from({ length: totalPages }, (v, i) => i + 1));
    }
  }, [totalPages]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
          <h6 className="font-bold rock:text-2xl text-xl text-center">
            {t("productList")}{" "}
            <span className="count text-[var(--gray-text)] text-xs rock:text-sm font-medium">
              ({totalCount} {t("product")} )
            </span>
          </h6>

          <section className="flex flex-col-reverse rock:flex-row mt-7">
            <article className="p-5 rounded-xl rock:w-[250px] w-full h-fit rock:mt-0 mt-5">
              <h3 className="font-bold pb-2.5 mb-5 border-b border-b-[#ccc] uppercase">
                {t("category")}
              </h3>
              <ul>
                {categories?.length &&
                  categories?.map((category) => (
                    <li key={category._id} className="mb-1">
                      <Link
                        className="rock:hover:text-[var(--blue-text)] rock:ease-linear rock:delay-75"
                        href={"/category/" + category.slug}
                      >
                        {category.name} ({category.productsInCategory.length})
                      </Link>
                    </li>
                  ))}
              </ul>
            </article>

            <aside className="rock:ml-10">
              <div className="toolbar-sorter mb-7">
                <label htmlFor="options" className="text-xs rock:text-sm">
                  {t("sortBy.title")}:
                </label>
                <select
                  id="options"
                  defaultValue={sortOption}
                  onChange={(e) => {
                    setSortOption(e.target.value);
                    router.push(
                      pathname + "?" + createQueryString("sort", e.target.value)
                    );
                  }}
                  className="mx-3 min-w-[150px] py-2 pr-7 appearance-none pl-3 text-xs rock:text-sm border rock:cursor-pointer rounded-lg font-bold focus:border-[#ccc]"
                >
                  <option value="name-asc">{t("sortBy.productNameASC")}</option>
                  <option value="name-desc">
                    {t("sortBy.productNameDESC")}
                  </option>
                  <option value="views-desc">{t("sortBy.mostViewed")}</option>
                </select>
              </div>

              <div className="products grid rock:grid-cols-4 grid-cols-2 rock:gap-7 gap-4">
                {products?.length
                  ? products.map((product, i) => (
                      <div
                        key={product._id}
                        className="product shadow-md flex flex-col"
                      >
                        <div className="thumb mt-auto flex justify-center">
                          <Link href={`/${product.slug}`}>
                            <img
                              src={product.thumbs[0]}
                              className="select-none rounded-lg w-36"
                              alt={product.name}
                            />
                          </Link>
                        </div>
                        <div className="info px-5 py-3 mt-auto">
                          <h2 className="contact uppercase text-[var(--blue)] font-bold my-2 py-1 border-b border-[var(--gray)]">
                            {t("contactUs")}
                          </h2>
                          <h3 className="name font-normal line-clamp-2">
                            <Link href={`/${product.slug}`}>
                              {product.name}
                            </Link>
                          </h3>
                          <h3 className="sku uppercase text-[var(--gray-text)] text-sm">
                            SKU: {product.sku}
                          </h3>
                        </div>
                      </div>
                    ))
                  : "Không tìm thấy sản phẩm!"}
              </div>

              <nav aria-label="Navigation" className="mt-7 flex justify-end">
                <ul className="flex items-center -space-x-px h-10 text-base">
                  {page > 1 && (
                    <li>
                      <button
                        className="flex items-center justify-center px-4 h-10 ms-0 leading-tight
                     text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg 
                     rock:hover:bg-gray-100 rock:hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700
                      dark:text-gray-400 dark:rock:hover:bg-gray-700 dark:rock:hover:text-white"
                      >
                        <span className="sr-only">Previous</span>
                        <svg
                          className="w-3 h-3 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 1 1 5l4 4"
                          />
                        </svg>
                      </button>
                    </li>
                  )}
                  {pagination.length &&
                    pagination.map((pageNum) => (
                      <li>
                        <button
                          className={`flex items-center justify-center px-4 h-10 leading-tight  border
                         border-gray-300  dark:bg-gray-800 dark:border-gray-700 
                         dark:text-gray-400 dark:rock:hover:bg-gray-700 dark:rock:hover:text-white ${
                           page === pageNum
                             ? "bg-[var(--blue)] text-white"
                             : "bg-white text-gray-500 rock:hover:bg-gray-100 rock:hover:text-gray-700"
                         }`}
                        >
                          {pageNum}
                        </button>
                      </li>
                    ))}
                  {page < totalPages && (
                    <li>
                      <button
                        className="flex items-center justify-center px-4 h-10 leading-tight 
                    text-gray-500 bg-white border border-gray-300 rounded-e-lg rock:hover:bg-gray-100 
                    rock:hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400
                     dark:rock:hover:bg-gray-700 dark:rock:hover:text-white"
                      >
                        <span className="sr-only">Next</span>
                        <svg
                          className="w-3 h-3 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 9 4-4-4-4"
                          />
                        </svg>
                      </button>
                    </li>
                  )}
                </ul>
              </nav>
            </aside>
          </section>
        </div>
      )}
    </>
  );
}
