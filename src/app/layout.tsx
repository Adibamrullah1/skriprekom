import './globals.css';
import ClientOnly from './components/ClientOnly';

export const metadata = {
  title: 'Rekomendasi Judul Skripsi',
  description: 'Aplikasi rekomendasi judul skripsi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <ClientOnly>
          {children}
        </ClientOnly>
      </body>
    </html>
  );
}
