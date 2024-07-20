import React from 'react';
import { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuItems = ['Kurumsal', 'Sektörler', 'Hizmetler', 'Sürdürülebilirlik'];
  const nonDropdownItems = ['Başvurular', 'Yönetmelikler', 'Galeri', 'İletişim'];

  return (
    <nav className="bg-white shadow mb-8 relative">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center relative">
        <div className="flex items-center space-x-2">
          <img src="/image.png" alt="Logo" className="h-8 w-8" />
          <h1 className="font-bold uppercase text-lg text-gray-800">
            <a href="/">Company Name</a>
          </h1>
          <div className="flex space-x-4">
            {menuItems.map((menu, index) => (
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
                  <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg z-10">
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
            {nonDropdownItems.map((item, index) => (
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
  );
};

export default Navbar;
