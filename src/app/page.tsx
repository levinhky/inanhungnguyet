import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import MainSlider from "@/components/HomePage/MainSlider";
import FeaturedProduct from "@/components/HomePage/FeaturedProduct";
import CategoryList from "@/components/HomePage/FeaturedCategory";
import ProduceProcess from "@/components/HomePage/ProduceProcess";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <Header />
      </div>
      <NavBar />
      <MainSlider />
      <div className="container mx-auto">
        <FeaturedProduct />
        <CategoryList />
        <ProduceProcess />
      </div>
      <Footer />
    </>
  );
}
