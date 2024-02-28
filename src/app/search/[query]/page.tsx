import ProductList from "@/components/ProductList";
import useCategoryList from "@/services/hooks/category/useCategoryList";
import useProductSearch from "@/services/hooks/product/useProductSearch";

type Props = {
  params: {
    query: string;
  };
  searchParams?: { [key: string]: string };
};

const ProductSearchResultPage = async ({ params, searchParams }: Props) => {
  const { products, totalPages, totalCount, currentPage, limit } =
    await useProductSearch({ params, searchParams });
  const categories = await useCategoryList();

  return (
    <ProductList
      categories={categories}
      products={products}
      totalPages={totalPages}
      totalCount={totalCount}
      currentPage={currentPage}
      limit={limit}
    />
  );
};

export default ProductSearchResultPage;
