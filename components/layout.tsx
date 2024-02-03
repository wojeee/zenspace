// layout.tsx
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return <div className={inter.className}>{children}</div>;
}
