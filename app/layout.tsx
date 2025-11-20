import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://antweb9.tech"),
  title: "Ananth Venkatesh",
  description: "Coder. Musician. Gastronome.",
  openGraph: {
    title: "Hi, I'm Ananth",
    url: "https://vananth.me",
    description: "Coder. Musician. Gastronome.",
    images: [
      {
        url: "/ananthdp-min.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourceSans.className}>{children}</body>
    </html>
  );
}
