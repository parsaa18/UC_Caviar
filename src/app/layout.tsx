import type { Metadata } from "next";

import "./globals.css";
import "./font.css";
import Header from "@/components/layout/Header/header";
import Footer from "@/components/layout/Footer/footer";

export const metadata: Metadata = {
  title: "Unique Caspian Caviar",
  description: "Unique Caspian Caviar created by sharp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo-header.svg" />
      </head>
      <body className="bg-ucWhite lg:m-4">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
