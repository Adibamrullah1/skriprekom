'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function InputPage() {
  const [minat, setMinat] = useState('');
  const [nilai, setNilai] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch('/api/rekomendasi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ minat, nilai }),
    });
    const result = await res.json();
    localStorage.setItem('rekomendasi', JSON.stringify(result));
    router.push('/result');
  };

  return (
    <main className="p-6 max-w-xl mx-auto bg-white shadow-md rounded-xl mt-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Input Minat dan Nilai</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Minat:</label>
          <input
            type="text"
            value={minat}
            onChange={(e) => setMinat(e.target.value)}
            placeholder="Contoh: Machine Learning"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Riwayat Nilai (format: AI=90,UI=85,...):</label>
          <input
            type="text"
            value={nilai}
            onChange={(e) => setNilai(e.target.value)}
            placeholder="Contoh: AI=90,UI=85"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
          Kirim
        </button>
      </form>
    </main>
  );
}
