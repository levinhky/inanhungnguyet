import ProductList from "@/components/ProductList";
import { getCategory } from "@/config/apiConfig";
import useCategoryDetail from "@/services/hooks/category/useCategoryDetail";
import useCategoryList from "@/services/hooks/category/useCategoryList";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string };
};

export async function generateStaticParams() {
  const categories = await useCategoryList();

  return categories.length > 0
    ? categories.map((category: CategoryAttributes) => ({
        slug: category.slug,
      }))
    : [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const res = await getCategory(slug);

  return {
    title: res.category.name,
  };
}

const ProductsInCategoryPage = async ({ params, searchParams }: Props) => {
  const {
    products,
    totalPages,
    totalCount,
    currentPage,
    limit,
    slug,
    categoryName,
  } = await useCategoryDetail({ params, searchParams });
  const categories = await useCategoryList();

  return (
    <ProductList
      categories={categories}
      products={products}
      totalPages={totalPages}
      totalCount={totalCount}
      currentPage={currentPage}
      limit={limit}
      slug={slug}
      categoryName={categoryName}
    />
  );
};

export default ProductsInCategoryPage;
