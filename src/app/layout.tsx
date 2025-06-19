import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Definitive KH",
  description: "Explore the Kingdom Hearts series in simple terms with a spoiler-free guide to the story, game collections, HD remasters vs. originals, and the full chronological order — perfect for newcomers and returning fans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
