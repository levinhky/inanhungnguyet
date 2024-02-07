import { useTranslations } from "next-intl";
import { ChangeEvent } from "react";

const SortOption = (props: {
  sortOption: string;
  handleSort: (e: ChangeEvent<HTMLSelectElement>) => void;
}) => {
  const { sortOption, handleSort } = props;
  const t = useTranslations("sortBy");

  return (
    <div className="toolbar-sorter mb-7">
      <label htmlFor="options" className="text-xs rock:text-sm">
        {t("title")}:
      </label>
      <select
        id="options"
        defaultValue={sortOption}
        onChange={(e) => handleSort(e)}
        className="mx-3 min-w-[150px] py-2 pr-7 appearance-none pl-3 text-xs rock:text-sm border rock:cursor-pointer rounded-lg font-bold focus:border-[#ccc]"
      >
        <option value="name-asc">{t("productNameASC")}</option>
        <option value="name-desc">{t("productNameDESC")}</option>
        <option value="views-desc">{t("mostViewed")}</option>
      </select>
    </div>
  );
};

export default SortOption;
