import { getProductsSearch } from "@/config/apiConfig";

type Props = {
  params: {
    query: string;
  };
  searchParams?: { [key: string]: string };
};

const useProductSearch = async ({ params, searchParams }: Props) => {
  const { query } = params;
  const sortParam = searchParams?.sort|| 'name-asc';
  const page = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 8;

  const productResponse = await getProductsSearch(
    query,
    page,
    limit,
    sortParam
  );

  return {
    products: productResponse.products,
    totalPages: productResponse.totalPages,
    totalCount: productResponse.totalCount,
    currentPage: page,
    limit,
  };
};

export default useProductSearch;
