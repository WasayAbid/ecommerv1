import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import TopNav from "@/components/Topnav/Topnav";
import Footer from "@/components/Footer/Footer";
import StoreProvider from "./StoreProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TheGamerVault",
  description: "Your ultimate destination for gaming accessories and products.",
  icons: {
    icon: "/images/dpphoto.ico", // Path to your favicon
    shortcut: "/images/dpphoto.ico",
    apple: "/apple-touch-icon.png", // Path to the apple touch icon
  },
  openGraph: {
    title: "TheGamerVault",
    description:
      "Your ultimate destination for gaming accessories and products.",
    url: "https://thegamervaultwasay.vercel.app/?__vercel_draft=1", // Your website URL
    siteName: "TheGamerVault",

    locale: "en_US",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
          <TopNav />

          <main>{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
