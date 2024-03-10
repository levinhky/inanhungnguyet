import Link from "next/link";
import { Fragment } from "react";

const RenderPolicy = (props: { liHover: string }) => {
  const { liHover } = props;

  return (
    <Fragment>
      <h4 className="mb-2 mt-11 font-bold uppercase">Chính Sách</h4>
      <ul>
        <li className={`${liHover}`}>
          <Link href={"/huong-dan-dat-hang"}>Hướng dẫn đặt hàng</Link>
        </li>
        <li className={`${liHover}`}>
          <Link href={"/chinh-sach-van-chuyen-thanh-toan"}>
            Chính sách vận chuyển - thanh toán
          </Link>
        </li>
        <li className={`${liHover}`}>
          <Link href={"/chinh-sach-doi-tra-bao-hanh"}>
            Chính sách đổi trả - bảo hành
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default RenderPolicy;
