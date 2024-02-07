"use client";

import BreadCrumb from "@/components/BreadCrumb";
import Loading from "@/components/Loading";
import { useTranslations } from "next-intl";
import React, { useEffect, useState, ChangeEvent, useCallback } from "react";
import Pagination from "@/components/Pagination";
import SortOption from "@/components/ProductList/SortOption";
import CategoryBoard from "@/components/ProductList/CategoryBoard";
import ProductsGrid from "./ProductsGrid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  categories: [CategoryAttributes];
  products: [ProductAttributes];
  totalPages: number;
  totalCount: number;
  currentPage: number;
  limit: number;
  slug?: string;
  categoryName?: string;
  sortParam?: string;
};

export default function ProductList(props: Props) {
  const {
    categories,
    products,
    totalCount,
    totalPages,
    currentPage,
    limit,
    sortParam,
  } = props;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pagination, setPagination] = useState<number[]>([]);
  const [sortOption, setSortOption] = useState<string>("name-asc");
  const t = useTranslations("");

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (totalPages > 0) {
      setPagination(Array.from({ length: totalPages }, (v, i) => i + 1));
    }
  }, [totalPages]);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback((name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);

    return params.toString();
  }, []);

  const handleSort = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
    router.push(pathname + "?" + createQueryString("sort", e.target.value));
  }, []);

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
            <span className="count text-[var(--gray-text)] text-xs rock:text-sm font-medium capitalize">
              ({totalCount} {t("products")} )
            </span>
          </h6>

          <section className="flex flex-col-reverse rock:flex-row mt-7">
            <article className="p-5 rounded-xl rock:w-[250px] w-full h-fit rock:mt-0 mt-5">
              <CategoryBoard categories={categories} title={t("category")} />
            </article>

            <aside className="rock:ml-10">
              <SortOption sortOption={sortOption} handleSort={handleSort} />
              <ProductsGrid products={products} />
              {pagination.length > 0 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  pagination={pagination}
                  limit={limit}
                  sortParam={sortParam}
                />
              )}
            </aside>
          </section>
        </div>
      )}
    </>
  );
}
