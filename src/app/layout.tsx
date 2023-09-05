import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Providers } from "@/redux/provider";
import { metadataContent } from "@/data/arrays";

export const metadata: Metadata = {
  title: metadataContent.title,
  description: metadataContent.description,
  keywords: metadataContent.keywords,
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
      <body suppressHydrationWarning={true}>
        <Providers>
          <div className="container mx-auto">
            <Header />
          </div>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
