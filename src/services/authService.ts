// src/services/authService.ts
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("User signed in with Google successfully: ", result.user);
    return result.user;
  } catch (error) {
    console.error("Error during Google sign in: ", (error as Error).message);
    throw error;
  }
};