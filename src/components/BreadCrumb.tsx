"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId } from "react";

type Props = {
  slug?: string;
  slugName?: string;
};

export default function BreadCrumb({ slug, slugName }: Props) {
  const pathname = usePathname()
    .replace(/^\/(vi|en)\//, "/")
    .replace(/\/category\//, "/")
    .replace(/\/search\//, "/");

  let currentLink = "";

  const handleCrumbLabel = (crumb: string) => {
    switch (crumb) {
      case "gioi-thieu":
        return "Về chúng tôi";
      case "lien-he":
        return "Liên hệ";
      case "huong-dan-dat-hang":
        return "Hướng dẫn đặt hàng";
      case "chinh-sach-van-chuyen-thanh-toan":
        return "Chính sách vận chuyển - thanh toán";
      case "chinh-sach-doi-tra-bao-hanh":
        return "Chính sách đổi trả - bảo hành";
      case "danh-sach-san-pham":
        return "Danh sách sản phẩm";
      case "dang-nhap":
        return "Đăng nhập";
      case slug:
        return slugName;

      default:
        return "Sản Phẩm";
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
              Trang Chủ
            </Link>
            <span className="mx-2 text-[var(--gray-text)]">/</span>
          </li>
          {crumbs}
        </ol>
      </nav>
    </>
  );
}
