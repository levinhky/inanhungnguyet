import ProductList from "@/components/ProductList";
import { getCategories, getProductsSearch } from "@/config/apiConfig";

type Props = {
  params: {
    query: string;
  };
  searchParams?: { [key: string]: string };
};

const ProductSearchResultPage = async ({ params, searchParams }: Props) => {
  const { query } = params;
  const sortParam = searchParams?.sort;
  const page = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 8;
  const productResponse = await getProductsSearch(
    query,
    page,
    limit,
    sortParam
  );
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
};

export default ProductSearchResultPage;
