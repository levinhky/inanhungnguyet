"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

export default function BreadCrumb({}: Props) {
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
          <Link
            className={`${
              !isLast ? "text-[var(--gray-text)]" : "text-black"
            } rock:hover:text-gray-700 text-sm capitalize`}
            key={currentLink}
            href={currentLink}
          >
            {handleCrumbLabel(crumb)}
          </Link>
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
              className="text-[var(--gray-text)] rock:hover:text-gray-700 text-sm capitalize"
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
