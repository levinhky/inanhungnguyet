import { getProductsSearch } from "@/config/apiConfig";
import { useEffect, useState } from "react";

type Props = {
  params: {
    query: string;
  };
  searchParams?: { [key: string]: string };
};

const useProductSearch = async ({ params, searchParams }: Props) => {
  const { query } = params;
  const sortParam = searchParams?.sort;
  const page = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 8;
  const [data, setData] = useState({
    products: [],
    totalPages: 0,
    totalCount: 0,
    currentPage: page,
    limit,
  });

  useEffect(() => {
    const getSearchData = async () => {
      try {
        const response = await getProductsSearch(query, page, limit, sortParam);
        setData((prev) => ({
          ...prev,
          products: response.products,
          totalPages: response.totalPages,
          totalCount: response.totalCount,
        }));
      } catch (error) {
        console.log("error when fetching product search", error);
      }
    };
    getSearchData();
  }, [query, page, limit, sortParam]);

  return data;
};

export default useProductSearch;
