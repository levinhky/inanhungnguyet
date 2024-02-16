import Image from "next/image";
import Link from "next/link";

const RenderLogo = () => {
  return (
    <Link href={"/"} className="logo rock:mt-0 mt-[-40px]">
      <Image
        src={"/logo.svg"}
        alt="inanhungnguyetlogo"
        className="rock:-mt-5 -mb-8"
        width={150}
        height={150}
        priority={true}
      />
    </Link>
  );
};

export default RenderLogo;
