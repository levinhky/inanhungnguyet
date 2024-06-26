import "./globals.css";
import "@/assets/css/animation.css";
import Script from "next/script";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Providers } from "@/redux/provider";
import ScrollTop from "@/components/ScrollTop";
import Pulse from "@/components/Pulse";
import Header from "@/components/Header";
import NavBar from "@/components/Nav";
import { metadataContent } from "@/utils/data";

export const metadata: Metadata = {
  title: metadataContent.title,
  description: metadataContent.description,
  keywords: metadataContent.keywords,
  openGraph: metadataContent,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;

  return (
    <html lang="vi">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body suppressHydrationWarning={true}>
          <Providers>
            <div className="container mx-auto">
              <Header />
            </div>
            <NavBar />
            {children}
            <Footer />
          </Providers>
        <ScrollTop />
        <Pulse />
      </body>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
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
