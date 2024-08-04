import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//Components
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code - Aplikasi Keuangan untuk Transfer dan Pembayaran Digital",
  description: "Aplikasi Keuangan untuk Transfer dan Pembayaran Digital",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const router = useRouter()
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
