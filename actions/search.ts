"use server"

import { api } from "@/lib/fetch-wrapper"
import { Entity } from "@/lib/types"

export async function search(query: string): Promise<Entity[]> {
    const res = await api.get(`/spotify/search/?query=${query}`)
    return res
}
