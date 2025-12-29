"use server"

import { api } from "@/lib/fetch-wrapper"
import { SpotifyTrack } from "@/lib/types"

export async function getTrack(id: string): Promise<SpotifyTrack> {
    const res = await api.get(`/spotify/get/track/?id=${id}`)
    return res
}