import type { Metadata } from 'next';
import { StackProvider, StackTheme } from '@stackframe/stack';
import { SidebarProvider } from '../components/ui/sidebar';
import { stackServerApp } from '../stack';
//import { Geist, Geist_Mono } from 'next/font/google';
import { Inter } from 'next/font/google';
import './globals.css';
import { appConfig } from '../config/app';

/*
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> 
*/

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // optional, but recommended
});


export const metadata: Metadata = {
  title: appConfig.metadata.companyName,
  description: appConfig.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className = {inter.className}>
      <body >

        <StackProvider app={stackServerApp}>
          <StackTheme>
            <SidebarProvider defaultOpen={false}>{children}</SidebarProvider>
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
