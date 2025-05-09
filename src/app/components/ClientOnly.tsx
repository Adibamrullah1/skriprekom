'use client';

import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <ThemeToggle />
      {children}
    </>
  );
}
