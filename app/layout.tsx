import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "Siddhiganesh Joshi | Software Engineer & Tech Lead",
  description: "Portfolio of Siddhiganesh Joshi, a Software Engineer and Tech Lead specializing in .NET, Java, and Angular. Building scalable, high-performance applications.",
  keywords: ["Software Engineer", "Tech Lead", ".NET", "Java", "Angular", "Siddhiganesh Joshi", "Full Stack Developer", "Fintech", "Clean Architecture"],
  authors: [{ name: "Siddhiganesh Joshi" }],
  openGraph: {
    title: "Siddhiganesh Joshi | Software Engineer & Tech Lead",
    description: "Portfolio of Siddhiganesh Joshi, a Software Engineer and Tech Lead specializing in .NET, Java, and Angular.",
    type: "website",
    url: "https://siddhiganeshjoshi.com.np",
  }
};

import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning={true}>
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
