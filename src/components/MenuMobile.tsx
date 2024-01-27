import { menuItems } from "@/data/arrays";
import { CloseOutlined } from "@ant-design/icons";
import { Link } from "@/navigation";

type Props = {
  isActiveMenu: boolean;
  handleMenuMobile: (isActiveMenu: boolean) => void;
};

export default function MenuMobile({ isActiveMenu, handleMenuMobile }: Props) {
  const liClassNameMobile =
    "text-sm uppercase text-[var(--blue)] font-semibold py-2.5 px-1";

  return (
    <>
      <style jsx>{`
        #menu-mobile {
          transition: left 0.25s ease-in-out, opacity 0.25s ease-in-out;
        }
      `}</style>
      <div
        id="menu-mobile"
        className={`rock:hidden w-screen h-screen
      fixed top-0 right-auto z-50 bg-white px-[15px] py-[20px] 
      ${
        !isActiveMenu
          ? "-left-full opacity-50 invisible"
          : "left-0 opacity-100 visible"
      }`}
      >
        <button
          onClick={() => handleMenuMobile(false)}
          className="w-[40px] h-[40px] bg-[var(--blue)] text-white text-lg rounded-full flex items-center justify-center"
        >
          <CloseOutlined />
        </button>
        <ul className="p-2.5 border-2 border-[var(--gray-light)] rounded mt-3">
          {menuItems.map((item) => (
            <li className={liClassNameMobile} key={item.id}>
              <Link onClick={() => handleMenuMobile(false)} href={item.url}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
