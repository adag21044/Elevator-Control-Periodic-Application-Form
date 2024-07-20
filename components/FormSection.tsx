import React from 'react';
const FormSection = () => {
    return (
      <section className="container mx-auto my-8">
        <h4 className="font-bold text-lg mb-4 required">Muayene Türünü Seçiniz</h4>
        <div className="relative inline-block text-left w-full mb-4">
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
        <div className="relative inline-block text-left w-full mb-4">
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
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
  
        <div className="flex gap-4">
          <div className="mb-4 flex-1">
            <label htmlFor="eposta" className="block text-gray-700 font-bold mb-2 required">
              E-Posta
            </label>
            <input
              type="email"
              id="eposta"
              name="eposta"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4 flex-1">
            <label htmlFor="telefon" className="block text-gray-700 font-bold mb-2 required">
              Telefon
            </label>
            <input
              type="tel"
              id="telefon"
              name="telefon"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
    );
  };
  
  export default FormSection;
  