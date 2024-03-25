"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container } from '@mui/material';

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Container style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ marginTop: '2%', marginBottom: '2%' }}>
            {children}
          </main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
