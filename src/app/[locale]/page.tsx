"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useTransition } from "react";

export default function Home() {
  const t = useTranslations("Index");
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: lang });
    });
  };

  return (
    <div
      className="w-full h-screen bg-orange-500 text-black 
 flex flex-col justify-center items-center"
    >
      <h1 className="text-8xl">{t("title")}</h1>
      <label htmlFor="language" className="text-2xl mt-2">
        {t("select")}
      </label>
      <select
        name="language"
        id="language"
        defaultValue={locale}
        onChange={handleSelect}
        className="bg-black text-white rounded py-1 px-2 outline-none"
      >
        {["en", "fr"].map((cur) => (
          <option key={cur} value={cur}>
            {t("locale", { locale: cur })}
          </option>
        ))}
      </select>
    </div>
  );
}
