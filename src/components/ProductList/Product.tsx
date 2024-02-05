import { Link } from "@/navigation";

const Product = ({ product, contactUs }: { product: ProductAttributes; contactUs: string }) => {
  const renderProductThumb = () => (
    <div className="thumb mt-auto flex justify-center">
      <Link href={`/${product.slug}`}>
        <img src={product.thumbs[0]} className="select-none rounded-lg w-36" alt={product.name} />
      </Link>
    </div>
  );

  const renderContacUsButton = () => (
    <h2 className="contact uppercase text-[var(--blue)] font-bold my-2 py-1 border-b border-[var(--gray)]">
      {contactUs}
    </h2>
  );

  const renderProductName = () => (
    <h3 className="name font-normal line-clamp-2">
      <Link href={`/${product.slug}`}>{product.name}</Link>
    </h3>
  );

  const renderProductSku = () => <h3 className="sku uppercase text-[var(--gray-text)] text-sm">SKU: {product.sku}</h3>;

  return (
    <div key={product._id} className="product shadow-md flex flex-col">
      {renderProductThumb()}
      <div className="info px-5 py-3 mt-auto">
        {renderContacUsButton()}
        {renderProductName()}
        {renderProductSku()}
      </div>
    </div>
  );
};

export default Product;
