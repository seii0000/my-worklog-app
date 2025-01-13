// src/app/layout.tsx
import { AuthProvider } from '@/contexts/auth-context';

import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}