import supabase from "../services/supabase";
import type { AuthCredentials } from "../types/authTypes";

export const signInWithPassword = async ({ email, password }: AuthCredentials) =>
  supabase.auth.signInWithPassword({
    email,
    password,
  });

export const signUpWithPassword = async ({ email, password }: AuthCredentials) =>
  supabase.auth.signUp({
    email,
    password,
  });

export const signOut = async () => supabase.auth.signOut();
