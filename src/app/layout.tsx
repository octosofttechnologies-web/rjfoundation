import type { Metadata } from 'next';
import './globals.css';
import { cn } from "@/lib/utils";
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster";
import { ScrollToTop } from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: {
    default: 'R-Jolad Foundation',
    template: '%s | R-Jolad Foundation',
  },
  description: 'Dedicated to creating lasting impact through community-focused initiatives in health, education, and empowerment.',
  keywords: ['foundation', 'charity', 'community', 'health', 'education', 'empowerment', 'R-Jolad'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("min-h-screen bg-background font-headline antialiased flex flex-col")}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
        <ScrollToTop />
      </body>
    </html>
  );
}
