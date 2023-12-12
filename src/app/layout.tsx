import type { Metadata } from "next";

import "./globals.css";
import TopNavigation from "@/components/top-navigation";
import Footer from "@/components/footer";
export const metadata: Metadata = {
  title: "Significa Next Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }}>
      <body>{children}</body>
      <Footer />
    </html>
  );
}
