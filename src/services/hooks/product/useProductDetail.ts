import { getProduct } from "@/config/apiConfig";

type Props = {
  params: {
    slug: string;
  };
};
const useProductDetail = async ({ params }: Props) => {
  const { slug } = params;
  const product = await getProduct(slug);

  return {
    slug,
    product,
    productName: product.name,
  };
};

export default useProductDetail;
