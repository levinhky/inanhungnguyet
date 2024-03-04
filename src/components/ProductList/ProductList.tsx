"use client";

import BreadCrumb from "@/components/BreadCrumb";
import Loading from "@/components/Loading";
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
  const { categories, products, totalCount, totalPages, currentPage, limit, sortParam } = props;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pagination, setPagination] = useState<number[]>([]);
  const [sortOption, setSortOption] = useState<string | undefined>(sortParam || "name-asc");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsLoading(false);
  }, [sortParam, currentPage]);

  useEffect(() => {
    if (totalPages > 0) {
      setPagination(Array.from({ length: totalPages }, (v, i) => i + 1));
    }
  }, [totalPages]);

  const createQueryString = useCallback((name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);

    return params.toString();
  }, []);

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
    router.push(pathname + "?" + createQueryString("sort", e.target.value));
    setIsLoading(true);
  };

  const handlePage = (page: number) => {
    router.push(`${pathname}?page=${page}&limit=${limit}&sort=${sortParam}`);
    setIsLoading(true);
  };

  const handlePrev = () => {
    const page = currentPage > 1 ? currentPage - 1 : 1;
    router.push(`${pathname}?page=${page}&limit=${limit}&sort=${sortParam}`);
    setIsLoading(true);
  };

  const handleNext = () => {
    const page = currentPage < totalPages ? currentPage + 1 : totalPages;
    router.push(`${pathname}?page=${page}&limit=${limit}&sort=${sortParam}`);
    setIsLoading(true);
  };

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
            {props?.categoryName ? props?.categoryName : "Danh sách sản phẩm"}{" "}
            <span className="count text-[var(--gray-text)] text-xs rock:text-sm font-medium capitalize">
              ({totalCount} Sản Phẩm )
            </span>
          </h6>

          <section className="flex flex-col-reverse rock:flex-row mt-7">
            <article className="p-5 rounded-xl rock:w-[250px] w-full h-fit rock:mt-0 mt-5">
              <CategoryBoard categories={categories} title={"Danh Mục"} />
            </article>

            <aside className="rock:ml-10">
              <SortOption sortOption={sortOption} handleSort={handleSort} />
              <ProductsGrid products={products} />
              {pagination.length > 0 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  pagination={pagination}
                  handlePage={handlePage}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                />
              )}
            </aside>
          </section>
        </div>
      )}
    </>
  );
}
