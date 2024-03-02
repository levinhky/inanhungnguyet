import ProductList from "@/components/ProductList";
import useCategoryList from "@/services/hooks/category/useCategoryList";
import useProductList from "@/services/hooks/product/useProductList";

type Props = {
  searchParams?: { [key: string]: string };
};

export default async function ProductListingPage({ searchParams }: Props) {
  const { products, totalCount, totalPages, currentPage, limit, sortParam } = await useProductList({ searchParams });
  const categories = await useCategoryList();

  return (
    <ProductList
      categories={categories}
      products={products}
      totalPages={totalPages}
      totalCount={totalCount}
      currentPage={currentPage}
      limit={limit}
      sortParam={sortParam}
    />
  );
}
