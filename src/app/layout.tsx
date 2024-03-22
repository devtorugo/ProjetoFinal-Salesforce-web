import React, { ReactNode } from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import ClickTracker from './clicks/clickTracker';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: "Salesforce",
 description: "Criando uma aplicação com React + TypeScript",
};

interface RootLayoutProps {
 children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
 return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        <ClickTracker />
        {children}
        <Footer />
      </body>
    </html>
 );
}
