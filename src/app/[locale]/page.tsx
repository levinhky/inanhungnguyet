import MainSlider from "@/components/HomePage/MainSlider";
import FeaturedProduct from "@/components/HomePage/FeaturedProduct";
import CategoryList from "@/components/HomePage/FeaturedCategory";
import ProduceProcess from "@/components/HomePage/ProduceProcess";
import { getCategories, getProducts } from "@/config/apiConfig";

export default async function Home({}) {
  const productResponse = await getProducts(1, 8);
  const categoryResponse = await getCategories();

  return (
    <>
      <MainSlider />
      <div className="container mx-auto">
        <FeaturedProduct products={productResponse.products} />
        <CategoryList categories={categoryResponse.categories} />
        <ProduceProcess />
      </div>
    </>
  );
}
