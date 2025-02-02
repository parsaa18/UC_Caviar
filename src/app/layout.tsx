import type { Metadata } from "next";

import "./globals.css";
import "./font.css";
import Header from "@/app/components/layout/Header/header";
import Footer from "@/app/components/layout/Footer/footer";

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
      <body className="bg-ucWhite">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
