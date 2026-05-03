import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fatmawati — Account Receivable & Tax Professional | Surabaya",
  description:
    "Portfolio profesional Fatmawati — Junior Accounting Technician bersertifikasi BNSP dengan 8+ tahun pengalaman di Account Receivable, Tax Administration, dan Financial Reporting. Berbasis di Surabaya.",
  keywords: [
    "Fatmawati",
    "Account Receivable",
    "Tax Administration",
    "Akuntansi",
    "BNSP",
    "Surabaya",
    "Finance",
    "Portfolio",
  ],
  authors: [{ name: "Fatmawati" }],
  openGraph: {
    title: "Fatmawati — Account Receivable & Tax Professional",
    description:
      "8+ tahun pengalaman profesional di Account Receivable, Tax Administration, dan Financial Reporting.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="font-sans antialiased noise-overlay">{children}</body>
    </html>
  );
}
