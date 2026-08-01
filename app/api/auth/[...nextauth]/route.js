import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

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
        try {
          const response = await axios.get(
            "http://localhost:3001/Users"
          );

          const user = response.data.find(
            (i) =>
              i.email === credentials.email &&
              i.password === credentials.password
          );

          console.log("USER:", user);

          if (!user) {
            return null;
          }

          return {
            id: String(user.id),
            email: user.email,
            name: user.name,
          };
        } catch (error) {
          console.log("AUTH ERROR:", error);
          return null;
        }
      },
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