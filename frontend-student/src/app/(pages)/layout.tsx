import React from "react";
import Header from "../components/Template/Header";
import Footer from "../components/Template/Foooter";
import Navigation from "../components/Template/Navigation";
import ReactQueryProvider from "../providers/ReactQueryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <Header />
      <Navigation />
      {children}
      <Footer />
    </ReactQueryProvider>
  );
}
