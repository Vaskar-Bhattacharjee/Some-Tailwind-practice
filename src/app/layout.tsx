import { Geist, Geist_Mono } from "next/font/google";
import Providers from "./component/Provider";
import Navbar from "./component/navbar";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}
    suppressHydrationWarning>
      <body className="antialiased bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-500 ease-in-out [--pattern-fg:var(--color-neutral-900)]/10 dark:[--pattern-fg:var(--color-neutral-100)]/10">
        <Providers>
          
          <main className="min-h-screen w-[85%] mx-auto ">
            <Navbar />
            {children}
            
          </main>
        </Providers>
      </body>
    </html>
  );
}
