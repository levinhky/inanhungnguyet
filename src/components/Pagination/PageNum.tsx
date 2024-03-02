type Props = {
  handlePage: (page: number) => void;
  page: number;
  currentPage: number;
};

const PageNum = ({ handlePage, page, currentPage }: Props) => {
  return (
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
  );
};

export default PageNum;
