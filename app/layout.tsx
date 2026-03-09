import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'almanya101.de - GenZ için Almanya Rehberi',
  description: 'Almanya\'da eğitim, kariyer ve yaşam hakkında en güncel bilgiler.',
  openGraph: {
    title: 'almanya101.de - GenZ için Almanya Rehberi',
    description: 'Almanya\'da eğitim, kariyer ve yaşam hakkında en güncel bilgiler.',
    url: 'https://almanya101.de',
    siteName: 'almanya101.de',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'almanya101.de - GenZ için Almanya Rehberi',
    description: 'Almanya\'da eğitim, kariyer ve yaşam hakkında en güncel bilgiler.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable}`}>
      <body className="min-h-screen w-full overflow-x-hidden bg-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
