"use server"

import { api } from "@/lib/fetch-wrapper"
import { SpotifyArtist } from "@/lib/types"

export async function getArtist(id: string): Promise<SpotifyArtist> {
    const res = await api.get(`/spotify/get/artist/?id=${id}`)
    return res
}
