import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";

const exo = Exo({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Study Bot",
  description: "The Bot for Studying",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={exo.className}>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
