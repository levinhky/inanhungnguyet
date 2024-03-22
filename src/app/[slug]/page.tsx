export const dynamic = "force-dynamic";

import ProductDetail from "@/components/ProductDetail";
import { getProducts } from "@/config/apiConfig";
import NotFound from "../not-found";
import { isEmptyObject } from "@/assets/libs/functions";
import { Metadata } from "next";
import useProductDetail from "@/services/hooks/product/useProductDetail";

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
  const { productName } = await useProductDetail({ params });

  return {
    title: productName,
    description: productName + " kỳ anh",
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug, product, productName } = await useProductDetail({ params });
  if (isEmptyObject(product)) {
    return <NotFound />;
  }

  return <ProductDetail slug={slug} product={product} slugName={productName} />;
}
