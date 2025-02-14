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
      <body className="bg-ucWhite md:p-4">
        <Header />
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
