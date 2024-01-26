import "./globals.css";
import "../assets/css/animation.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Providers } from "@/redux/provider";
import { metadataContent } from "@/data/arrays";
import Script from "next/script";
import ScrollTop from "@/components/ScrollTop";
import Pulse from "@/components/Pulse";

export const metadata: Metadata = {
  title: metadataContent.title,
  description: metadataContent.description,
  keywords: metadataContent.keywords,
  openGraph: metadataContent,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;

  return (
    <html lang="en">
      <link rel="icon" href="favicon/favicon.ico" sizes="any" />
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
