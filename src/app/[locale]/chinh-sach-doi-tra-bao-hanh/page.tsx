import BreadCrumb from "@/components/BreadCrumb";
import { useTranslations } from "next-intl";
import Link from "next/link";

type Props = {};

export default function ReturnAndWarrantyPolicyPage({}: Props) {
  const t = useTranslations("");

  return (
    <div className="container mx-auto rock:text-base text-sm">
      <BreadCrumb />
      <h1 className="font-bold rock:text-2xl text-xl">
        {t("returnAndWarrantyPolicy.of", {
          policy: t("policy.title"),
          storeName: t("storeName"),
        })}
      </h1>

      <h3 className="italic my-4 ">
        <div
          dangerouslySetInnerHTML={{
            __html: t.raw("returnAndWarrantyPolicy.effort"),
          }}
        />
      </h3>

      <section>
        <h6 className="my-3 font-semibold">► Điều kiện áp dụng:</h6>
        <h5 className="rock:my-5 my-3 ">
          &ndash; Sản phẩm được bảo hành miễn phí trong thời gian sử dụng{" "}
          <b>tương ứng</b> trong các trường hợp sau:
        </h5>
        <ul>
          <li className="rock:mb-2 mb-1">
            &bull; Lỗi do sản xuất, không đóng gói theo quy cách, thiếu sản phẩm
            hoặc chất lượng sản phẩm không như cam kết.
          </li>
          <li className="rock:mb-2 mb-1">
            &bull; Lỗi do quá trình vận chuyển từ phía công ty chúng tôi đến quý
            khách hàng.
          </li>
        </ul>
        <h5 className="rock:my-5 my-3 ">
          &ndash; In Ấn Hùng Nguyệt <b>từ chối</b> bảo hành sản phẩm đối với các
          trường hợp:
        </h5>
        <ul>
          <li className="rock:mb-2 mb-1 ">
            &bull; Sản phẩm không phải do In Ấn Hùng Nguyệt Sản xuất, Cung cấp
            hoặc do lỗi do quý Khách hàng tác động hoặc do thiên tai hỏa hoạn.
          </li>
          <li className="rock:mb-2 mb-1 ">
            &bull; Sản phẩm bị hư hỏng và lỗi từ phía khách hàng gây nên như
            trầy xước, sản phẩm không còn nguyên vẹn do các tác động ngoại lực
            hoặc bị ảnh hưởng bởi thời tiết (gió, mưa) trong quá trình sử dụng.
          </li>
        </ul>
        <h5 className="mb-2 ">
          &ndash; Trong mọi trường hợp, quyết định của In Ấn Hùng Nguyệt là
          quyết định cuối cùng.
        </h5>
        <h5>
          {" "}
          &ndash; Lưu ý: Tránh để xảy ra những trường hợp không mong muốn, khi
          nhận sản phẩm quý khách nên kiểm tra kỹ sản phẩm, quy cách đóng gói và
          chất lượng sản phẩm.
        </h5>
      </section>

      <div id="map" className="my-7">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6813.256476915743!2d106.2820299770067!3d18.071428991211985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31388948dcf87421%3A0xc10528616cfbea97!2zSW4g4bqkbiBIw7luZyBOZ3V54buHdA!5e0!3m2!1svi!2s!4v1693733980152!5m2!1svi!2s"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="rock:w-[600px] rock:h-[450px] w-full h-full"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <h3>
        <b>
          In Ấn Hùng Nguyệt luôn mong muốn mang đến cho khách những sự hài lòng
          tuyệt đối nhất!
        </b>
      </h3>
      <h3 className="mt-3 ">
        <b>Hotline:</b>{" "}
        <Link target="_blank" rel="nofollow" href={"tel:0867673358"}>
          {t("mainPhoneNumber")}
        </Link>
      </h3>
    </div>
  );
}
