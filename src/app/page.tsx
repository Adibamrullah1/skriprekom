export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Sistem Rekomendasi Judul Skripsi</h1>
      <p className="text-center text-lg max-w-xl text-gray-700">
        Aplikasi ini membantu mahasiswa menentukan judul skripsi berdasarkan minat dan riwayat nilai.
      </p>
      <a href="/input" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700">
        Mulai Input Data
      </a>
    </main>
  );
}