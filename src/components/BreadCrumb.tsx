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

      default:
        return "";
    }
  };

  const crumbs = router
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += "/" + crumb;

      return (
        <Link
          className="text-black hover:text-gray-700 text-sm capitalize"
          key={crumb}
          href={currentLink}
        >
          {handleCrumbLabel(crumb)}
        </Link>
      );
    });

  return (
    <>
      <nav className="text-sm py-4">
        <ol className="list-none p-0 m-0 flex">
          <li className="flex items-center">
            <Link
              href={"/"}
              className="text-[var(--gray-text)] hover:text-gray-700 text-sm capitalize"
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
