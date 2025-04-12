import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alyssa Dannielle's Designs",
  description: "Browse and test free crochet patterns!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`dark:bg-gray-900 dark:text-white ${inter.className}`}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
