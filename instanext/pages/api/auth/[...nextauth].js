import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
// require('dotenv').config()
import * as dotenv from "dotenv";
dotenv.config();

// export const authOptions = {
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();
      session.user.uid = token.sub;
      //   token.sub is googles user id that comes back
      return session;
    },
  },
  //   theme: {
  //     logo: "",
  //     brandColor: "",
  //     colorSchema: "auto",
  //   },
});

// export default NextAuth(authOptions);
