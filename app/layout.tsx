import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oskari - Full-Stack Developer",
  description: "Portfolio of Oskari, a Full-Stack Developer specializing in Next.js, React, and Node.js.",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Portfolio", "Full-Stack Developer"],
  authors: [{ name: "Oskari" }],
  creator: "Oskari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    title: "Oskari - Full-Stack Developer",
    description: "Portfolio of Oskari, a Full-Stack Developer specializing in Next.js, React, and Node.js.",
    siteName: "Oskari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oskari - Full-Stack Developer",
    description: "Portfolio of Oskari, a Full-Stack Developer specializing in Next.js, React, and Node.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
