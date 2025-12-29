"use client"

import { Card } from "@/components/ui/card"
import type { SimplifiedSpotifyArtistEntity } from "@/lib/types"
import { User } from "lucide-react"

interface ArtistCardProps {
    entity: SimplifiedSpotifyArtistEntity
    onClick: (id: string) => void
}

export function Artist({ entity, onClick }: ArtistCardProps) {
    return (
        <Card
            onClick={() => onClick(entity.id)}
            className="cursor-pointer bg-[#1e1e1e] hover:bg-[#242424] transition border border-border/60"
        >
            <div className="flex gap-4 p-4">
                <div className="relative shrink-0">
                    {entity.images[0] ?
                        (<img
                            src={entity.images[0].url}
                            alt={entity.name}
                            className="h-20 w-20 object-cover rounded-full"
                        />) : (
                            <div className="h-20 w-20 rounded-sm bg-muted flex items-center justify-center">
                                <User />
                            </div>
                        )}
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <h3
                        className={"truncate uppercase leading-tight text-lg font-black"}
                    >
                        {entity.name}
                    </h3>

                    {entity.genres.length > 0 && (
                        <p className="text-sm text-muted-foreground truncate mt-0.5">
                            {entity.genres.slice(0, 3).join(" · ").toUpperCase()}
                        </p>
                    )}
                </div>
            </div>
        </Card>
    )
}
