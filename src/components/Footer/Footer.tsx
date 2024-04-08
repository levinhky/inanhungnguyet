import { getCategories } from "@/config/apiConfig";
import RenderPolicy from "./RenderPolicy";
import RenderCategories from "./RenderCategories";
import RenderLogo from "./RenderLogo";
import RenderContact from "./RenderContact";
import RenderSocial from "./RenderSocial";

type Props = {};

export default async function Footer({}: Props) {
  const liHover = "rock:hover:text-[var(--red)] ease-linear";
  const mobileClasss = "flex items-start flex-col rock:mt-0 mt-[-50px]";
  const categoryResponse = await getCategories(1, 5);
  const categories = categoryResponse.categories;

  return (
    <footer className="bg-[#f6f6f6] mt-10 pb-5 rock:pb-5 rock:text-base text-sm">
      <div className="flex rock:justify-around container mx-auto flex-wrap">
        <div className="rock:mb-0 mb-5">
          <RenderLogo />
          <RenderContact liHover={liHover} />
        </div>

        {/* --- DESKTOP SECTION --- */}
        <div className="rock:flex items-start flex-col  hidden rock:mt-0 mt-[-50px] rock:mr-0 mr-8 mb-5 rock:mb-0">
          <RenderCategories categories={categories} liHover={liHover} />
        </div>

        <div className="rock:flex hidden items-start flex-col rock:mt-0 mt-[-50px]">
          <RenderPolicy liHover={liHover} />
        </div>
        {/* --- END DESKTOP SECTION --- */}

        {/* --- MOBILE SECTION --- */}
        <div className="rock:hidden flex justify-between w-full">
          <div className={`${mobileClasss} rock:mr-0 mb-5 rock:mb-0`}>
            <RenderCategories categories={categories} liHover={liHover} />
          </div>

          <div className={mobileClasss}>
            <RenderPolicy liHover={liHover} />
          </div>
        </div>
        {/* END MOBILE SECTION --- */}

        <div className={mobileClasss}>
          <RenderSocial liHover={liHover} />
        </div>
      </div>
    </footer>
  );
}
