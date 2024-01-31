import ProductList from "@/components/ProductList";
import { getCategories, getProducts } from "@/config/apiConfig";
import React from "react";

type Props = {};

export default async function ProductListingPage({}: Props) {
  const productResponse = await getProducts();
  const categoryResponse = await getCategories();

  return <ProductList categories={categoryResponse.categories} products={productResponse.products} />;
}
