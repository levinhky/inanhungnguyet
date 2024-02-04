import ProductList from "@/components/ProductList";
import { getCategories, getProducts } from "@/config/apiConfig";
import React from "react";

type Props = {
  searchParams?: { [key: string]: string };
};

export default async function ProductListingPage({ searchParams }: Props) {
  const sortParam = searchParams?.sort;
  const productResponse = await getProducts(sortParam);
  const categoryResponse = await getCategories();

  return (
    <ProductList
      categories={categoryResponse.categories}
      products={productResponse.products}
    />
  );
}
