import { usePathname, useRouter } from "next/navigation";

const Pagination = ({
  currentPage,
  totalPages,
  pagination,
  limit,
}: {
  currentPage: number;
  totalPages: number;
  pagination: number[];
  limit: number;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handlePage = (page: number) => {
    router.push(`${pathname}?page=${page}&limit=${limit}`);
  };

  const handlePrev = () => {
    const page = currentPage > 1 ? currentPage - 1 : 1;
    router.push(`${pathname}?page=${page}&limit=${limit}`);
  };

  const handleNext = () => {
    const page = currentPage < totalPages ? currentPage + 1 : totalPages;
    router.push(`${pathname}?page=${page}&limit=${limit}`);
  };

  return (
    <nav aria-label="Navigation" className="mt-7 flex justify-end">
      <ul className="flex items-center -space-x-px h-10 text-base">
        {currentPage > 1 && (
          <li>
            <button
              onClick={handlePrev}
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight
     text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg 
     rock:hover:bg-gray-100 rock:hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700
      dark:text-gray-400 dark:rock:hover:bg-gray-700 dark:rock:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </button>
          </li>
        )}
        {pagination.length &&
          pagination.map((page: number) => (
            <li>
              <button
                onClick={() => handlePage(page)}
                className={`flex items-center justify-center px-4 h-10 leading-tight  border
         border-gray-300  dark:bg-gray-800 dark:border-gray-700 
         dark:text-gray-400 dark:rock:hover:bg-gray-700 dark:rock:hover:text-white ${
           currentPage === page
             ? "bg-[var(--blue)] text-white"
             : "bg-white text-gray-500 rock:hover:bg-gray-100 rock:hover:text-gray-700"
         }`}
              >
                {page}
              </button>
            </li>
          ))}
        {currentPage < totalPages && (
          <li>
            <button
              onClick={handleNext}
              className="flex items-center justify-center px-4 h-10 leading-tight 
    text-gray-500 bg-white border border-gray-300 rounded-e-lg rock:hover:bg-gray-100 
    rock:hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400
     dark:rock:hover:bg-gray-700 dark:rock:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
