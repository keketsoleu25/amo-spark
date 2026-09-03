import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amo Spark & Scent Solutions",
  description:
    "Cleaning products and room diffusers for fresh, welcoming homes and spaces.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
