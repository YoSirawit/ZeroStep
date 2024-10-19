import { Session } from "inspector/promises";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";

const authOptions = {
    providers: [
        CredentialsProvider({
          name: 'credentials',
          credentials: {},
          async authorize(credentials, req) {
           
            const user = {id : '1'};
            return user;



          }
        })
      ],
      session: {
        strategy: 'jwt',
      },
      secret:process.env.NEXTAUTH_SECRET,
      pages:{
        signIn: '/login'
      }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST};