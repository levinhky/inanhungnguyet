import BreadCrumb from "@/components/BreadCrumb";
import { FacebookOutlined } from "@ant-design/icons";
import Link from "next/link";
type Props = {};

export default function ShippingAndPaymentPolicies({}: Props) {
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
          tương tác :
        </h5>

        <ul className="rock:list-disc list-none">
          <li className="mb-2">
            Website:
            <Link
              className="text-[var(--blue)] ml-1 rock:hover:opacity-80 rock:ease-in-out"
              href={"/"}
            >
              https://inanhungnguyet.com
            </Link>
          </li>
          <li className="mb-2">
            MXH:
            <Link
              href={"https://www.facebook.com/levinhhoa.levinhhoa"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookOutlined className="text-2xl ml-1 text-blue-700" />
            </Link>
          </li>
          <li className="mb-2">
            Email:
            <Link
              className="text-[var(--blue)] ml-1 rock:hover:opacity-80 rock:ease-in-out"
              target="_blank"
              rel="nofollow"
              href={"mailto:inanhungnguyet@gmail.com"}
            >
              inanhungnguyet@gmail.com
            </Link>
          </li>
          <li className="mb-2">
            SĐT/Zalo:
            <Link
              className="text-[var(--blue)] ml-1 rock:hover:opacity-80 rock:ease-in-out"
              target="_blank"
              rel="nofollow"
              href={"tel:0963284451"}
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

        <ul className="rock:list-disc list-none">
          <li className="mb-2 font-semibold">
            Đặt hàng:
            <p className="font-normal my-2">+ Từ 8:00 đến 20:00 hàng ngày</p>
          </li>
          <li className="mb-2 font-semibold">
            Giao hàng:
            <p className="font-normal my-2">+ Buổi sáng: Từ 8:30 đến 12:00</p>
            <p className="font-normal mt-2 mb-5">
              + Buổi chiều: Từ 13:30 đến 20:00
            </p>
            <ul className="rock:list-disc list-none">
              <li className="mb-2 font-normal">
                Đơn hàng đặt: Trả hàng đúng theo lịch hai bên đã hẹn.
              </li>
              <li className="mb-2 font-normal">
                Trường hợp khách quan: Trả hàng sau 3 ngày hoặc có thông báo
                trực tiếp với khách hàng.
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

        <ul className="rock:list-disc list-none">
          <li className="mb-2 font-normal">
            Thanh toán trực tiếp: Ngay sau khi giao và nhận hàng.
          </li>
          <li className="mb-2 font-normal">
            Thanh toán chuyển khoản hoặc Internet Banking.
          </li>
          <li className="mb-2 font-normal">
            Thanh toán trực tiếp: Ngay sau khi giao và nhận hàng.
          </li>
          <li className="mb-2 font-normal">
            Với đơn hàng ngoại tỉnh chúng tôi chỉ nhận thanh toán chuyển khoản
            trước 100% tiền hàng hoặc nhận tiền và giao hàng tại nhà xe do quý
            khách cung cấp.
          </li>
        </ul>
      </section>
    </div>
  );
}
