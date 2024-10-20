import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] ,variable:'--font-sans'});
const playFair=Playfair_Display({ subsets: ["latin"] ,variable:'--font-serif'})
export const metadata: Metadata = {
  title: "Asadullah Amjad",
  description: "Hi there, I am MERN Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('flex min-h-screen flex-col font-sans antialiased',inter.variable,playFair.variable)}>
        <Providers>
        <Header/>
        <main className="grow">
        {children}
        </main>
        <Footer/>
        </Providers>
        </body>
    </html>
  );
}
