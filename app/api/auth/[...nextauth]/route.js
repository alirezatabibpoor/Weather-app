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

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", credentials.email)
    .single();


  if (error || !data) {
    return null;
  }


  const isPasswordValid = await bcrypt.compare(
    credentials.password,
    data.password
  );


  if (!isPasswordValid) {
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