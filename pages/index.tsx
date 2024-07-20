import React from 'react';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormSection from '../components/FormSection';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <main className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-semibold mb-6">Form Section</h2>
        <FormSection />
      </main>
      <Footer />
    </div>
  );
}
