import { useTranslations } from "next-intl";
import { ChangeEvent, useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SortOption = () => {
  const [sortOption, setSortOption] = useState<string>("name-asc");
  const t = useTranslations("sortBy");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
    router.push(pathname + "?" + createQueryString("sort", e.target.value));
  };

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
