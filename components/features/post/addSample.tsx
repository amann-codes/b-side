"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AddSampleForm() {
    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="sample-track" className="font-bold uppercase text-xs tracking-wide text-foreground">
                    Original Track Sampled
                </Label>
                <Input
                    id="sample-track"
                    placeholder="ENTER TRACK NAME"
                    className="border-2 border-border bg-card h-12 font-mono uppercase placeholder:text-muted-foreground text-foreground"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="sample-artist" className="font-bold uppercase text-xs tracking-wide text-foreground">
                    Original Artist
                </Label>
                <Input
                    id="sample-artist"
                    placeholder="ENTER ARTIST NAME"
                    className="border-2 border-border bg-card h-12 font-mono uppercase placeholder:text-muted-foreground text-foreground"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="sample-timestamp" className="font-bold uppercase text-xs tracking-wide text-foreground">
                    Timestamp
                </Label>
                <Input
                    id="sample-timestamp"
                    placeholder="e.g., 1:23 - 1:45"
                    className="border-2 border-border bg-card h-12 text-foreground"
                />
            </div>

            <Button className="w-full h-12 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-black uppercase tracking-wide shadow-lg shadow-secondary/30">
                Add Sample Info
            </Button>
        </div>
    )
}
