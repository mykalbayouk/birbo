import { authConfig } from "./auth.config";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "./models/userSchema";

/**
 * Authentication handlers
 */

export const {
    handlers : {GET, POST},
    auth,
    signIn,
    signOut,
} = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            credentials:  {
                email: { },
                password: { },
            },
            async authorize(credentials) {
                if (!credentials) return null;
                
                console.log("credentials" , credentials);

                try {
                    const user = await User.findOne({ email: credentials.email }).lean();

                    if (user) {
                        const isMatch = await bcrypt.compare(
                            credentials.password as string,
                            user.password
                        );

                        if (isMatch) {
                            return {
                                id: user._id.toString(),
                                email: user.email,
                                name: user.username,
                            };
                        } else {
                            console.log("Email or password is incorrect");
                            return null;
                        }
                    } else {
                        console.log("User not found");
                        return null;
                    }
                } catch (error: any) {
                    console.log("An error occured: ", error);
                    return null;
                }
            },
        }),
    ],
});