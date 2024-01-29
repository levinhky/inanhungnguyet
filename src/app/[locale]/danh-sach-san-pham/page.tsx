"use client";

import BreadCrumb from "@/components/BreadCrumb";
import Loading from "@/components/Loading";
import apiConfig from "@/config/apiConfig";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

type Props = {};

export default function ProductListing({}: Props) {
  const [categories, setCategories] = useState<[CategoryAttributes]>();
  const [products, setProducts] = useState<[ProductAttributes]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const t = useTranslations("");

  useEffect(() => {
    const getCategories = async () => {
      const categoryResponse = await fetch(apiConfig.baseURL + "categories/all");
      const productResponse = await fetch(apiConfig.baseURL + "products/all");

      const categories = await categoryResponse.json();
      categories && setCategories(categories.categories);

      const products = await productResponse.json();
      products && setProducts(products.products);
      setIsLoading(false);
    };

    getCategories();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container mx-auto rock:text-base text-sm">
          <style jsx>{`
            article {
              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
            }
            select {
              background: url(/icons/select.svg);
              background-repeat: no-repeat;
              background-position: right;
            }
          `}</style>
          <BreadCrumb />
          <h1 className="font-bold rock:text-2xl text-xl text-center">
            {t("productList")}{" "}
            <span className="count text-[var(--gray-text)] text-xs rock:text-sm font-medium">
              ({products?.length} {t("products")} )
            </span>
          </h1>

          <section className="flex flex-col-reverse rock:flex-row mt-7">
            <article className="p-5 rounded-xl rock:w-64 w-full h-fit rock:mt-0 mt-5">
              <h3 className="font-bold pb-2.5 mb-5 border-b border-b-[#ccc] uppercase">{t("categories")}</h3>
              <ul>
                {categories?.length &&
                  categories?.map((category) => (
                    <li key={category._id} className="mb-1">
                      <Link className="rock:hover:text-[var(--blue-text)] rock:ease-linear rock:delay-75" href="aa">
                        {category.name} ({category.productsInCategory.length})
                      </Link>
                    </li>
                  ))}
              </ul>
            </article>

            <aside className="rock:ml-10">
              <div className="toolbar-sorter mb-7">
                <label htmlFor="options" className="text-xs rock:text-sm">
                  {t("sortBy.title")}:
                </label>
                <select
                  id="options"
                  defaultValue={"US"}
                  className="mx-3 min-w-[150px] py-2 pr-7 appearance-none pl-3 text-xs rock:text-sm border rock:cursor-pointer rounded-lg font-bold focus:border-[#ccc]"
                >
                  <option value="US">{t("sortBy.productNameASC")}</option>
                  <option value="CA">{t("sortBy.productNameDESC")}</option>
                  <option value="FR">{t("sortBy.mostViewed")}</option>
                </select>
              </div>

              <div className="products grid rock:grid-cols-4 grid-cols-2 rock:gap-7 gap-4">
                {products?.length &&
                  products.map((product, i) => (
                    <div key={product._id} className="product">
                      <div className="thumb">
                        <Link href={`/${product.slug}`}>
                          <img src={product.thumbs[0]} className="select-none rounded-lg" alt={product.name} />
                        </Link>
                      </div>
                      <div className="info px-5 py-3">
                        <h2 className="contact uppercase text-[var(--blue)] font-bold my-2 py-1 border-b border-[var(--gray)]">
                          {t("contactUs")}
                        </h2>
                        <h1 className="name font-normal line-clamp-2">
                          <Link href={`/${product.slug}`}>{product.name}</Link>
                        </h1>
                        <h3 className="sku uppercase text-[var(--gray-text)] text-sm">SKU: {product.sku}</h3>
                      </div>
                    </div>
                  ))}
              </div>
            </aside>
          </section>
        </div>
      )}
    </>
  );
}
