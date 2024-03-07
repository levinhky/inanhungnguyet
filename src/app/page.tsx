import MainSlider from "@/components/HomePage/MainSlider";
import FeaturedProduct from "@/components/HomePage/FeaturedProduct";
import CategoryList from "@/components/HomePage/FeaturedCategory";
import ProduceProcess from "@/components/HomePage/ProduceProcess";
import { getProducts } from "@/config/apiConfig";
import useAuth from "@/services/hooks/useAuth";
import useCategoryList from "@/services/hooks/category/useCategoryList";

export default async function Home() {
  const productResponse = await getProducts(1, 8);
  const { categories } = await useCategoryList();
  useAuth();

  return (
    <>
      <MainSlider />
      <div className="container mx-auto">
        <FeaturedProduct products={productResponse.products} />
        <CategoryList categories={categories} />
        <ProduceProcess />
      </div>
    </>
  );
}
