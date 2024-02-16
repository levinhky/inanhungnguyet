import BreadCrumb from "@/components/BreadCrumb";

export default function AboutUsPage() {
  const welcome =
    "Chào mừng bạn đến với Xưởng In ấn Hùng Nguyệt! Chúng tôi là một xưởng in ấn mới được thành lập, nhưng chúng tôi đã nhanh chóng xây dựng được danh tiếng và khẳng định mình trong lĩnh vực này. Chúng tôi tự hào mang đến cho khách hàng những sản phẩm in ấn chất lượng cao và dịch vụ đáng tin cậy.";
  const vision =
    "Tầm nhìn của chúng tôi là trở thành một trong những xưởng in ấn hàng đầu và tin cậy nhất trên thị trường. Chúng tôi cam kết đáp ứng các yêu cầu đa dạng của khách hàng và mang đến cho họ những giải pháp in ấn hiệu quả và sáng tạo.";
  const service =
    "Chúng tôi cung cấp các dịch vụ in ấn đa dạng, bao gồm in trên các vật liệu như giấy, nhựa, vải, bao bì và nhiều loại sản phẩm khác. Bằng cách sử dụng công nghệ in ấn tiên tiến và trang thiết bị hiện đại, chúng tôi đảm bảo rằng màu sắc và hình ảnh trên sản phẩm in ấn đều rõ ràng, sắc nét và chất lượng cao.";
  const satisfaction =
    "Chúng tôi không chỉ tập trung vào việc cung cấp sản phẩm in ấn chất lượng, mà còn đặt sự hài lòng của khách hàng lên hàng đầu. Chúng tôi lắng nghe và tương tác chặt chẽ với khách hàng để hiểu rõ nhu cầu và yêu cầu của họ. Chúng tôi đồng hành cùng khách hàng từ giai đoạn thiết kế ban đầu cho đến quy trình in ấn và giao hàng cuối cùng.";
  const value =
    "Với cam kết đem lại giá trị và sự tận hưởng cho khách hàng, chúng tôi không ngừng nỗ lực để tạo ra những sản phẩm in ấn độc đáo và ấn tượng. Chúng tôi tin rằng sự sáng tạo và chất lượng là yếu tố quan trọng để đáp ứng và vượt qua sự mong đợi của khách hàng.";
  const visitUs =
    "Hãy đến với Xưởng In ấn Hùng Nguyệt nếu bạn đang tìm kiếm một đối tác in ấn chuyên nghiệp và đáng tin cậy. Chúng tôi sẵn lòng hỗ trợ và đồng hành cùng bạn trong mọi dự án in ấn.";

  return (
    <div className="container mx-auto">
      <BreadCrumb />
      <div id="content">
        <h3 className="rock:text-3xl text-2xl text-center rock:mb-4 mb-3">
          Giới thiệu về In Ấn Hùng Nguyệt
        </h3>

        <div id="desc">
          <p className="mb-2 text-sm rock:text-base">{welcome}</p>
          <p className="mb-2 text-sm rock:text-base">{vision}</p>
          <p className="mb-2 text-sm rock:text-base">{service}</p>
          <p className="mb-2 text-sm rock:text-base">{satisfaction}</p>
          <p className="mb-2 text-sm rock:text-base">{value}</p>
          <p className="mb-2 text-sm rock:text-base">{visitUs}</p>
        </div>
      </div>
    </div>
  );
}
