import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { defaultSeo, SITE_URL } from "@/lib/seo";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: defaultSeo.title,
  description: defaultSeo.description,
  icons: {
    icon: "/image/Fav-icon.png", 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${poppins.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
         <Script id="klara-config" strategy="afterInteractive">
          {`
            window.klaraWidget = window.klaraWidget || [];
            window.klaraWidget.push(["setWidgetId", "d0c1e4c8-cd86-4d39-bf00-7a6543266904"]);
          `}
        </Script>
        <Script
          src="https://s3.amazonaws.com/widget-frontend.klara.com/bundle.js"
          strategy="afterInteractive"
        />

      </body>
    </html>
  );
}
