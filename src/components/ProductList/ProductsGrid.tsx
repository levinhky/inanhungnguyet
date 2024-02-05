import { useTranslations } from "next-intl";
import Product from "./Product";

const ProductsGrid = ({ products }: { products: [ProductAttributes] }) => {
  const t = useTranslations("");
  const noProductsFound = t("noProductsFound");

  return (
    <div className="products grid rock:grid-cols-4 grid-cols-2 rock:gap-7 gap-4">
      {products?.length
        ? products.map((product, i) => <Product product={product} contactUs={t("contactUs")} />)
        : noProductsFound}
    </div>
  );
};

export default ProductsGrid;
