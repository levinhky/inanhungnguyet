"use client";
import BreadCrumb from "@/components/BreadCrumb";
import { useTranslations } from "next-intl";
import Link from "next/link";

type Props = {};

export default function ReturnAndWarrantyPolicyPage({}: Props) {
  const t = useTranslations("");

  return (
    <div className="container mx-auto rock:text-base text-sm">
      <BreadCrumb />
      <h1 className="font-bold rock:text-2xl text-xl">
        {t("returnAndWarrantyPolicy.of", {
          policy: t("policy.title"),
          storeName: t("storeName"),
        })}
      </h1>

      <h3 className="italic my-4 ">
        <div
          dangerouslySetInnerHTML={{
            __html: t.raw("returnAndWarrantyPolicy.effort"),
          }}
        />
      </h3>

      <section>
        <h6 className="my-3 font-semibold">► {t("returnAndWarrantyPolicy.applicable.title")}</h6>
        <h5 className="rock:my-5 my-3 ">
          &ndash;{" "}
          <div
            dangerouslySetInnerHTML={{
              __html: t.raw("returnAndWarrantyPolicy.applicable.freeCase"),
            }}
          />
        </h5>
        <ul>
          <li className="rock:mb-2 mb-1">&bull; {t("returnAndWarrantyPolicy.applicable.packagingError")}</li>
          <li className="rock:mb-2 mb-1">&bull; {t("returnAndWarrantyPolicy.applicable.shippingError")}</li>
        </ul>
        <h5 className="rock:my-5 my-3 ">
          &ndash;{" "}
          <div
            dangerouslySetInnerHTML={{
              __html: t.raw("returnAndWarrantyPolicy.refuse.title"),
            }}
          />
        </h5>
        <ul>
          <li className="rock:mb-2 mb-1 ">&bull; {t("returnAndWarrantyPolicy.refuse.notFromUs")}</li>
          <li className="rock:mb-2 mb-1 ">&bull; {t("returnAndWarrantyPolicy.refuse.customerFactor")}</li>
        </ul>
        <h5 className="mb-2 ">&ndash; {t("returnAndWarrantyPolicy.refuse.allCaseDecision")}</h5>
        <h5> &ndash; {t("returnAndWarrantyPolicy.note")}</h5>
      </section>

      <div id="map" className="my-7">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6813.256476915743!2d106.2820299770067!3d18.071428991211985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31388948dcf87421%3A0xc10528616cfbea97!2zSW4g4bqkbiBIw7luZyBOZ3V54buHdA!5e0!3m2!1svi!2s!4v1693733980152!5m2!1svi!2s"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="rock:w-[600px] rock:h-[450px] w-full h-full"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <h3>
        <b>{t("returnAndWarrantyPolicy.finalNote", { storeName: t("storeName") })}</b>
      </h3>
      <h3 className="mt-3 ">
        <b>Hotline:</b>{" "}
        <Link target="_blank" rel="nofollow" href={"tel:0867673358"}>
          {t("mainPhoneNumber")}
        </Link>
      </h3>
    </div>
  );
}
