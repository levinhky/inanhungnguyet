import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div
        className="lg:px-12 lg:py-12 md:py-20 md:px-44 mb-36 px-4 rock:pt-4 pt-8 rock:pb-8 pb-20 
      items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16"
      >
        <div className="xl:pt-5 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div className="mt-[150px]">
                <h3 className="my-2 text-gray-800 font-bold text-2xl">
                  Trang không tìm thấy
                </h3>
                <p className="my-2 text-gray-800">
                  Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di
                  chuyển.
                </p>
                <button
                  className="sm:w-full lg:w-auto my-2 border-2 border-[var(--blue)] rounded-full md py-4 px-8 text-center
                 bg-white text-[var(--blue)] font-bold
                 rock:hover:bg-[var(--blue)] rock:hover:text-white ease-in-out"
                >
                  <Link href={"/"}>Trang chủ</Link>
                </button>
              </div>
            </div>
            <div>
              <Image src="/404.png" width={300} height={190} alt="404" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
