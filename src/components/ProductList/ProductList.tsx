"use client";

import BreadCrumb from "@/components/BreadCrumb";
import Loading from "@/components/Loading";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import SortOption from "@/components/ProductList/SortOption";
import CategoryBoard from "@/components/ProductList/CategoryBoard";

type Props = {
  categories: [CategoryAttributes];
  products: [ProductAttributes];
  totalPages: number;
  totalCount: number;
  currentPage: number;
  limit: number;
};

export default function ProductList(props: Props) {
  const { categories, products, totalCount, totalPages, currentPage, limit } =
    props;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pagination, setPagination] = useState<number[]>([]);
  const t = useTranslations("");

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
              <CategoryBoard categories={categories} title={t("category")} />
            </article>

            <aside className="rock:ml-10">
              <SortOption />

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
                  : t("noProductsFound")}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                pagination={pagination}
                limit={limit}
              />
            </aside>
          </section>
        </div>
      )}
    </>
  );
}
