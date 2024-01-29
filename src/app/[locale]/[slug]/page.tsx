export const dynamic = "force-dynamic";

import apiConfig from "@/config/apiConfig";
import ProductDetail from "@/components/ProductDetail/page";

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

export default async function page({ params }: Props) {
  const { slug } = params;

  async function getProduct() {
    const res = await fetch(apiConfig.baseURL + "products/" + slug, {
      cache: "no-store",
    });

    return res.json();
  }

  const productResponse = await getProduct();

  return (
    <ProductDetail
      slug={slug}
      product={productResponse}
      slugName={productResponse.name}
    />
  );
}
