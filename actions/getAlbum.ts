"use server"

import { api } from "@/lib/fetch-wrapper"
import { SpotifyAlbum } from "@/lib/types"

export async function getAlbum(id: string): Promise<SpotifyAlbum> {
    const res = await api.get(`/spotify/get/album/?id=${id}`)
    return res
}
