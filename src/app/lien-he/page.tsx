import BreadCrumb from "@/components/BreadCrumb";
import { HomeOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import Link from "next/link";

type Props = {};

export default function page({}: Props) {
  const inputClass =
    "mt-1 px-3 py-2 bg-white border shadow-sm border-slate-200 placeholder-slate-400 \
    focus:outline-none focus:border-gray-50 focus:ring-gray-400 block w-full rounded-md text-sm \
    focus:ring-1";
  const labelClass =
    "after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm text-slate-700 \
    font-semibold ";

  return (
    <section className="container mx-auto">
      <BreadCrumb />
      <div className="flex justify-center">
        <div id="contact-info" className="mr-7">
          <h3 className="text-xl uppercase font-bold mb-3 text-[var(--blue)]">
            Thông tin liên hệ
          </h3>
          <div id="info">
            <div className="flex items-center hover:text-[var(--red)] mb-1 ease-linear rock:mt-0 mt-[-50px]">
              <HomeOutlined />
              <Link
                href={
                  "https://www.google.com/maps/dir/10.8033963,106.658688/in+an+hung+nguyet+ha+tinh/@18.0724365,106.2903199,19.14z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31388948dcf87421:0xc10528616cfbea97!2m2!1d106.290364!2d18.0725428?entry=ttu"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 rock:text-base text-sm"
              >
                11 Hà Hoa, P.Hưng Trí, Tx.Kỳ Anh, Hà Tĩnh
              </Link>
            </div>

            <div className="flex items-center hover:text-[var(--red)] mb-1 ease-linear">
              <MailOutlined />
              <Link
                target="_blank"
                rel="nofollow"
                href={"mailto:inanhungnguyet@gmail.com"}
                className="ml-1 rock:text-base text-sm"
              >
                inanhungnguyet@gmail.com
              </Link>
            </div>

            <div className="flex items-center hover:text-[var(--red)] mb-1 ease-linear">
              <PhoneOutlined />
              <Link
                target="_blank"
                rel="nofollow"
                href={"tel:0963284451"}
                className="ml-1 rock:text-base text-sm"
              >
                086.767.3358
              </Link>
            </div>
          </div>
          <div id="map" className="mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6813.256476915743!2d106.2820299770067!3d18.071428991211985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31388948dcf87421%3A0xc10528616cfbea97!2zSW4g4bqkbiBIw7luZyBOZ3V54buHdA!5e0!3m2!1svi!2s!4v1693733980152!5m2!1svi!2s"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div id="send-info">
          <h3 className="w-fit mx-auto border-[var(--red)] border-b capitalize text-[var(--blue)] text-2xl font-bold mb-2">
            Gửi thông tin
          </h3>

          <p className="text-center mb-5">
            Bạn hãy điền nội dung tin nhắn vào form dưới đây và gửi cho chúng
            tôi. Chúng tôi sẽ trả lời bạn sau khi nhận được.
          </p>

          <form action="">
            <div className="flex">
              <div className="form-group mb-4 w-full mr-3">
                <label className="block">
                  <span className={labelClass}>Họ và tên</span>
                  <input
                    type="fullname"
                    name="fullname"
                    className={inputClass}
                  />
                </label>
              </div>
              <div className="form-group mb-4 w-full">
                <label className="block">
                  <span className={labelClass}>Email</span>
                  <input
                    type="email"
                    name="email"
                    className={inputClass}
                  />
                </label>
              </div>
            </div>

            <div className="form-group mb-4">
              <label className="block">
                <span className={labelClass}>Điện thoại</span>
                <input
                  type="phone"
                  name="phone"
                  className={inputClass}
                />
              </label>
            </div>

            <div className="form-group mb-4">
              <label className="block">
                <span className={labelClass}>Nội dung</span>
                <textarea
                  name="content"
                  className={inputClass}
                />
              </label>
            </div>
          </form>

          <button className="h-10 w-36 border border-[var(--blue)] text-[var(--blue)] uppercase
           hover:bg-[var(--blue)] hover:text-white ease-in-out delay-75 rounded">Gửi ngay</button>
        </div>
      </div>
    </section>
  );
}
