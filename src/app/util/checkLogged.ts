'use server';

import { auth } from "@/auth";

export async function checkSession() {
    const session = await auth();
    const loggedInUser = session?.user;
    return loggedInUser?.name || false;
}