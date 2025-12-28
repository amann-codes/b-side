"use client"

import { Card } from "@/components/ui/card"
import type { SpotifyAlbumEntity } from "@/lib/types"
import { Disc } from "lucide-react"

interface AlbumCardProps {
    entity: SpotifyAlbumEntity
    onClick: (id: string) => void
}

export function Album({ entity, onClick }: AlbumCardProps) {
    return (
        <Card
            onClick={() => onClick(entity.id)}
            className="cursor-pointer bg-[#1e1e1e] hover:bg-[#242424] transition border border-border/60"
        >
            <div className="flex gap-4 p-4">
                <div className="relative shrink-0">
                    {entity.images[0] ? (
                        <img
                            src={entity.images[0].url}
                            alt={entity.name}
                            className="h-20 w-20 object-cover"
                        />) : (
                        <div className="h-20 w-20 rounded-sm bg-muted flex items-center justify-center">
                            <Disc />
                        </div>
                    )}
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <h3
                        className={"truncate uppercase leading-tight text-base font-extrabold"}
                    >
                        {entity.name}
                    </h3>

                    <p className="text-sm text-muted-foreground truncate mt-0.5">
                        {entity.release_date.slice(0, 4)} · {entity.total_tracks} tracks
                    </p>
                </div>
            </div>
        </Card >
    )
}