import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Gallery from "@/components/Gallery";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Gallery",
  description: "Doing my best",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
          
          <Gallery/>
        </body>
    </html>
  );
}
