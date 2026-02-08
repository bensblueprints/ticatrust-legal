import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";

export const metadata: Metadata = {
  title: "TICA TrustLegal - Premium Legal Services for Foreign Investors in Vietnam",
  description: "With over 7 years of specialized legal support, TICA TrustLegal is a dedicated consultancy and reliable partner for foreign investors in Vietnam. Business establishment, visa services, and comprehensive legal support.",
  keywords: ["Vietnam business law", "foreign investment Vietnam", "legal services Vietnam", "business establishment Vietnam", "work permit Vietnam", "visa services Vietnam"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <FloatingWidgets />
        </div>
      </body>
    </html>
  );
}
