import type { Metadata } from 'next';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Inter } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { GlobalAlert } from './components/Alert/GlobalAlert';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'CEMU Untlantico',
  description:
    'TFG - Sergio Mayén, Cemu - Frontend Student',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
    <html lang='es'>
      <body className={`${inter.variable} antialiased`}>
        <AppRouterCacheProvider>
            <NuqsAdapter>{children}</NuqsAdapter>
        </AppRouterCacheProvider>
        <GlobalAlert />
      </body>
    </html>
  );
}
