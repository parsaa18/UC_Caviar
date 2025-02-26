import type { Metadata } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";

// styles
import "./globals.css";
import "./font.css";
import "./scroller.css";

// Layout component
import Header from "@/components/layout/Header/header";

export const metadata: Metadata = {
  title: "UCC: Unique Caspian Caviar",
  description:
    "We are a leading company specializing in the export of premium caviar and canned goods, offering a wide range of packaging options. Our products are shipped worldwide with guaranteed quality and tailored delivery methods. Contact us for orders and inquiries. Unique Caspian Caviar | UcCaviar | CaviarUC  ",
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
      <body className="bg-ucWhite " suppressHydrationWarning>
        <Header />
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
