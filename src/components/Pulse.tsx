"use client";
import { pulseIcons } from "@/data/arrays";
import Image from "next/image";
import Link from "next/link";

const PulseIcon: React.FC<{ icon: PulseIcon }> = ({ icon }) => (
  <div
    className={`circle pulse rock:w-11 rock:h-11 w-10 h-10 ${icon.alt === "phone" ? "mb-5" : "mb-8"} ${
      icon.alt === "phone" ? "phone-ring bg-[#66ff99]" : ""
    }`}
  >
    <Link target="_blank" rel="nofollow" href={icon.href}>
      <Image width={100} height={100} src={icon.src} alt={icon.alt} />
    </Link>
  </div>
);

const Pulse: React.FC = () => (
  <section className="fixed rock:left-7 left-3 bottom-0 z-10">
    <style jsx>{`
      .circle {
        border-radius: 50%;
        box-shadow: 0px 0px 1px 1px #0000001a;
      }
    `}</style>
    {pulseIcons.map((icon) => (
      <PulseIcon key={icon.alt} icon={icon} />
    ))}
  </section>
);

export default Pulse;
