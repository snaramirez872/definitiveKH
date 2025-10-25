import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import NavBar from "./components/NavBar/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Definitive KH",
  description: "[Currently in Development]",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-auto scrollbar-hide">
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
