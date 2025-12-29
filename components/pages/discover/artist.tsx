"use client"

import { getArtist } from "@/actions/getArtist";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

export const ArtistPage = ({ id }: { id: string }) => {

    const getArtistQuery = useQuery({
        queryKey: ['artist', id],
        queryFn: () => getArtist(id)
    })

    if (getArtistQuery.isError) {
        return <div>{getArtistQuery.error.message}</div>
    }

    if (getArtistQuery.isPending) {
        return <Loader2 className="animate-spin" />
    }

    const artist = getArtistQuery.data
    
    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="relative h-64 rounded-xl overflow-hidden mb-8 flex items-end p-8 bg-linear-to-t from-background to-transparent border border-border">
                <img src={artist.images[0]?.url} className="absolute inset-0 w-full h-full object-cover -z-10 opacity-40 blur-sm" />
                <div className="flex items-center gap-6">
                    <img src={artist.images[0]?.url} className="w-40 h-40 rounded-full shadow-2xl border-4 border-card" />
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">Verified Artist</span>
                        <h1 className="text-6xl font-black">{artist.name}</h1>
                        <p className="text-muted-foreground mt-2">{artist.genres.join(", ")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};