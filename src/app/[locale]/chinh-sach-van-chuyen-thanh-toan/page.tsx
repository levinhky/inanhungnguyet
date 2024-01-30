"use client";
import BreadCrumb from "@/components/BreadCrumb";
import { FacebookOutlined } from "@ant-design/icons";
import { useTranslations } from "next-intl";
import Link from "next/link";

type Props = {};

export default function ShippingAndPaymentPoliciesPage({}: Props) {
  const t = useTranslations("policy.shippingAndPayment");
  const t_global = useTranslations();

  return (
    <div className="container mx-auto rock:text-base text-sm">
      <BreadCrumb />
      <h1 className="font-bold rock:text-2xl text-xl">{t("policyOf", { storeName: t_global("storeName") })}</h1>

      <section>
        <h6 className="rock:my-5 my-3  font-semibold">{t("interactiveService.headline")}</h6>

        <h5 className="mb-2 ">{t("interactiveService.description")}</h5>

        <ul>
          <li className="mb-2">
            &bull; Website:
            <Link className="text-[var(--blue)] ml-1 rock:hover:opacity-80 rock:ease-in-out" href={"/"}>
              https://inanhungnguyet.com
            </Link>
          </li>
          <li className="mb-2">
            &bull; {t_global("social")}:
            <Link href={"https://www.facebook.com/levinhhoa.levinhhoa"} target="_blank" rel="noopener noreferrer">
              <FacebookOutlined className="text-2xl ml-1 text-blue-700" />
            </Link>
          </li>
          <li className="mb-2">
            &bull; Email:
            <Link
              className="text-[var(--blue)] ml-1 rock:hover:opacity-80 rock:ease-in-out"
              target="_blank"
              rel="nofollow"
              href={`mailto:${t_global("mainEmail")}`}
            >
              {t_global("mainEmail")}
            </Link>
          </li>
          <li className="mb-2">
            &bull; Phone/Zalo:
            <Link
              className="text-[var(--blue)] ml-1 rock:hover:opacity-80 rock:ease-in-out"
              target="_blank"
              rel="nofollow"
              href={"tel:0867673358"}
            >
              {t_global("mainPhoneNumber")}
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h6 className="rock:my-5 my-3  font-semibold">{t("deliveryAndOrderingTime.headline")}</h6>

        <ul>
          <li className="mb-2 font-semibold">
            &bull; {t_global("orderFrom")}:<p className="font-normal my-2">{t("deliveryAndOrderingTime.orderTime")}</p>
          </li>
          <li className="mb-2 font-semibold">
            &bull; {t_global("deliveryFrom")}:
            <p className="font-normal my-2">{t("deliveryAndOrderingTime.deliveryMorning")}</p>
            <p className="font-normal mt-2 mb-5">{t("deliveryAndOrderingTime.deliveryAfternoon")}</p>
            <ul>
              <li className="mb-2 font-normal">&bull; {t("deliveryAndOrderingTime.deliverySchedule")}</li>
              <li className="mb-2 font-normal">&bull; {t("deliveryAndOrderingTime.objectiveCase")}</li>
            </ul>
            <p className="font-normal my-2">{t("deliveryAndOrderingTime.highBuildingCase")}</p>
          </li>
        </ul>
      </section>

      <section>
        <h6 className="rock:my-5 my-3  font-semibold">{t("paymentMethod.headline")}</h6>

        <ul>
          <li className="mb-2 font-normal">&bull; {t("paymentMethod.cod")}</li>
          <li className="mb-2 font-normal">&bull; {t("paymentMethod.banking")}</li>
          <li className="mb-2 font-normal">&bull; {t("paymentMethod.outsideProvince")}</li>
        </ul>
      </section>
    </div>
  );
}
