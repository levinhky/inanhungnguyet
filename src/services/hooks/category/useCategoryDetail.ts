import { getCategory } from "@/config/apiConfig";
import { useEffect, useState } from "react";

type Props = {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string };
};

const useCategoryDetail = ({ params, searchParams }: Props) => {
  const { slug } = params;
  const sortParam = searchParams?.sort;
  const page = Number(searchParams?.page);
  const limit = Number(searchParams?.limit);
  const [data, setData] = useState({
    products: [],
    totalPages: 0,
    totalCount: 0,
    currentPage: page,
    limit,
    slug,
    categoryName: "",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getCategory(slug, page, limit, sortParam);
        setData((prev) => ({
          ...prev,
          products: response.category.productsInCategory,
          totalPages: response.productsInCategory,
          totalCount: response.productsInCategory,
          categoryName: response.category.name,
        }));
      } catch (error) {
        console.log("error when fetching category", error);
      }
    };

    getData();
  }, [slug, sortParam, page, limit]);

  return data;
};

export default useCategoryDetail;
