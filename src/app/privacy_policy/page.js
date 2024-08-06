import React from 'react';
import { motion } from 'framer-motion';
import Footer from "@/components/Footer";

export default async function Home() {
  return (
    <main className="bg-white flex flex-col items-center justify-center min-h-screen">
      Privacy Policy
      <Footer />
    </main>
  );
}
