"use client"

import { getTrack } from "@/actions/getTrack";
import { Redirect } from "@/lib/link-wrapper";
import { useQuery } from "@tanstack/react-query";
import { Loader2, Play } from "lucide-react";

export const TrackPage = ({ id }: { id: string }) => {

    const getTrackQuery = useQuery({
        queryKey: ['track', id],
        queryFn: () => getTrack(id)
    })

    if (getTrackQuery.isError) {
        return <div>{getTrackQuery.error.message}</div>
    }

    if (getTrackQuery.isPending) {
        return <Loader2 className="animate-spin" />
    }

    const track = getTrackQuery.data;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex items-center gap-8 mb-12 bg-card p-8 rounded-2xl border border-border">
                <img src={track.album.images[0]?.url} className="w-48 h-48 shadow-lg rounded-md rotate-2" />
                <div>
                    <h1 className="text-4xl font-black mb-2">{track.name}</h1>
                    <p className="text-xl text-primary font-bold mb-4">{track.artists.map((a, i) => <Redirect key={i} to={a.type} id={a.id}>{a.name}{i < track.artists.length - 1 && ", "}</Redirect>)}</p>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 bg-spotify text-black font-bold px-6 py-2 rounded-full hover:scale-105 transition-transform">
                            <Play fill="black" size={16} /> Play on Spotify
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};