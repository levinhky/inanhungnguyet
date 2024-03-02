type Props = {
  handlePrev: () => void;
};

const PrevButton = ({ handlePrev }: Props) => {
  return (
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
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
        </svg>
      </button>
    </li>
  );
};

export default PrevButton;
