import { HomeOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Fragment } from "react";

const RenderContact = (props: { liHover: string }) => {
  const { liHover } = props;

  return (
    <Fragment>
      <ul>
        <li className={`flex items-center mb-1 ${liHover}`}>
          <HomeOutlined />
          <Link
            href={
              "https://www.google.com/maps/dir/10.8033963,106.658688/in+an+hung+nguyet+ha+tinh/@18.0724365,106.2903199,19.14z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31388948dcf87421:0xc10528616cfbea97!2m2!1d106.290364!2d18.0725428?entry=ttu"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 "
          >
            11 Hà Hoa, P.Hưng Trí, Tx.Kỳ Anh, Hà Tĩnh
          </Link>
        </li>
        <li className={`flex items-center mb-1 ${liHover}`}>
          <MailOutlined />
          <Link
            target="_blank"
            rel="nofollow"
            href={`mailto:inanhungnguyet@gmail.com`}
            className="ml-1 "
          >
            inanhungnguyet@gmail.com
          </Link>
        </li>
        <li className={`flex items-center mb-1 ${liHover}`}>
          <PhoneOutlined />
          <Link
            target="_blank"
            rel="nofollow"
            href={"tel:0867673358"}
            className="ml-1 "
          >
            086.767.3358
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default RenderContact;
