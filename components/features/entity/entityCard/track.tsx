import { Card } from "@/components/ui/card";
import { SpotifyTrackEntity } from "@/lib/types";
import { Music } from "lucide-react";

interface TrackCardProps {
    entity: SpotifyTrackEntity,
    onClick: (id: string) => void;
    additionalOp?: (id: string) => void
}

export function Track({ entity, onClick, additionalOp }: TrackCardProps) {
    return (
        <Card
            onClick={() => onClick(entity.id)}
            className="cursor-pointer bg-[#1e1e1e] hover:bg-[#242424] transition border border-border/60"
        >
            <div className="flex gap-4 p-4">
                <div className="relative shrink-0">
                    {entity.album.images[0] ?
                        <img
                            src={entity.album.images[0].url}
                            alt={entity.name}
                            className="h-20 w-20 object-cover"
                        />
                        : (
                            <div className="h-20 w-20 rounded-sm bg-muted flex items-center justify-center">
                                <Music />
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
                        {entity.artists.map(a => a.name).join(", ")}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                        {entity.explicit && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-explicit" viewBox="0 0 16 16">
                                <path d="M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826z" />
                                <path d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0zM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5z" />
                            </svg>
                        )}
                        <span className="text-sm text-muted-foreground">
                            {Math.floor(entity.duration_ms / 60000)}:
                            {String(
                                Math.floor((entity.duration_ms % 60000) / 1000)
                            ).padStart(2, "0")}
                        </span>
                    </div>
                </div>
            </div>
        </Card>
    )
}