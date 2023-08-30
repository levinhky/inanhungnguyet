import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import MainSlider from "@/components/MainSlider";
import FeaturedProduct from "@/components/FeaturedProduct";
import CategoryList from "@/components/FeaturedCategory";
import ProduceProcess from "@/components/ProduceProcess";
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
