import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import FormSection from '../components/FormSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <Navbar />
      <Header />
      <div className="container mx-auto">
        <main>
          <FormSection />
        </main>
        <div className="text-center mt-8 mb-8">
          <button className="bg-red-800 text-white font-bold py-2 px-4 rounded">Gönder</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
