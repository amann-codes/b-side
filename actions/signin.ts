"use server"

import { api } from "@/lib/fetch-wrapper"
import { GoogleSignInBodyType } from "@/lib/types";

export async function googleSignIn(body: GoogleSignInBodyType) {
    const res = await api.post('/auth', body);
    return res
}