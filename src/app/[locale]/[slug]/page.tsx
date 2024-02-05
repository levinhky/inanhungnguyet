export const dynamic = "force-dynamic";

import ProductDetail from "@/components/ProductDetail";
import apiConfig, { getProduct } from "@/config/apiConfig";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const res = await fetch(apiConfig.baseURL + "products/all");
  const products = await res.json();

  return products.length > 0
    ? products.map((product: ProductAttributes) => ({
        slug: product.slug,
      }))
    : [];
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = params;
  const productResponse = await getProduct(slug);

  return (
    <ProductDetail
      slug={slug}
      product={productResponse}
      slugName={productResponse.name}
    />
  );
}
