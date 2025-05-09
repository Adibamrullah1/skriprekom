import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  const { minat, nilai } = await req.json();

  const { data: topikData, error } = await supabase
    .from('topik_skripsi')
    .select('*');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const rekomendasi = topikData
    .filter((t) => t.bidang.toLowerCase().includes(minat.toLowerCase()))
    .map((t) => ({
      judul: t.judul,
      alasan: `Cocok karena Anda berminat di bidang ${minat}`,
    }));

  return NextResponse.json(
    rekomendasi.length > 0 ? rekomendasi : [{
      judul: 'Belum ada rekomendasi cocok',
      alasan: 'Silakan masukkan minat yang lebih spesifik.'
    }]
  );
}
