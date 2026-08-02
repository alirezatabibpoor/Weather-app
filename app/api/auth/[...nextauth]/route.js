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

        try {

          console.log("Login data:", credentials);


          const { data, error } = await supabase
            .from("users")
            .select("*")
            .eq("email", credentials.email)
            .single();



          console.log("User:", data);
          console.log("Supabase Error:", error);



          // کاربر پیدا نشد
          if (error || !data) {
            return null;
          }



          // پسورد ساده
          if (data.password !== credentials.password) {

            console.log("Wrong password");

            return null;
          }



          // اطلاعاتی که داخل session ذخیره میشه
          return {
            id: data.id,
            name: data.name,
            email: data.email,
          };


        } catch (error) {

          console.log("Authorize error:", error);

          return null;

        }

      },


    }),
  ],



  session: {
    strategy: "jwt",
  },


  secret: process.env.NEXTAUTH_SECRET,


  pages: {
    signIn: "/login",
  },


  callbacks: {

    async jwt({ token, user }) {

      if(user){
        token.id = user.id;
      }

      return token;
    },


    async session({ session, token }) {

      session.user.id = token.id;

      return session;
    }

  }

});


export { handler as GET, handler as POST };