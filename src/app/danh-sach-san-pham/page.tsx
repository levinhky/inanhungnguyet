import Loading from "@/components/Loading";
import ProductList from "@/components/ProductList";
import useCategoryList from "@/services/hooks/category/useCategoryList";
import useProductList from "@/services/hooks/product/useProductList";
import { Suspense } from "react";

type Props = {
  searchParams?: { [key: string]: string };
};

export default async function ProductListingPage({ searchParams }: Props) {
  const { products, totalCount, totalPages, currentPage, limit, sortParam } = await useProductList({ searchParams });
  const categories = await useCategoryList();

  return (
    <Suspense key={currentPage} fallback={<Loading />}>
      <ProductList
        categories={categories}
        products={products}
        totalPages={totalPages}
        totalCount={totalCount}
        currentPage={currentPage}
        limit={limit}
        sortParam={sortParam}
      />
    </Suspense>
  );
}
