import React from 'react';
import Header from '../components/Template/Header';
import Footer from '../components/Template/Foooter';
import Navigation from '../components/Template/Navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
