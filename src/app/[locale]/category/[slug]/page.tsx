import ProductList from "@/components/ProductList";
import { getCategories, getCategory } from "@/config/apiConfig";
import { Fragment } from "react";

type Props = {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string };
};

const ProductsInCategoryPage = async ({ params, searchParams }: Props) => {
  const { slug } = params;
  const sortParam = searchParams?.sort;
  const page = Number(searchParams?.page);
  const limit = Number(searchParams?.limit);
  const categoryListResponse = await getCategories();
  const categoryResponse = await getCategory(slug, sortParam, page, limit);

  return (
    <ProductList
      categories={categoryListResponse.categories}
      products={categoryResponse.category.productsInCategory}
      totalPages={categoryResponse.totalPages}
      totalCount={categoryResponse.totalCount}
      currentPage={page}
      limit={limit}
      slug={slug}
      categoryName={categoryResponse.category?.name}
    />
  );
};

export default ProductsInCategoryPage;
