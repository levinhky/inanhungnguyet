"use client";

import { ArrowUpOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

type Props = {};

export default function ScrollTop({}: Props) {
  const [isShowTopBtn, setIsShowTopBtn] = useState(false);
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsShowTopBtn(true);
      } else {
        setIsShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-10 right-10 cursor-pointer">
      {isShowTopBtn && (
        <ArrowUpOutlined
          onClick={handleScrollTop}
          className="text-white w-9 h-9 bg-[var(--blue)] rounded-full 
      flex items-center justify-center 
      rock:hover:opacity-70 rock:ease-in-out"
        />
      )}
    </div>
  );
}
