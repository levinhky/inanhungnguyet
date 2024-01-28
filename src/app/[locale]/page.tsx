import MainSlider from "@/components/HomePage/MainSlider";
import FeaturedProduct from "@/components/HomePage/FeaturedProduct";
import CategoryList from "@/components/HomePage/FeaturedCategory";
import ProduceProcess from "@/components/HomePage/ProduceProcess";
import apiConfig from "@/config/apiConfig";

async function getProducts() {
  const res = await fetch(apiConfig.baseURL + "products/all", { cache: "no-store" });
  return res.json();
}

async function getCategories() {
  const res = await fetch(apiConfig.baseURL + "categories/all", { cache: "no-store" });
  return res.json();
}

export default async function Home({}) {
  const productResponse = await getProducts();
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
