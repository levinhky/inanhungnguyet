import { getProduct } from "@/config/apiConfig";
import { useEffect, useState } from "react";

type Props = {
  params: {
    slug: string;
  };
};
const useProductDetail = ({ params }: Props) => {
  const { slug } = params;
  const [data, setData] = useState({
    slug,
    product: {},
    slugName: "",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const product = await getProduct(slug);
        setData((prev) => ({
          ...prev,
          product,
          slugName: product.name,
        }));
      } catch (error) {
        console.log("error when fetching product", error);
      }
    };

    getData();
  }, [slug]);

  return data;
};

export default useProductDetail;
