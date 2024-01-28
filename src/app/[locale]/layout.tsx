import "./globals.css";
import "@/assets/css/animation.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Providers } from "@/redux/provider";
import { metadataContent } from "@/data/arrays";
import Script from "next/script";
import ScrollTop from "@/components/ScrollTop";
import Pulse from "@/components/Pulse";
import Header from "@/components/Header/Header";
import NavBar from "@/components/Nav/NavBar";
import { locales } from "@/navigation";
import { unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";

export const metadata: Metadata = {
  title: metadataContent.title,
  description: metadataContent.description,
  keywords: metadataContent.keywords,
  openGraph: metadataContent,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale}>
      <link rel="icon" href="favicon/favicon.ico" sizes="any" />
      <body suppressHydrationWarning={true}>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <div className="container mx-auto">
              <Header />
            </div>
            <NavBar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </Providers>
        <ScrollTop />
        <Pulse />
      </body>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `}
      </Script>
    </html>
  );
}
