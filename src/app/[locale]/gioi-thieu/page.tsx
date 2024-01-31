"use client";

import BreadCrumb from "@/components/BreadCrumb";
import { useTranslations } from "next-intl";

export default function AboutUsPage() {
  const t = useTranslations("aboutPage");

  return (
    <div className="container mx-auto">
      <BreadCrumb />
      <div id="content">
        <h3 className="rock:text-3xl text-2xl text-center rock:mb-4 mb-3">{t("title")}</h3>

        <div id="desc">
          <p className="mb-2 text-sm rock:text-base">{t("welcome")}</p>
          <p className="mb-2 text-sm rock:text-base">{t("vision")}</p>
          <p className="mb-2 text-sm rock:text-base">{t("service")}</p>
          <p className="mb-2 text-sm rock:text-base">{t("satisfaction")}</p>
          <p className="mb-2 text-sm rock:text-base">{t("value")}</p>
          <p className="mb-2 text-sm rock:text-base">{t("visitUs")}</p>
        </div>
      </div>
    </div>
  );
}
