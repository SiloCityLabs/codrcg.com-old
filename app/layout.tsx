import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
//TODO: Figure out why the css files arent loading

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Call of Duty Random Class Generator",
  description: "Call of Duty Random Class Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
