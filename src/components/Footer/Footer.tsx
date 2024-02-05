"use client";

import Image from "next/image";
import { FacebookOutlined, HomeOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

type Props = {};

export default function Footer({}: Props) {
  const liHover = "rock:hover:text-[var(--red)] ease-linear";
  const t = useTranslations("");

  return (
    <footer className="bg-[#f6f6f6] mt-10 pb-5 rock:pb-5 rock:text-base text-sm">
      <div className="flex rock:justify-around container mx-auto flex-wrap">
        <div className="rock:mb-0 mb-5">
          <Link href={"/"} className="logo rock:mt-0 mt-[-40px]">
            <Image src={"/logo.svg"} alt="inanhungnguyetlogo" className="rock:-mt-5 -mb-8" width={150} height={150} priority={true} />
          </Link>

          <ul>
            <li className={`flex items-center mb-1 ${liHover}`}>
              <HomeOutlined />
              <Link
                href={
                  "https://www.google.com/maps/dir/10.8033963,106.658688/in+an+hung+nguyet+ha+tinh/@18.0724365,106.2903199,19.14z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31388948dcf87421:0xc10528616cfbea97!2m2!1d106.290364!2d18.0725428?entry=ttu"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 "
              >
                {t("mainAddress")}
              </Link>
            </li>
            <li className={`flex items-center mb-1 ${liHover}`}>
              <MailOutlined />
              <Link target="_blank" rel="nofollow" href={`mailto:${t("mainEmail")}`} className="ml-1 ">
                {t("mainEmail")}
              </Link>
            </li>
            <li className={`flex items-center mb-1 ${liHover}`}>
              <PhoneOutlined />
              <Link target="_blank" rel="nofollow" href={"tel:0867673358"} className="ml-1 ">
                {t("mainPhoneNumber")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="rock:flex items-start flex-col  hidden rock:mt-0 mt-[-50px] rock:mr-0 mr-8 mb-5 rock:mb-0">
          <h4 className="mb-2 mt-11 font-bold uppercase">{t("products")}</h4>
          <ul>
            <li className={`${liHover}`}>
              <Link href={"/"}>Bao bì</Link>
            </li>
            <li className={`${liHover}`}>
              <Link href={"/"}>Ly nhựa</Link>
            </li>
            <li className={`${liHover}`}>
              <Link href={"/"}>Bao đũa</Link>
            </li>
            <li className={`${liHover}`}>
              <Link href={"/"}>Khăn lạnh</Link>
            </li>
            <li className={`${liHover}`}>
              <Link href={"/"}>Hoá đơn</Link>
            </li>
          </ul>
        </div>

        <div className="rock:flex hidden items-start flex-col rock:mt-0 mt-[-50px]">
          <h4 className="mb-2 mt-11 font-bold uppercase">{t("policy.title")}</h4>
          <ul>
            <li className={`${liHover}`}>
              <Link href={"/"}>{t("policy.shoppingGuide")}</Link>
            </li>
            <li className={`${liHover}`}>
              <Link href={"/chinh-sach-van-chuyen-thanh-toan"}>{t("policy.shippingAndPayment.title")}</Link>
            </li>
            <li className={`${liHover}`}>
              <Link href={"/chinh-sach-doi-tra-bao-hanh"}>{t("policy.returnAndWarranty.title")}</Link>
            </li>
          </ul>
        </div>

        <div className="rock:hidden flex justify-between w-full">
          <div className="flex items-start flex-col rock:mt-0 mt-[-50px] rock:mr-0 mb-5 rock:mb-0">
            <h4 className="mb-2 mt-11 font-bold uppercase">{t("products")}</h4>
            <ul>
              <li className={`${liHover}`}>
                <Link href={"/"}>Bao bì</Link>
              </li>
              <li className={`${liHover}`}>
                <Link href={"/"}>Ly nhựa</Link>
              </li>
              <li className={`${liHover}`}>
                <Link href={"/"}>Bao đũa</Link>
              </li>
              <li className={`${liHover}`}>
                <Link href={"/"}>Khăn lạnh</Link>
              </li>
              <li className={`${liHover}`}>
                <Link href={"/"}>Hoá đơn</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-start flex-col rock:mt-0 mt-[-50px]">
            <h4 className="mb-2 mt-11 font-bold uppercase">{t("policy.title")}</h4>
            <ul>
              <li className={`${liHover}`}>
                <Link href={"/"}>{t("policy.shoppingGuide")}</Link>
              </li>
              <li className={`${liHover}`}>
                <Link href={"/chinh-sach-van-chuyen-thanh-toan"}>{t("policy.shippingAndPayment.title")}</Link>
              </li>
              <li className={`${liHover}`}>
                <Link href={"/chinh-sach-doi-tra-bao-hanh"}>{t("policy.returnAndWarranty.title")}</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-start flex-col rock:mt-0 mt-[-50px]">
          <h4 className="rock:mb-2 mb-0 mt-11 font-bold uppercase">{t("social")}</h4>
          <ul>
            <li className={`${liHover}`}>
              <Link href={"https://www.facebook.com/levinhhoa.levinhhoa"} target="_blank" rel="noopener noreferrer">
                <FacebookOutlined className="text-2xl text-blue-700" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
