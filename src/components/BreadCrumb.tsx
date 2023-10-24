"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  slug?: string;
  slugName?:string;
};

export default function BreadCrumb({ slug, slugName }: Props) {
  const router = usePathname();
  let currentLink = "";

  const handleCrumbLabel = (crumb: string) => {
    switch (crumb) {
      case "gioi-thieu":
        return "về chúng tôi";
      case "lien-he":
        return "liên hệ";
      case "chinh-sach-van-chuyen-thanh-toan":
        return "Chính sách vận chuyển và thanh toán";
      case "chinh-sach-doi-tra-bao-hanh":
        return "Chính sách đổi trả và bảo hành";
      case "danh-sach-san-pham":
        return "Danh sách sản phẩm";
      case "dang-nhap":
        return "Đăng nhập";
      case slug:
        return slugName;

      default:
        return "";
    }
  };

  const crumbs = router
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
              key={currentLink}
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
              Trang chủ
            </Link>
            <span className="mx-2 text-[var(--gray-text)]">/</span>
          </li>
          {crumbs}
        </ol>
      </nav>
    </>
  );
}
