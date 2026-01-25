import supabase from "../services/supabase";

type AuthCredentials = {
  email: string;
  password: string;
};

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
