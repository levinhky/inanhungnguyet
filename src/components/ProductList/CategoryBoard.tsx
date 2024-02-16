import Link from "next/link";
import { Fragment } from "react";

const CategoryBoard = ({
  categories,
  title,
}: {
  categories: [CategoryAttributes];
  title: string;
}) => {
  
  return (
    <Fragment>
      <h3 className="font-bold pb-2.5 mb-5 border-b border-b-[#ccc] uppercase">
        {title}
      </h3>
      <ul>
        {categories?.length &&
          categories?.map((category) => (
            <li key={category._id} className="mb-1">
              <Link
                className="rock:hover:text-[var(--blue-text)] rock:ease-linear rock:delay-75"
                href={
                  "/category/" + category.slug + "?page=1&limit=8&sort=name-asc"
                }
              >
                {category.name} ({category.productsInCategory.length})
              </Link>
            </li>
          ))}
      </ul>
    </Fragment>
  );
};

export default CategoryBoard;
