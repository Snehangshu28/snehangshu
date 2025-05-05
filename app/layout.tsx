import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Poppins, Playfair_Display } from "next/font/google";
import ChatBot from "./components/ChatBot";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "iamSnehangshu",
  description: "Portfolio website showcasing my projects and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable} ${playfair.variable} min-h-screen relative`}>
        <div className="fixed inset-0 bg-[url('/coding-bg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        <Navbar />
        <main className="relative z-10">
          {children}
          <Footer />
        </main>
        {/* <Footer /> */}
        <ChatBot />
      </body>
    </html>
  );
}
