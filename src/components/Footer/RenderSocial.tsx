import { FacebookOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Fragment } from "react";

const RenderSocial = (props: { liHover: string }) => {
  const { liHover } = props;

  return (
    <Fragment>
      <h4 className="rock:mb-2 mb-0 mt-11 font-bold uppercase">Mạng xã hội</h4>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Finanhungnguyet%2F&tabs=timeline&width=300&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1651051585404525"
        width={300}
        height={130}
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder={0}
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </Fragment>
  );
};

export default RenderSocial;
