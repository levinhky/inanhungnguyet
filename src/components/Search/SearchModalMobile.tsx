import { SearchOutlined } from "@ant-design/icons";
import { memo, useState } from "react";
import Tippy from "@tippyjs/react/headless";
import PopperWrapper from "./PopperWrapper";
import { useTranslations } from "next-intl";
import useDebounce from "@/assets/libs/hooks/useDebounce";

type Props = {
  isActiveSearchModal: boolean;
  setIsActiveSearchModal: (isActiveSearchModal: boolean) => void;
};

const MobilePopperWrapper = ({
  isActiveSearchModal,
  setIsActiveSearchModal,
}: Props) => {
  const [searchValue, setSearchValue] = useState("");
  const t = useTranslations("");

  const searchInputClass =
    "px-3 py-2 h-[44px] bg-[var(--gray-light)] border shadow-sm border-slate-300 placeholder-slate-400 \
       focus:outline-none focus:border-[var(--blue)] block w-full rounded-full text-sm";

  const searchIconClass =
    "action-search min-w-[70px] w-[60px] absolute top-0 bg-[var(--blue)] h-[44px] right-16 rounded-full";
  const valueDebounce = useDebounce(searchValue, 150);

  return (
    isActiveSearchModal && (
      <div
        className="w-screen h-screen rock:hidden
   fixed top-0 right-0 z-50 bg-white px-[15px] py-[20px]"
      >
        <div className="block-search h-[40px] relative rock:hidden">
          <div className="field-search w-full flex items-center">
            <Tippy
              interactive={true}
              visible={true}
              placement="top-start"
              render={(attrs) => (
                <PopperWrapper
                  searchValue={valueDebounce}
                  setSearchValue={setSearchValue}
                  searchHistoryTitle={t("searchHistoryTitle")}
                  searchHistoryEmpty={t("searchHistoryEmpty")}
                  products={t("products")}
                  noResult={t("noResult")}
                  setIsActiveSearchModal={setIsActiveSearchModal}
                  {...attrs}
                />
              )}
            >
              <input
                type="text"
                onInput={(e) => setSearchValue(e.currentTarget.value)}
                value={searchValue}
                className={searchInputClass}
                placeholder={t("search")}
              />
            </Tippy>

            <div className="ml-10 mr-2">
              <button
                onClick={() => {
                  setIsActiveSearchModal(false);
                  setSearchValue("");
                }}
                className="text-[var(--blue-text)] font-bold"
              >
                {t("cancel")}
              </button>
            </div>
          </div>

          <button title={t("searchBtn")} className={searchIconClass}>
            <SearchOutlined className="text-white text-xl" />
          </button>
        </div>
      </div>
    )
  );
};

export default memo(MobilePopperWrapper);
