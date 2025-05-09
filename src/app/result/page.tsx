'use client';
import { useEffect, useState } from 'react';

export default function ResultPage() {
  const [result, setResult] = useState<any[]>([]);

  useEffect(() => {
    const data = localStorage.getItem('rekomendasi');
    if (data) {
      setResult(JSON.parse(data));
    }
  }, []);

  return (
    <main className="p-6 max-w-3xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Rekomendasi Judul Skripsi</h2>
      <ul className="space-y-4">
        {result.map((item, index) => (
          <li key={index} className="p-4 border border-gray-200 rounded-xl shadow-sm bg-white">
            <h3 className="text-xl font-semibold text-gray-800">{item.judul}</h3>
            <p className="text-sm text-gray-600 mt-1">{item.alasan}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}