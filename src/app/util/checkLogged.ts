'use server';

import { auth } from "@/auth";
/**
 * checks if user logged in
 * @returns 
 */
export async function checkSession() {
    const session = await auth();
    const loggedInUser = session?.user;
    return loggedInUser?.name || false;
}