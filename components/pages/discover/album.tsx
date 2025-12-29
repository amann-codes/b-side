"use client"

import { getAlbum } from "@/actions/getAlbum";
import { SectionHeader } from "@/components/layout/sectionHead";
import { Redirect } from "@/lib/link-wrapper";
import { SpotifyAlbum } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { Loader2, Music } from "lucide-react";
import Link from "next/link";

export const AlbumPage = ({ id }: { id: string }) => {

    const getAlbumQuery = useQuery({
        queryKey: ['album', id],
        queryFn: () => getAlbum(id)
    })

    if (getAlbumQuery.isError) {
        return <div>{getAlbumQuery.error.message}</div>
    }

    if (getAlbumQuery.isPending) {
        return <Loader2 className="animate-spin" />
    }

    const entity: SpotifyAlbum = getAlbumQuery.data;
    let albumLength = 0;
    entity.tracks.forEach(t => albumLength = albumLength + t.duration_ms);
    return (
        < div className="max-w-6xl mx-auto p-6" >
            <div className="flex flex-col md:flex-row gap-8 items-end mb-12">
                <img src={entity.images[0]?.url} className="w-64 h-64 shadow-2xl rounded-sm" />
                <div className="flex-1">
                    <h1 className="text-5xl font-black mb-4">{entity.name}</h1>
                    <div className="flex text-4xl font-black text-primary">
                        {
                            entity.artists &&
                            entity.artists.map((a, i) =>
                                <Redirect key={i} to={a.type} id={a.id}>
                                    <span className="hover:underline">
                                        {a.name}
                                    </span>
                                </Redirect>
                            )
                        }
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        {`${(Math.floor(albumLength / 60000) == 0) ? "" : Math.floor(albumLength / 3600000)} hr ${Math.floor(albumLength % 60000 / 1000) == 0 ? "" : ((albumLength % 60000) / 1000).toFixed(0).padStart(2, '0')} min`}
                        <span className="font-bold">{entity.release_date.split('-')[0]}</span>
                        <span className="text-muted-foreground">• {entity.total_tracks} songs</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <SectionHeader title="Tracklist" icon={Music} />
                    <div className="border border-border rounded-lg overflow-hidden">
                        {entity.tracks.map((track, i) => (
                            <div key={track.id} className="flex items-center justify-between p-4 border-b border-border last:border-0 hover:bg-muted/30">
                                <div className="flex items-center gap-3">
                                    <span className="text-muted-foreground text-sm w-4">{i + 1}</span>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-4">
                                            <Link href={`/${track.type}/${track.id}`}>
                                                <span className="font-medium hover:underline">{track.name}</span>
                                            </Link>
                                            {track
                                                .explicit && <span className="text-[10px] bg-muted px-1 rounded text-muted-foreground">E</span>
                                            }
                                        </div>
                                        <div className="flex text-muted-foreground">
                                            {
                                                track.artists &&
                                                track.artists.map((a, i) =>
                                                    <Redirect key={i} to={a.type} id={a.id}>
                                                        <span className="hover:underline">
                                                            {a.name}{i < track.artists.length - 1 && ", "}
                                                        </span>
                                                    </Redirect>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>

                                <span className="text-muted-foreground text-sm">
                                    {Math.floor(track.duration_ms / 60000)}:{((track.duration_ms % 60000) / 1000).toFixed(0).padStart(2, '0')}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
};