import { useState } from 'react';
import React, { ReactNode } from 'react';


const Home = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <nav className="bg-white shadow mb-8 relative">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center relative">
          <div className="flex items-center space-x-2">
            <img src="/image.png" alt="Logo" className="h-8 w-8" />
            <h1 className="font-bold uppercase text-lg text-gray-800">
              <a href="/">Company Name</a>
            </h1>
            <div className="flex space-x-4">
              {/* Dropdowns and non-dropdown buttons */}
              {['Kurumsal', 'Sektörler', 'Hizmetler', 'Sürdürülebilirlik'].map((menu, index) => (
                <div className="relative dropdown" key={index}>
                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <span>{menu}</span>
                    <svg
                      className="fill-current h-4 w-4 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.5 7.5L10 12l4.5-4.5H5.5z" />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute hidden mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Subitem 1
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Subitem 2
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Subitem 3
                      </a>
                    </div>
                  )}
                </div>
              ))}
              {['Başvurular', 'Yönetmelikler', 'Galeri', 'İletişim'].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <a href="#" className="bg-red-500 hover:bg-green-700 text-white font-sans py-2 px-4 rounded">
            Belge Sorgulama
          </a>
        </div>
      </nav>

      {/* Header section with background image */}
      <header className="header-background">
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-6xl font-semibold">Header Title</h1>
        </div>
      </header>

      <div className="container mx-auto">
        {/* Main content */}
        <main>
          <section>
            <h4 className="font-bold text-lg mb-4 required">Muayene Türünü Seçiniz</h4>
            <div className="relative inline-block text-left w-full">
              <select
                id="select"
                className="inline-flex justify-center w-full max-w-full rounded-md border border-gray-300 shadow-sm px-20 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <option value="op#1">op1</option>
                <option value="op#2">op2</option>
                <option value="op#3">op3</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="adres" className="block text-gray-700 font-bold mb-2 required">
                Periyodik kontrolün yapılacağı adres
              </label>
              <input
                type="text"
                id="adres"
                name="adres"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <h4 className="font-bold text-lg mb-4 required">Unvan Seçiniz</h4>
            <div className="relative inline-block text-left w-full">
              <select
                id="select"
                name="select"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <option>--unvan seçiniz--</option>
                <option value="unvan#1">unvan#1</option>
                <option value="unvan#2">unvan#2</option>
                <option value="unvan#3">unvan#3</option>
              </select>
            </div>

            <div className="flex gap-4">
              <div className="mb-4 flex-1">
                <label htmlFor="asansor_firmasi" className="block text-gray-700 font-bold mb-2">
                  Asansör Bakım Firması Adı
                </label>
                <input
                  type="text"
                  id="asansor_firmasi"
                  name="asansor_firmasi"
                  className="custom-input"
                />
              </div>
              <div className="mb-4 flex-1">
                <label htmlFor="ad_soyad" className="block text-gray-700 font-bold mb-2 required">
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  id="ad_soyad"
                  name="ad_soyad"
                  className="custom-input"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mb-4 flex-1">
                <label htmlFor="eposta" className="block text-gray-700 font-bold mb-2 required">
                  E-Posta
                </label>
                <input
                  type="text"
                  id="eposta"
                  name="eposta"
                  className="custom-input"
                />
              </div>
              <div className="mb-4 flex-1">
                <label htmlFor="telefon" className="block text-gray-700 font-bold mb-2 required">
                  Telefon
                </label>
                <input
                  type="text"
                  id="telefon"
                  name="telefon"
                  className="custom-input"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="mesaj" className="block text-gray-700 font-bold mb-2">
                Mesajınız
              </label>
              <textarea
                id="mesaj"
                name="mesaj"
                rows={4}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
          </section>
        </main>

        <div className="text-center mt-8 mb-8">
          <button className="bg-red-800 text-white font-bold py-2 px-4 rounded">Gönder</button>
        </div>
      </div>

      {/* Footer section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          Footer Content
        </div>
      </footer>
    </div>
  );
};

export default Home;
