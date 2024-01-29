"use client";

import BreadCrumb from "@/components/BreadCrumb";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Loading from "@/components/Loading";
import apiConfig from "@/config/apiConfig";
import { useTranslations } from "next-intl";

type Props = {
  params: {
    slug: string;
  };
};

export default function page({ params }: Props) {
  const { slug } = params;
  const [product, setProduct] = useState<ProductAttributes>({
    _id: "",
    name: "",
    sku: "",
    status: false,
    views: "",
    slug: "",
    thumbs: [],
    attributes: {
      capacity: "",
      color: "",
      characteristics: "",
      design: "",
      uses: "",
      display: false,
    },
    category: "",
    createdAt: "",
    updatedAt: "",
    __v: 0,
  });
  const [slugName, setSlugName] = useState<string>(slug);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const t = useTranslations("");

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(apiConfig.baseURL + "products/" + slug, {
        cache: "no-store",
      });
      const fetchedProduct = await response.json();

      if (fetchedProduct && Object.values(fetchedProduct).some((value) => value !== "")) {
        setProduct(fetchedProduct);
        setSlugName(fetchedProduct.name);
        setIsLoading(false);
      }
    };

    getProduct();
  }, [slug]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container mx-auto">
          <BreadCrumb slug={slug} slugName={slugName} />
          <section id="content">
            <div className="flex flex-wrap rock:flex-nowrap">
              <div className="images rock:w-1/2 rock:mr-10">
                <Carousel className="rock:w-[600px]" showStatus={false}>
                  {product.thumbs &&
                    product.thumbs.map((thumb, index) => (
                      <div key={thumb}>
                        <img src={thumb} className="select-none rounded-lg" alt={thumb} />
                      </div>
                    ))}
                </Carousel>
              </div>

              <div className="info text-center rock:text-left w-full">
                <h1 className="font-bold text-2xl rock:my-5 mb-3">{product.name}</h1>

                <p className="rock:mb-5 mb-3">
                  <span className="font-bold">{t("state")} :</span>{" "}
                  {product.status === true ? t("inStock") : t("outStock")}
                </p>

                <h2 className="text-[var(--gray-text)] text-sm rock:mb-5 mb-3">SKU: {product.sku}</h2>

                <button className="text-white bg-[var(--blue-text)] rock:hover:bg-[var(--blue)] rounded-full text-base py-2 px-5 h-12 min-w-[200px]">
                  {t("getAQuote")}
                </button>
              </div>
            </div>

            <div className="additonal-infomation rock:w-1/2">
              <h3 className="rock:text-center text-left font-bold text-base pb-5 rock:pt-0 pt-7 border-b-[3px] border-b-[var(--blue)]">
                {t("additionalInformation")}
              </h3>

              <ul className="info mt-5 list-disc list-inside">
                <li>
                  <b>{t("capacity")}:</b> {product.attributes.capacity}{" "}
                </li>
                <li>
                  <b>{t("color")}:</b> {product.attributes.color}
                </li>
                <li>
                  <b>{t("characteristics")}:</b> {product.attributes.characteristics}
                </li>
                <li>
                  <b>{t("model")}:</b> {product.attributes.design}
                </li>
                <li>
                  <b>{t("uses")}:</b> {product.attributes.uses}{" "}
                </li>
              </ul>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
