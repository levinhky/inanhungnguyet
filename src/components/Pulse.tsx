"use client";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Pulse({}: Props) {
  return (
    <section className="fixed rock:left-7 left-3 bottom-0 z-10">
      <style jsx>{`
        .circle {
          border-radius: 50%;
          box-shadow: 0px 0px 1px 1px #0000001a;
        }
      `}</style>
      <div className="circle pulse rock:w-11 rock:h-11 w-10 h-10 mb-8">
        <Link
          target="_blank"
          rel="nofollow"
          href={"https://zalo.me/0867673358"}
        >
          <Image
            width={100}
            height={100}
            src="/icons/zalo.png"
            alt="zaloIcon"
          />
        </Link>
      </div>
      <div className="circle pulse rock:w-11 rock:h-11 w-10 h-10 mb-8">
        <Link
          target="_blank"
          rel="nofollow"
          href={"https://www.messenger.com/t/100033316692112/"}
        >
          <Image
            width={100}
            height={100}
            src="/icons/messenger.png"
            alt="messengerIcon"
          />
        </Link>
      </div>
      <div className="circle pulse rock:w-11 rock:h-11 w-10 h-10 phone-ring bg-[#66ff99] mb-5">
        <Link target="_blank" rel="nofollow" href={"tel:0963284451"}>
          <Image
            width={100}
            height={100}
            src="/icons/phone.png"
            alt="phoneIcon"
          />
        </Link>
      </div>
    </section>
  );
}
