'use server'

import { signIn, signOut } from "@/auth";


export async function doLogout() {
    console.log("signoutbutton");
    
    await signOut({ redirectTo: '/' });
}

export async function doLogin(formData: { username: string, password: string }): Promise<any> {
    const email = formData.username;
    const password = formData.password;

    try {
        const user = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (user) {
            console.log("User logged in successfully.");
            return user;
        } else {
            throw new Error("Invalid credentials.");
        }
    } catch (error) {
        throw new Error("Invalid credentials.");
    }
}