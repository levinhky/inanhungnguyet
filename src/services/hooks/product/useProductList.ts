import { getCategories, getProducts } from "@/config/apiConfig";
import { useEffect, useState } from "react";

type Props = { searchParams?: { [key: string]: string } };

const useProductList = ({ searchParams }: Props) => {
  const sortParam = searchParams?.sort;
  const page = Number(searchParams?.page);
  const limit = Number(searchParams?.limit);

  const [data, setData] = useState({
    categories: [],
    products: [],
    totalPages: 0,
    totalCount: 0,
    currentPage: page,
    limit,
    sortParam: undefined as string | undefined,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const productResponse = await getProducts(page, limit, sortParam);
        const categoryResponse = await getCategories();

        setData((prev) => ({
          ...prev,
          categories: categoryResponse.categories,
          products: productResponse.products,
          totalPages: categoryResponse.totalPages,
          totalCount: categoryResponse.totalCount,
          sortParam,
        }));
      } catch (error) {
        console.log("error when fetching product list", error);
      }
    };
    getData();
  }, [sortParam, page, limit]);

  return data;
};

export default useProductList;
