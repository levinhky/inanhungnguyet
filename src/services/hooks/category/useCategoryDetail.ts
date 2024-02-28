import { getCategory } from "@/config/apiConfig";

type Props = {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string };
};

const useCategoryDetail = async ({ params, searchParams }: Props) => {
  const { slug } = params;
  const sortParam = searchParams?.sort;
  const page = Number(searchParams?.page);
  const limit = Number(searchParams?.limit);
  const categoryResponse = await getCategory(slug, page, limit, sortParam);

  return {
    products: categoryResponse.category.productsInCategory,
    totalPages: categoryResponse.totalPages,
    totalCount: categoryResponse.totalCount,
    currentPage: page,
    limit,
    slug,
    categoryName: categoryResponse.category?.name,
  };
};

export default useCategoryDetail;
