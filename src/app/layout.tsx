
import type { Metadata } from "next";
import Navbar from "./component/navbar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "next-theme/dist/provider";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "practice",
  description: "tailwind practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)

{
  
  return (
    <html lang="en"
    
    >
    <head>
          <script
          dangerouslySetInnerHTML={{
            __html: `
              const theme = localStorage.getItem('theme') || 'light';
              document.documentElement.classList.add(theme);
            `,
          }}
        />

    </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased [--pattern-fg:var(--color-neutral-900)]/10 
        dark:[--pattern-fg:var(--color-neutral-100)]/10 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 transition-colors duration-500 ease-in-out`}
      >
        <Navbar />
        <ThemeProvider attribute="class" defaultTheme="system">
            <main className="h-screen">
              {children}
            </main>
        </ThemeProvider>
        
        
      </body>
    </html>
  );
}
