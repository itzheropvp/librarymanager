"use client";

import { useEffect } from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Container } from '@mui/material';

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Container style={{marginTop: '5%', marginBottom: '5%'}}>
        {children}
      </Container>
      <Footer />
    </div>
  );
}
