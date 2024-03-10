import BreadCrumb from "@/components/BreadCrumb";
import { FacebookOutlined } from "@ant-design/icons";
import Link from "next/link";

type Props = {};

export default function ShippingAndPaymentPoliciesPage({}: Props) {
  return (
    <div className="container mx-auto rock:text-base text-sm">
      <BreadCrumb />
      <h1 className="font-bold rock:text-2xl text-xl">
        Chính sách vận chuyển và thanh toán của In Ấn Hùng Nguyệt
      </h1>

      <section>
        <h6 className="rock:my-5 my-3  font-semibold">1. Dịch vụ tương tác:</h6>

        <h5 className="mb-2 ">
          Tất cả các khách hàng khi mua sỉ, lẻ tại In Ấn Hùng Nguyệt có thể
          tương tác:
        </h5>

        <ul>
          <li className="mb-2">
            &bull; Website:
            <Link
              className="text-[var(--blue)] ml-1 rock:hover:opacity-80 rock:ease-in-out"
              href={"/"}
            >
              https://inanhungnguyet.com
            </Link>
          </li>
          <li className="mb-2">
            &bull; Mạng xã hội:
            <Link
              href={"https://www.facebook.com/inanhungnguyet"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookOutlined className="text-2xl ml-1 text-blue-700" />
            </Link>
          </li>
          <li className="mb-2">
            &bull; Email:
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
            &bull; Phone/Zalo:
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
      </section>

      <section>
        <h6 className="rock:my-5 my-3  font-semibold">
          2. Thời gian giao hàng và đặt hàng:
        </h6>

        <ul>
          <li className="mb-2 font-semibold">
            &bull; Đặt hàng từ:
            <p className="font-normal my-2">+ Từ 8:00 đến 20:00 hàng ngày</p>
          </li>
          <li className="mb-2 font-semibold">
            &bull; Giao hàng từ:
            <p className="font-normal my-2">+ Buổi sáng: Từ 8:30 đến 12:00</p>
            <p className="font-normal mt-2 mb-5">
              + Buổi chiều: Từ 13:30 đến 20:00
            </p>
            <ul>
              <li className="mb-2 font-normal">
                &bull; Đơn hàng đặt: Trả hàng đúng theo lịch hai bên đã hẹn.
              </li>
              <li className="mb-2 font-normal">
                &bull; Trường hợp khách quan: Trả hàng sau 3 ngày hoặc có thông
                báo trực tiếp với khách hàng.
              </li>
            </ul>
            <p className="font-normal my-2">
              Với những khách hàng tại chung cư cao tầng, cơ quan, văn phòng,
              nhà hàng ở trên cao vui lòng nhận hàng tại tầng trệt hoặc nơi nhận
              thuận tiện nhất.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h6 className="rock:my-5 my-3  font-semibold">
          3. Phương thức thanh toán:
        </h6>

        <ul>
          <li className="mb-2 font-normal">
            &bull; Thanh toán trực tiếp: Ngay sau khi giao và nhận hàng.
          </li>
          <li className="mb-2 font-normal">&bull; Thanh toán chuyển khoản.</li>
          <li className="mb-2 font-normal">
            &bull; Với đơn hàng ngoại tỉnh, chúng tôi chỉ nhận thanh toán chuyển
            khoản trước 100% tiền hàng hoặc nhận tiền và giao hàng tại nhà xe do
            quý khách cung cấp.
          </li>
        </ul>
      </section>
    </div>
  );
}
