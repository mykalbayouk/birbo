'use server'

import { signIn, signOut } from "@/auth";


export async function doLogout() {
    console.log("signoutbutton");
    
    await signOut({ redirectTo: '/' });
}
/**
 * server side login function that runs async
 * @param formData 
 * @returns 
 */
export async function doLogin(formData: { email: string, password: string }): Promise<any> {
    const email = formData.email;
    const password = formData.password;

    try {
        const user = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (user) {
            return user;
        } else {
            throw new Error("Invalid credentials. 1");
        }
    } catch (error) {
        throw new Error("Invalid credentials. 2");
    }
}