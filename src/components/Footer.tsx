"use client";

import Image from "next/image";
import { HomeOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-[#f6f6f6] mt-10 pb-5 rock:pb-5">
      <div className="flex justify-around items-center container mx-auto flex-wrap">
        <div>
          <Link href={"/"} className="logo rock:mt-0 mt-[-40px]">
            <Image
              src={"/logo.svg"}
              alt="inanhungnguyetlogo"
              width={150}
              height={150}
            />
          </Link>

          <ul className="mt-[-30px]">
            <li className="flex items-center mb-1">
              <HomeOutlined />
              <Link
                href={
                  "https://www.google.com/maps/dir/10.8033963,106.658688/in+an+hung+nguyet+ha+tinh/@18.0724365,106.2903199,19.14z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31388948dcf87421:0xc10528616cfbea97!2m2!1d106.290364!2d18.0725428?entry=ttu"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 rock:text-base text-sm"
              >
                11 Hà Hoa, P.Hưng Trí, Tx.Kỳ Anh, Hà Tĩnh
              </Link>
            </li>
            <li className="flex items-center mb-1">
              <MailOutlined />
              <Link
                target="_blank"
                rel="nofollow"
                href={"mailto:inanhungnguyet@gmail.com"}
                className="ml-1 rock:text-base text-sm"
              >
                inanhungnguyet@gmail.com
              </Link>
            </li>
            <li className="flex items-center mb-1">
              <PhoneOutlined />
              <Link
                target="_blank"
                rel="nofollow"
                href={"tel:0963284451"}
                className="ml-1 rock:text-base text-sm"
              >
                086.767.3358
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-start flex-col rock:mt-0 mt-[-50px]">
          <h1 className="mb-5 mt-[30px] font-bold uppercase">sản phẩm</h1>
          <ul>
            <li className="rock:hover:text-[var(--red)] ease-linear">
              <Link
                href={"/"}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 rock:text-base text-sm"
              >
                Bao bì
              </Link>
            </li>
            <li className="rock:hover:text-[var(--red)] ease-linear">
              <Link
                target="_blank"
                rel="nofollow"
                href={"/"}
                className="ml-1 rock:text-base text-sm"
              >
                Ly nhựa
              </Link>
            </li>
            <li className="rock:hover:text-[var(--red)] ease-linear">
              <Link
                target="_blank"
                rel="nofollow"
                href={"/"}
                className="ml-1 rock:text-base text-sm"
              >
                Bao đũa
              </Link>
            </li>
            <li className="rock:hover:text-[var(--red)] ease-linear">
              <Link
                target="_blank"
                rel="nofollow"
                href={"/"}
                className="ml-1 rock:text-base text-sm"
              >
                Khăn lạnh
              </Link>
            </li>
            <li className="rock:hover:text-[var(--red)] ease-linear">
              <Link
                target="_blank"
                rel="nofollow"
                href={"/"}
                className="ml-1 rock:text-base text-sm"
              >
                Hoá đơn
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-start flex-col rock:mt-0 mt-[-50px]">
          <h1 className="mb-5 mt-[30px] font-bold uppercase">sản phẩm</h1>
          <ul>
            <li className="rock:hover:text-[var(--red)] ease-linear">
              <Link
                href={"/"}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 rock:text-base text-sm"
              >
                Bao bì
              </Link>
            </li>
            <li className="rock:hover:text-[var(--red)] ease-linear">
              <Link
                target="_blank"
                rel="nofollow"
                href={"/"}
                className="ml-1 rock:text-base text-sm"
              >
                Ly nhựa
              </Link>
            </li>
            <li className="rock:hover:text-[var(--red)] ease-linear">
              <Link
                target="_blank"
                rel="nofollow"
                href={"/"}
                className="ml-1 rock:text-base text-sm"
              >
                Bao đũa
              </Link>
            </li>
            <li className="rock:hover:text-[var(--red)] ease-linear">
              <Link
                target="_blank"
                rel="nofollow"
                href={"/"}
                className="ml-1 rock:text-base text-sm"
              >
                Khăn lạnh
              </Link>
            </li>
            <li className="rock:hover:text-[var(--red)] ease-linear">
              <Link
                target="_blank"
                rel="nofollow"
                href={"/"}
                className="ml-1 rock:text-base text-sm"
              >
                Hoá đơn
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-start flex-col rock:mt-0 mt-[-50px]">
          <h1 className="mb-5 mt-[30px] font-bold uppercase">mạng xã hội</h1>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flevinhhoa.levinhhoa&tabs=timeline&width=0&height=0&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=750141939350920"
            width={0}
            height={0}
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder={0}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
      </div>
    </footer>
  );
}
