"use client";

import BreadCrumb from "@/components/BreadCrumb";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Loading from "@/components/Loading";
import { useTranslations } from "next-intl";
import Link from "next/link";

type Props = {
  slug: string;
  product: ProductAttributes;
  slugName: string;
};

export default function ProductDetail({ slug, product, slugName }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const t = useTranslations("");

  useEffect(() => {
    if (product._id !== "") {
      setIsLoading(false);
    }
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
                <Carousel
                  className="rock:w-[500px]"
                  swipeable={false}
                  showStatus={false}
                  thumbWidth={50}
                >
                  {product.thumbs &&
                    product.thumbs.map((thumb, index) => (
                      <div key={thumb}>
                        <img
                          src={thumb}
                          className="select-none rounded-lg"
                          alt={thumb}
                        />
                      </div>
                    ))}
                </Carousel>
              </div>

              <div className="info text-center rock:text-left w-full flex flex-col items-center rock:block">
                <h1 className="font-bold text-2xl rock:my-5 mb-3">
                  {product.name}
                </h1>

                <p className="rock:mb-5 mb-3">
                  <span className="font-bold">{t("state")} :</span>{" "}
                  {product.status === true ? t("inStock") : t("outStock")}
                </p>

                <h2 className="text-[var(--gray-text)] text-sm rock:mb-5 mb-3">
                  SKU: {product.sku}
                </h2>
                <Link
                  target="_blank"
                  rel="nofollow"
                  href={"https://zalo.me/0867673358"}
                  className="text-white bg-[var(--blue-text)] rock:hover:bg-[var(--blue)] rounded-full
                  flex items-center justify-center w-fit
                  text-base py-2 px-5 h-12 min-w-[200px]"
                >
                  <p>{t("contactUs")}</p>
                </Link>
              </div>
            </div>

            <div className="additonal-infomation rock:w-1/2">
              <h3 className="rock:text-center text-left font-bold text-base pb-5 rock:pt-0 pt-7 border-b-[3px] border-b-[var(--blue)]">
                {t("additionalInformation")}
              </h3>

              <ul className="info mt-5 list-disc list-inside">
                {product.attributes.capacity !== "" && (
                  <li>
                    <b>{t("capacity")}:</b> {product.attributes.capacity}
                  </li>
                )}
                {product.attributes.color !== "" && (
                  <li>
                    <b>{t("color")}:</b> {product.attributes.color}
                  </li>
                )}
                {product.attributes.characteristics !== "" && (
                  <li>
                    <b>{t("characteristics")}:</b>
                    {product.attributes.characteristics}
                  </li>
                )}
                {product.attributes.design !== "" && (
                  <li>
                    <b>{t("model")}:</b> {product.attributes.design}
                  </li>
                )}
                {product.attributes.uses !== "" && (
                  <li>
                    <b>{t("uses")}:</b> {product.attributes.uses}
                  </li>
                )}
              </ul>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
