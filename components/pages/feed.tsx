"use client"

import { useState } from "react"
import { EntityActions } from "@/components/features/entity/entityAction"
import type { SimplifiedEntity, Discussion } from "@/lib/types"
import { DiscussionSection } from "@/components/features/feed/discussion/discussionSection"
import {
    useQuery,
} from '@tanstack/react-query'
import { search } from "@/actions/search"
import { SearchInput } from "../features/search/searchInput"
import { SearchResults } from "../features/search/searchResult"

const discussions: Discussion[] = [
    {
        id: "1",
        entityId: "2",
        entityType: "track",
        title: 'The genius of modal jazz in "So What"',
        content:
            "The way Miles Davis broke free from traditional chord progressions with modal jazz was revolutionary. This track defined a new era...",
        author: "JazzEnthusiast",
        timestamp: new Date(Date.now() - 3600000 * 5),
        replies: 24,
        likes: 89,
    },
    {
        id: "2",
        entityId: "1",
        entityType: "artist",
        title: "Miles Davis influence on modern hip-hop",
        content: "It's fascinating how many hip-hop producers sample Miles Davis. His influence extends far beyond jazz...",
        author: "BeatMaker",
        timestamp: new Date(Date.now() - 3600000 * 12),
        replies: 15,
        likes: 56,
    },
    {
        id: "3",
        title: "Best albums to start with jazz?",
        content:
            "I'm new to jazz and looking for recommendations. I've heard Kind of Blue is essential listening. What else should I explore?",
        author: "MusicNewbie",
        timestamp: new Date(Date.now() - 3600000 * 24),
        replies: 42,
        likes: 31,
    },
]

export default function Feed() {
    const [query, setQuery] = useState("")
    const [selectedEntity, setSelectedEntity] = useState<SimplifiedEntity | null>(null)
    const [entityDiscussionDrawerOpen, setEntityDrawerOpen] = useState(false)

    const { data: results = [], isPending, isError } = useQuery({
        queryKey: ["searchResult", query],
        queryFn: () => search(query),
        enabled: query.length > 0,
    })

    const handleEntityClick = (entity: SimplifiedEntity) => {
        setSelectedEntity(entity)
        setEntityDrawerOpen(true)
    }

    return (
        <>
            <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-6 py-6 space-y-6 pb-20 md:pb-6">
                <SearchInput onQueryChange={setQuery} />

                <SearchResults
                    results={results}
                    isPending={isPending}
                    isError={isError}
                    query={query}
                    onEntityClick={handleEntityClick}
                />

                {query.length === 0 && (
                    <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-6 md:gap-8">
                        <DiscussionSection discussions={discussions} />
                    </div>
                )}
            </main>

            <EntityActions
                entity={selectedEntity}
                open={entityDiscussionDrawerOpen}
                onOpenChange={setEntityDrawerOpen}
            />
        </>
    )
}