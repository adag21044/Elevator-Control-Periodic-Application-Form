// components/ElevatorInspectionForm.tsx


import React, { useState } from 'react';

const FormSection = () => {
  const [formData, setFormData] = useState({
    inspectionType: '',
    inspectionAddress: '',
    title: '',
    companyName: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemlerini burada yapabilirsiniz
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label htmlFor="inspectionType" className="block text-gray-700 font-bold mb-2">
          Muayene Turunu seçiniz *
        </label>
        <select
          id="inspectionType"
          name="inspectionType"
          value={formData.inspectionType}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        >
          <option value="">--Seçiniz--</option>
          <option value="type1">Type 1</option>
          <option value="type2">Type 2</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="inspectionAddress" className="block text-gray-700 font-bold mb-2">
          Periyodik kontrolun yapılacağı adres *
        </label>
        <input
          type="text"
          id="inspectionAddress"
          name="inspectionAddress"
          value={formData.inspectionAddress}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Unvan Seçiniz *
        </label>
        <select
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        >
          <option value="">--Seçiniz--</option>
          <option value="mr">Mr.</option>
          <option value="mrs">Mrs.</option>
          <option value="ms">Ms.</option>
        </select>
      </div>

      <div className="mb-4 flex gap-4">
        <div className="w-1/2">
          <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2">
            Asansör Bakım Firması Adı
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
            Adınız
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
          Soyadınız *
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          E-Posta *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
          Telefon *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Mesajınız
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        ></textarea>
      </div>

      <button type="submit" className="w-full bg-red-500 text-white font-bold py-2 rounded">
        Gönder
      </button>
    </form>
  );
};

export default FormSection;
