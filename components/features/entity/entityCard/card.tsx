"use client"

import type { SimplifiedEntity } from "@/lib/types"
import { Album } from "./album"
import { Artist } from "./artist"
import { Track } from "./track"

interface EntityCardProps {
    entity: SimplifiedEntity
    onClick: (id: string) => void
}

export function EntityCard({ entity, onClick }: EntityCardProps) {
    switch (entity.entityType) {
        case "album": return <Album entity={entity} onClick={onClick} />
        case "artist": return <Artist entity={entity} onClick={onClick} />
        case "track": return <Track entity={entity} onClick={onClick} />
    }
}
