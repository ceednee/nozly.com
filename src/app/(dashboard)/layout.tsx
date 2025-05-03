import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

// Use Inter font as seen on the original site
const inter = Inter({
  subsets: ["latin"],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});


export const metadata: Metadata = {
  title: "Nozly.com",
  description: "Nozly.com",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={`${inter.variable} antialiased font-normal min-h-screen`}
    >
      {children}
    </main>
  );
}
