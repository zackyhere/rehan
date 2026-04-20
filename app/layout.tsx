import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "SMK Pawyatan Daha 2",
  description: "Informasi sekolah, jurusan TKJ, dan panduan UKK.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={vt323.variable}>{children}</body>
    </html>
  );
}
