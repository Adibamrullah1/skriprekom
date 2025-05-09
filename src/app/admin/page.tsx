import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function AdminPage() {
  const [judul, setJudul] = useState('');
  const [bidang, setBidang] = useState('');
  const [list, setList] = useState<any[]>([]);

  const fetchTopik = async () => {
    const { data, error } = await supabase.from('topik_skripsi').select('*');
    if (!error) setList(data);
  };

  useEffect(() => {
    fetchTopik();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await supabase.from('topik_skripsi').insert({ judul, bidang });
    setJudul('');
    setBidang('');
    fetchTopik();
  };

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Admin: Tambah Topik Skripsi</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Judul Skripsi"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Bidang"
          value={bidang}
          onChange={(e) => setBidang(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Simpan
        </button>
      </form>

      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2">Daftar Topik</h3>
        <ul className="space-y-2">
          {list.map((t, i) => (
            <li key={i} className="p-2 bg-gray-100 rounded">{t.judul} - <span className="text-sm text-gray-600">{t.bidang}</span></li>
          ))}
        </ul>
      </div>
    </main>
  );
}
