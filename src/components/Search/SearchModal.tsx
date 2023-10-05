import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import PopperWrapper from "./PopperWrapper";

type Props = {
  isActiveSearchModal: boolean;
  setIsActiveSearchModal: (isActiveSearchModal: boolean) => void;
};

export default function MobilePopperWrapper({
  isActiveSearchModal,
  setIsActiveSearchModal,
}: Props) {
  const [searchValue, setSearchValue] = useState("");

  const searchInputClass =
    "px-3 py-2 h-[44px] bg-[var(--gray-light)] border shadow-sm border-slate-300 placeholder-slate-400 \
       focus:outline-none focus:border-[var(--blue)] block w-full rounded-full text-sm";

  const searchIconClass =
    "action-search min-w-[70px] w-[60px] absolute top-0 bg-[var(--blue)] h-[44px] right-16 rounded-full";

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
              visible={searchValue.length > 0}
              render={(attrs) => <PopperWrapper {...attrs} />}
            >
              <input
                type="text"
                onInput={(e) => setSearchValue(e.currentTarget.value)}
                value={searchValue}
                className={searchInputClass}
                placeholder="Tìm sản phẩm mong muốn ..."
              />
            </Tippy>

            <div className="ml-10 mr-2">
              <button
                onClick={() => setIsActiveSearchModal(false)}
                className="text-[var(--blue-text)] font-bold"
              >
                Hủy
              </button>
            </div>
          </div>

          <button title="Tìm kiếm" className={searchIconClass}>
            <SearchOutlined className="text-white text-xl" />
          </button>
        </div>
      </div>
    )
  );
}
