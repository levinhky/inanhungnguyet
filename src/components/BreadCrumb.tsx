"use client";

import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useId } from "react";

type Props = {
  slug?: string;
  slugName?: string;
};

export default function BreadCrumb({ slug, slugName }: Props) {
  const pathname = usePathname().replace(/^\/(vi|en)\//, "/");
  let currentLink = "";
  const t = useTranslations("");

  const handleCrumbLabel = (crumb: string) => {
    switch (crumb) {
      case "gioi-thieu":
        return t("aboutUs");
      case "lien-he":
        return t("contact");
      case "chinh-sach-van-chuyen-thanh-toan":
        return t("policy.shippingAndPayment");
      case "chinh-sach-doi-tra-bao-hanh":
        return t("policy.returnAndWarranty");
      case "danh-sach-san-pham":
        return t("productList");
      case "dang-nhap":
        return t("login");
      case slug:
        return slugName;

      default:
        return "";
    }
  };

  const crumbs = pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      currentLink += "/" + crumb;
      const isLast = index === array.length - 1;

      return (
        <>
          <li>
            <Link
              className={`${
                !isLast ? "text-[var(--gray-text)]" : "text-black"
              } rock:hover:text-gray-700 text-xs capitalize rock:text-sm`}
              key={useId()}
              href={currentLink}
            >
              {handleCrumbLabel(crumb)}
            </Link>
          </li>
          {!isLast && <span className="mx-2 text-[var(--gray-text)]">/</span>}
        </>
      );
    });

  return (
    <>
      <nav className="text-sm py-4">
        <ol className="list-none p-0 m-0 flex">
          <li className="flex items-center">
            <Link
              href={"/"}
              className="text-[var(--gray-text)] rock:hover:text-gray-700 text-xs rock:text-sm capitalize"
            >
              {t("homePage")}
            </Link>
            <span className="mx-2 text-[var(--gray-text)]">/</span>
          </li>
          {crumbs}
        </ol>
      </nav>
    </>
  );
}
