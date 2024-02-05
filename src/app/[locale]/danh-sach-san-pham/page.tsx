import ProductList from "@/components/ProductList";
import { getCategories, getProducts } from "@/config/apiConfig";
import React from "react";

type Props = {
  searchParams?: { [key: string]: string };
};

export default async function ProductListingPage({ searchParams }: Props) {
  const sortParam = searchParams?.sort;
  const page = Number(searchParams?.page);
  const limit = Number(searchParams?.limit);
  const productResponse = await getProducts(sortParam, page, limit);
  const categoryResponse = await getCategories();

  return (
    <ProductList
      categories={categoryResponse.categories}
      products={productResponse.products}
      totalPages={productResponse.totalPages}
      totalCount={productResponse.totalCount}
      currentPage={page}
      limit={limit}
    />
  );
}
