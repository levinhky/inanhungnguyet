import { FacebookOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Fragment } from "react";

const RenderSocial = (props: { liHover: string }) => {
  const { liHover } = props;

  return (
    <Fragment>
      <h4 className="rock:mb-2 mb-0 mt-11 font-bold uppercase">Mạng xã hội</h4>
      <ul>
        <li className={`${liHover}`}>
          <Link
            href={"https://www.facebook.com/levinhhoa.levinhhoa"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlined className="text-2xl text-blue-700" />
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default RenderSocial;
