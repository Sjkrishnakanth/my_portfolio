import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suroju Jyothi Krishna Kanth | Embedded Systems & IoT Engineer Portfolio",
  description: "Professional Engineering Portfolio of Suroju Jyothi Krishna Kanth, specializing in Embedded Systems, IoT, and Automotive Technology.",
  keywords: ["Embedded Systems", "IoT Developer", "Automotive Electronics", "SJKK", "Jyothi Krishna Kanth", "KL University"],
  authors: [{ name: "Suroju Jyothi Krishna Kanth" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground antialiased font-sans transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
