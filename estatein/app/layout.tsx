import type { Metadata } from "next";
// import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// const urbanist = Urbanist({
//   variable: "--font-urbanist",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Estatein",
  description: "Website for the sale of real estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`h-full antialiased`}
    >
      <body className="min-h-full w-full flex flex-col font-sans">
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}