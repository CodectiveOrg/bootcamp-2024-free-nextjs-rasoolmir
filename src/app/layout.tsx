import { ReactElement } from "react";

import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import HeaderComponent from "@/components/header/header.component";
import FooterComponent from "@/components/footer/footer.component";
import ToasterComponent from "@/components/toaster/toaster.component";

import "@/styles/typography.css";

import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jobior",
  description: "Junior Job Search Website ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement {
  return (
    <html lang="en" dir="ltr" className={vazirmatn.className}>
      <body>
        <HeaderComponent />
        <main>{children}</main>
        <FooterComponent />
        <ToasterComponent />
      </body>
    </html>
  );
}
