import { getProducts } from "@/config/apiConfig";

type Props = {
  searchParams?: { [key: string]: string };
};

const useProductList = async ({ searchParams }: Props) => {
  const sortParam = searchParams?.sort ?? 'name-asc';
  const page = Number(searchParams?.page);
  const limit = Number(searchParams?.limit);

  const productResponse = await getProducts(page, limit, sortParam);

  return {
    products: productResponse.products,
    totalPages: productResponse.totalPages,
    totalCount: productResponse.totalCount,
    currentPage: page,
    limit,
    sortParam,
  };
};

export default useProductList;
