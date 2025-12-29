"use server"

import { api } from "@/lib/fetch-wrapper"
import { SimplifiedEntity } from "@/lib/types"

export async function search(query: string): Promise<SimplifiedEntity[]> {
    const res = await api.get(`/spotify/search/?query=${query}`)
    return res
}
