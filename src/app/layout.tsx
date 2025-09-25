import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jesus Christ: Questions & Answers - Complete Collection',
  description: 'Comprehensive collection of all questions asked to Jesus Christ with His responses. King James Version (KJV) with Korean 흠정역 translations.',
  keywords: 'Jesus Christ, Bible, KJV, Korean Bible, Questions, Answers, Christianity, Gospel, Matthew, Mark, Luke, John',
  authors: [{ name: 'Jesus Q&A Study' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}