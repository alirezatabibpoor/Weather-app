import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { supabase } from "@/app/lib/supabase";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "text",
        },

        password: {
          label: "Password",
          type: "password",
        },
      },

     async authorize(credentials) {
  console.log("Credentials:", credentials);

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", credentials.email)
    .single();

  console.log("Data:", data);
  console.log("Error:", error);

  if (error || !data) return null;

  if (data.password !== credentials.password) {
    console.log("Wrong password");
    return null;
  }

  return {
    id: data.id,
    email: data.email,
    name: data.name,
  };
}
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };