import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//Components
import Navbar from "@/components/navbar/Navbar";
import { getServerSession } from "next-auth";
import { authOption } from "@/lib/auth";
import PageSignin from "./(auth)/sign-in/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flip - Aplikasi Keuangan untuk Transfer dan Pembayaran Digital",
  description: "Aplikasi Keuangan untuk Transfer dan Pembayaran Digital",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOption);

  const dataPath = ["/sign-in","sign-up"]
  // const router = useRouter()
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {session?.user?.name ? <>{children}</> : <PageSignin />}
      </body>
    </html>
  );
}
