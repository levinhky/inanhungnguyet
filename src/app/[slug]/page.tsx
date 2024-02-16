export const dynamic = "force-dynamic";

import ProductDetail from "@/components/ProductDetail";
import { getProduct, getProducts } from "@/config/apiConfig";
import NotFound from "../not-found";
import { isEmptyObject } from "@/assets/libs/functions";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const productResponse = await getProducts(1, 9999);
  const products = await productResponse.products;

  return products.length > 0
    ? products.map((product: ProductAttributes) => ({
        slug: product.slug,
      }))
    : [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const product = await getProduct(slug);

  return {
    title: product.name,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = params;
  const productResponse = await getProduct(slug);
  if (isEmptyObject(productResponse)) {
    return <NotFound />;
  }

  return (
    <ProductDetail
      slug={slug}
      product={productResponse}
      slugName={productResponse.name}
    />
  );
}
