import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import I18nProvider from "@/components/I18nProvider";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Transportes El Sol | Premium Logistics",
  description: "Innovative and reliable transportation solutions connecting the future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body 
        className={`${inter.className} antialiased selection:bg-amber-500 selection:text-white`}
        suppressHydrationWarning
      >
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
