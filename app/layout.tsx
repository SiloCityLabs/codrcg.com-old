import type { Metadata } from "next";
//Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/styles/main.css";
import "../public/styles/material.css";

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
      <body>{children}</body>
    </html>
  );
}
