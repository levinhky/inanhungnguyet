import NextButton from "./NextButton";
import PageNum from "./PageNum";
import PrevButton from "./PrevButton";

type Props = {
  currentPage: number;
  totalPages: number;
  pagination: number[];
  handlePage: (page: number) => void;
  handlePrev: () => void;
  handleNext: () => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  pagination,
  handlePage,
  handlePrev,
  handleNext,
}: Props) => {
  return (
    <nav aria-label="Navigation" className="mt-7 flex justify-end">
      <ul className="flex items-center -space-x-px h-10 text-base">
        {currentPage > 1 && <PrevButton handlePrev={handlePrev} />}
        {pagination.length &&
          pagination.map((page: number) => (
            <PageNum key={page} handlePage={handlePage} page={page} currentPage={currentPage} />
          ))}
        {currentPage < totalPages && <NextButton handleNext={handleNext} />}
      </ul>
    </nav>
  );
};

export default Pagination;
