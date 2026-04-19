import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ThemeToggle } from "@/components/ui/ThemeToggle";
// import { BottomFade } from '@/components/ui/BottomFade'

const namu = localFont({
  src: [
    {
      path: "../../public/fonts/Namu/NAMU-1990.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Afterflow",
  description: "Creative studio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${namu.variable} ${manrope.variable}`}>
        <ThemeProvider>
          {children}
          <ThemeToggle />
          {/* <BottomFade /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}