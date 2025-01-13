// src/app/(auth)/login/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signInWithGoogle } from '@/services/authService';
import { useAuth } from '@/contexts/auth-context';

export default function LoginPage() {
  const [error, setError] = useState('');
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      console.log("Redirecting to dashboard...");
      router.push('/dashboard');
    } catch (error) {
      console.error("Error during Google sign in: ", (error as Error).message);
      setError(`Đăng nhập bằng Google thất bại: ${(error as Error).message}`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="text-2xl font-bold text-center">Đăng nhập</h2>
        </div>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 mt-4"
        >
          Đăng nhập với Google
        </button>

        <div className="text-center">
          <Link href="/register" className="text-blue-600 hover:underline">
            Chưa có tài khoản? Đăng ký ngay
          </Link>
        </div>
      </div>
    </div>
  );
}