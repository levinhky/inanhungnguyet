import "./globals.css";
import type { Metadata } from "next";

const metadataContent = {
  title: "In Ấn Hùng Nguyệt",
  description:
    "Bạn đang tìm một địa chỉ in ly nhựa dùng một lần cho quán cafe, trà sữa uy tín, chất lượng và giá cả hợp lý. Liên hệ ngay cho chúng tôi để có giá tốt nhất thị trường hiện nay. In Ấn Hùng Nguyệt chuyên in các loại bao bì, ly nhựa, ly trà sữa, phong bao ở Kỳ Anh Hà Tĩnh. In ly nhựa giá cực rẻ còn MIỄN PHÍ thiết kế logo - MIỄN PHÍ giao hàng - MIỄN PHÍ tư vấn giải pháp xây dựng bộ nhận diện thương hiệu thông qua bao bì sản phẩm.",
};

export const metadata: Metadata = {
  title: metadataContent.title,
  description: metadataContent.description,
  openGraph: metadataContent,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="favicon/favicon.ico" sizes="any" />
      <body>{children}</body>
    </html>
  );
}
