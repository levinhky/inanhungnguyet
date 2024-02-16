import Product from "./Product";
import { Fragment } from "react";

const ProductsGrid = ({ products }: { products: [ProductAttributes] }) => {
  return (
    <Fragment>
      {products.length > 0 ? (
        <div className="products grid rock:grid-cols-4 grid-cols-2 rock:gap-7 gap-4">
          {products.map((product, i) => (
            <Product
              key={product._id}
              product={product}
              contactUs={"Liên hệ chúng tôi..."}
            />
          ))}
        </div>
      ) : (
        "Không tìm thấy sản phẩm nào!"
      )}
    </Fragment>
  );
};

export default ProductsGrid;
