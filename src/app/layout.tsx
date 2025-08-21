import type { Metadata } from "next";
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
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
