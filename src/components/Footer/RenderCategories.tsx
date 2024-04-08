import { getCategoryLink } from "@/utils/common";
import Link from "next/link";
import { Fragment } from "react";

const RenderCategories = (props: { categories: CategoryAttributes[]; liHover: string }) => {
  const { categories, liHover } = props;

  return (
    <Fragment>
      <h4 className="mb-2 mt-11 font-bold uppercase">Sản Phẩm</h4>
      <ul>
        {categories.length &&
          categories.map((category) => (
            <li key={category._id} className={`${liHover}`}>
              <Link href={getCategoryLink(category)}>{category.name}</Link>
            </li>
          ))}
      </ul>
    </Fragment>
  );
};

export default RenderCategories;
