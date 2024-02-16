import { ChangeEvent } from "react";

const SortOption = (props: {
  sortOption: string;
  handleSort: (e: ChangeEvent<HTMLSelectElement>) => void;
}) => {
  const { sortOption, handleSort } = props;

  return (
    <div className="toolbar-sorter mb-7">
      <label htmlFor="options" className="text-xs rock:text-sm">
        Sắp xếp theo:
      </label>
      <select
        id="options"
        defaultValue={sortOption}
        onChange={(e) => handleSort(e)}
        className="mx-3 min-w-[150px] py-2 pr-7 appearance-none pl-3 text-xs rock:text-sm border rock:cursor-pointer rounded-lg font-bold focus:border-[#ccc] outline-none"
      >
        <option value="name-asc">Tên sản phẩm (A tới Z)</option>
        <option value="name-desc">Tên sản phẩm (Z tới A)</option>
        <option value="views-desc">Xem Nhiều</option>
      </select>
    </div>
  );
};

export default SortOption;
