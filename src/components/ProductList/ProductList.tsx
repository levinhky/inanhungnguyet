"use client";

import BreadCrumb from "@/components/BreadCrumb";
import Loading from "@/components/Loading";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import SortOption from "@/components/ProductList/SortOption";
import CategoryBoard from "@/components/ProductList/CategoryBoard";
import ProductsGrid from "./ProductsGrid";

type Props = {
  categories: [CategoryAttributes];
  products: [ProductAttributes];
  totalPages: number;
  totalCount: number;
  currentPage: number;
  limit: number;
  slug?: string;
  categoryName?: string;
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
          <BreadCrumb slug={props?.slug} slugName={props?.categoryName} />
          <h6 className="font-bold rock:text-2xl text-xl text-center">
            {props?.categoryName ? props?.categoryName : t("productList")}{" "}
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
              <ProductsGrid products={products} />
              {pagination.length > 0 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  pagination={pagination}
                  limit={limit}
                />
              )}
            </aside>
          </section>
        </div>
      )}
    </>
  );
}
