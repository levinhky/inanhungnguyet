import MainSlider from "@/components/HomePage/MainSlider";
import FeaturedProduct from "@/components/HomePage/FeaturedProduct";
import CategoryList from "@/components/HomePage/FeaturedCategory";
import ProduceProcess from "@/components/HomePage/ProduceProcess";

export default function Home() {
  return (
    <>
      <MainSlider />
      <div className="container mx-auto">
        <FeaturedProduct />
        <CategoryList />
        <ProduceProcess />
      </div>
    </>
  );
}
