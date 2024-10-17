import { SupabaseAdapter } from "@auth/supabase-adapter";
import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_DATABASE_URL,
    secret: process.env.NEXT_SUPABASE_KEY,
  }),
});
