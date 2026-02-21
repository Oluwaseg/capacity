import { CapacityPlusLoader } from '@/components/loader';
import { ThemeProvider } from '@/components/theme-provider';
import AOSInitializer from '@/lib/aos-initializer';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Capacity+ | Healthcare Services',
  description:
    'Transform primary care with digital integration, coaching, and visibility solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <Suspense fallback={<CapacityPlusLoader />}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <AOSInitializer />
            {children}
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
