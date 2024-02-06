import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { Fragment } from "react";

const RenderCategories = (props: { categories: CategoryAttributes[]; liHover: string }) => {
  const { categories, liHover } = props;
  const t = useTranslations("");

  return (
    <Fragment>
      <h4 className="mb-2 mt-11 font-bold uppercase">{t("products")}</h4>
      <ul>
        {categories.length &&
          categories.map((category) => (
            <li key={category._id} className={`${liHover}`}>
              <Link href={"/category/" + category.slug}>{category.name}</Link>
            </li>
          ))}
      </ul>
    </Fragment>
  );
};

export default RenderCategories;
