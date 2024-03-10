import BreadCrumb from "@/components/BreadCrumb";
import { FacebookOutlined } from "@ant-design/icons";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Hướng dẫn đặt hàng - In Ấn Hùng Nguyệt",
    description:
      "đặt hàng ly nhựa online, đặt hàng bao bì online, in nhanh kỳ anh",
  };
}

export default function OrderGuidePage() {
  return (
    <div className="container mx-auto">
      <BreadCrumb />
      <div id="content">
        <h1 className="rock:text-3xl text-2xl text-center rock:mb-4 mb-3">
          Hướng dẫn đặt hàng tại In Ấn Hùng Nguyệt
        </h1>

        <section>
          <h6 className="rock:my-5 my-3 font-semibold uppercase">
            1. Đặt hàng online:
          </h6>

          <h5 className="mb-2 ">
            - Khách hàng có thể gửi file thiết kế, tài liệu đặt in qua:
          </h5>

          <ul>
            <li className="mb-2">
              + Mạng xã hội:
              <Link
                href={"https://www.facebook.com/levinhhoa.levinhhoa"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookOutlined className="text-2xl ml-1 text-blue-700" />
              </Link>
            </li>
            <li className="mb-2">
              + Email:
              <Link
                className="text-[var(--blue)] ml-1 rock:hover:opacity-80 rock:ease-in-out"
                target="_blank"
                rel="nofollow"
                href={`mailto:inanhungnguyet@gmail.com`}
              >
                inanhungnguyet@gmail.com
              </Link>
            </li>
            <li className="mb-2">
              + Phone/Zalo:
              <Link
                className="text-[var(--blue)] ml-1 rock:hover:opacity-80 rock:ease-in-out"
                target="_blank"
                rel="nofollow"
                href={"tel:0867673358"}
              >
                086.767.3358
              </Link>
            </li>
          </ul>

          <h5 className="mb-2 ">
            - Khi đặt hàng cần cung cấp các thông tin như sau:
          </h5>

          <ul>
            <li className="mb-2">+ Số lượng sản phẩm</li>
            <li className="mb-2">+ Khổ in thành phẩm</li>
            <li className="mb-2">+ Chủng loại cần in</li>
          </ul>

          <p className="mb-2 font-bold">
            * Trường hợp file đặt in dung lượng lớn khách hàng có thể liên hệ
            với chúng tôi để nhận hướng dẫn cách chuyển file.
          </p>
        </section>

        <section>
          <h6 className="rock:my-5 my-3 font-semibold uppercase">
            2. Đặt trực tiếp tại cửa hàng:
          </h6>

          <p className="mb-2">
            * Khách hàng có thể đến trực tiếp cửa hàng chúng tôi tại địa chỉ:{" "}
            <b>11 Hà Hoa, Phường Hưng Trí, Thị xã Kỳ Anh, Hà Tĩnh.</b>
          </p>

          <p className="mb-2">
            * Cũng như khi đặt hàng <b>ONLINE</b>, khách hàng cần cung cấp đầy
            đủ thông tin sản xuất cho kỹ thuật và tiến hành lập đơn hàng ngay
            tại xưởng in
          </p>

          <h3 className="mb-2 font-bold">
            Chúc quý khách có một trải nghiệm dịch vụ tốt nhất tại In Ấn Hùng
            Nguyệt
          </h3>
        </section>
      </div>
    </div>
  );
}
