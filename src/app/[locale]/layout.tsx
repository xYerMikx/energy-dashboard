import "@/styles/globals.scss";

import type { Metadata } from "next";
import { Chivo } from "next/font/google";
import { unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";

import { locales } from "@/config";

const chivo = Chivo({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Energy Dashboard",
  description: "Energy Dashboard Application with next.js",
};
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={chivo.className}>{children}</body>
    </html>
  );
}
