"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EntityCard } from "@/components/features/entity/entityCard/card"
import type { Entity } from "@/lib/types"

const categories = ["All", "Tracks", "Artists", "Albums"] as const
type Category = typeof categories[number]

type SearchResultsProps = {
    results: Entity[]
    isPending: boolean
    isError: boolean
    query: string
    onEntityClick: (entity: Entity) => void
}

export function SearchResults({
    results,
    isPending,
    isError,
    query,
    onEntityClick,
}: SearchResultsProps) {
    const hasQuery = query.length > 0

    if (!hasQuery) return null

    if (isError) return <ErrorState />

    if (isPending) return <LoadingState />

    if (results.length === 0) return <EmptyResults />

    const grouped: Record<Category, Entity[]> = {
        All: results,
        Albums: results.filter(e => e.entityType === "album"),
        Artists: results.filter(e => e.entityType === "artist"),
        Tracks: results.filter(e => e.entityType === "track"),
    }


    return (
        <>
            <div className="bg-primary px-4 py-2 text-primary-foreground">
                <span className="text-[10px] font-black uppercase tracking-widest italic">
                    SEARCH RESULTS FOR: {query}
                </span>
            </div>

            <Tabs defaultValue="All" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                    {categories.map((cat) => (
                        <TabsTrigger key={cat} value={cat}>
                            {cat}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {categories.map((cat) => (
                    <TabsContent key={cat} value={cat} className="mt-4">
                        {grouped[cat].length === 0 ? (
                            <EmptyResults />
                        ) : (
                            <div className="space-y-3">
                                {grouped[cat].map((entity) => (
                                    <EntityCard
                                        key={entity.id}
                                        entity={entity}
                                        onClick={() => onEntityClick(entity)}
                                    />
                                ))}
                            </div>
                        )}
                    </TabsContent>
                ))}
            </Tabs>
        </>
    )
}

function LoadingState() {
    return (
        <div className="py-16 text-center">
            <p className="text-lg font-bold text-muted-foreground uppercase tracking-widest italic animate-pulse">
                Searching...
            </p>
        </div>
    )
}

function EmptyResults() {
    return (
        <div className="py-16 text-center">
            <p className="text-lg font-bold text-muted-foreground uppercase tracking-widest italic">
                No results found
            </p>
        </div>
    )
}

function ErrorState() {
    return (
        <div className="py-16 text-center">
            <p className="text-lg font-bold text-destructive uppercase tracking-widest italic">
                Error loading results
            </p>
        </div>
    )
}