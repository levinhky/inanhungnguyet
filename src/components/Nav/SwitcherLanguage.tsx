import { useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useRouter } from "@/navigation";
import { usePathname } from "next/navigation";

type Props = {};
function SwitcherLanguage({}: Props) {
  const [isOpenSelectLanguage, setIsOpenSelectLanguage] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const languageCode = pathname.split("/")[1];
  const url = pathname.replace(/^\/(vi|en)(\/|$)/, "/");

  const handleLanguageChange = () => {
    setIsOpenSelectLanguage(!isOpenSelectLanguage);
    router.push(url, { locale: languageCode === "vi" ? "en" : "vi" });
  };

  return (
    <div className="switcher-language cursor-pointer relative">
      <div
        className={`text-[var(--white)] language flex items-center ${
          languageCode === "vi" ? "vi-flag" : "en-flag"
        }`}
        onClick={() => setIsOpenSelectLanguage(!isOpenSelectLanguage)}
      >
        {languageCode === "en" ? "ENG" : "VIE"}
        {isOpenSelectLanguage ? (
          <UpOutlined className="ml-1" />
        ) : (
          <DownOutlined className="ml-1 text-sm" />
        )}
      </div>
      {isOpenSelectLanguage && (
        <div
          onClick={() => handleLanguageChange()}
          className={`text-[var(--white)] language flex items-center  ${
            languageCode === "vi" ? "en-flag" : "vi-flag"
          } absolute top-11 -right-2 bg-white rounded-md px-3 h-11 w-24 shadow-md z-10`}
        >
          <p className="text-[var(--blue-text)]">
            {languageCode === "vi" ? "ENG" : "VIE"}
          </p>
        </div>
      )}
    </div>
  );
}

export default SwitcherLanguage;
