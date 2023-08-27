"use client";

import Image from "next/image";
import { HomeOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-[#f6f6f6] mt-10">
      <div className="flex justify-around items-center container mx-auto">
        <Link href={"/"} className="logo">
          <Image
            src={"/logo.svg"}
            alt="inanhungnguyetlogo"
            width={150}
            height={150}
          />
        </Link>

        <div className="flex items-center hover:text-[var(--red)] ease-linear">
          <HomeOutlined />
          <Link
            href={
              "https://www.google.com/maps/dir/10.8033963,106.658688/in+an+hung+nguyet+ha+tinh/@18.0724365,106.2903199,19.14z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31388948dcf87421:0xc10528616cfbea97!2m2!1d106.290364!2d18.0725428?entry=ttu"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1"
          >
            11 Hà Hoa, P.Hưng Trí, Tx.Kỳ Anh, Hà Tĩnh
          </Link>
        </div>

        <div className="flex items-center hover:text-[var(--red)] ease-linear">
          <MailOutlined />
          <Link href={"inanhungnguyet@gmail.com"} className="ml-1">
            inanhungnguyet@gmail.com
          </Link>
        </div>

        <div className="flex items-center hover:text-[var(--red)] ease-linear">
          <PhoneOutlined />
          <Link href={"tel:0963284451"} className="ml-1">
            086.767.3358
          </Link>
        </div>
      </div>
    </footer>
  );
}
