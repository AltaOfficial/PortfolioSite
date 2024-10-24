import { SupabaseAdapter } from "@auth/supabase-adapter";
import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import { NextResponse } from "next/server";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Github],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_SUPABASE_URL,
    secret: process.env.NEXT_SUPABASE_SERVICE_ROLE_KEY,
  }),
  callbacks: {
    authorized: async ({ request, auth }) => {
      if (auth) {
        if (auth.user.email != "jaedonfarr@gmail.com") {
          return NextResponse.redirect(new URL("/", request.url));
        }
      }
      return !!auth;
    },
  },
});
