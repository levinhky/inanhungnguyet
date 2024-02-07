import { useTranslations } from "next-intl";
import Product from "./Product";
import { Fragment } from "react";

const ProductsGrid = ({ products }: { products: [ProductAttributes] }) => {
  const t = useTranslations("");
  const noProductsFound = t("noProductsFound");

  return (
    <Fragment>
      {products.length > 0 ? (
        <div className="products grid rock:grid-cols-4 grid-cols-2 rock:gap-7 gap-4">
          {products.map((product, i) => (
            <Product key={product._id} product={product} contactUs={t("contactUs")} />
          ))}
        </div>
      ) : (
        noProductsFound
      )}
    </Fragment>
  );
};

export default ProductsGrid;
