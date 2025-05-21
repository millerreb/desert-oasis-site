import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: "Desert Oasis",
  description: "Expert dermatology care specializing in skin health, treatments, and cosmetic procedures.",
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
      </body>
    </html>
  );
}
