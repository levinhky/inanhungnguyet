import Image from "next/image";
import Link from "next/link";

type Props = {
  product: ProductAttributes;
  handleClickProductSearch: () => void;
};

const Product = ({ product, handleClickProductSearch }: Props) => {
  return (
    <div className="flex items-center mb-3">
      <div className="thumb">
        <Image src={product.thumbs[0]} className="h-[50px] rounded" width={50} height={50} alt={product.name} />
      </div>
      <Link
        href={`/${product.slug}`}
        className="name ml-3 rock:hover:text-[var(--blue)] rock:ease-in-out"
        onClick={handleClickProductSearch}
      >
        {product.name}
      </Link>
    </div>
  );
};

export default Product;
