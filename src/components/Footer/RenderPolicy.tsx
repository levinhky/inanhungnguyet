import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { Fragment } from "react";

const RenderPolicy = (props: { liHover: string }) => {
  const { liHover } = props;
  const t = useTranslations("policy");

  return (
    <Fragment>
      <h4 className="mb-2 mt-11 font-bold uppercase">{t("title")}</h4>
      <ul>
        <li className={`${liHover}`}>
          <Link href={"/"}>{t("shoppingGuide")}</Link>
        </li>
        <li className={`${liHover}`}>
          <Link href={"/chinh-sach-van-chuyen-thanh-toan"}>{t("shippingAndPayment.title")}</Link>
        </li>
        <li className={`${liHover}`}>
          <Link href={"/chinh-sach-doi-tra-bao-hanh"}>{t("returnAndWarranty.title")}</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default RenderPolicy;
