"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"

export function EntityDiscussion() {
    return (
        <div className="space-y-4">
            <div className="bg-error/10 border border-error/20 p-3 flex items-start gap-3">
                <AlertCircle className="h-4 w-4 text-error shrink-0 mt-0.5" />
                <p className="text-[10px] text-error font-bold uppercase leading-tight">
                    Hot Take: Discussions here are archived for eternity. Keep it high-fidelity.
                </p>
            </div>

            <div className="space-y-2">
                <Label htmlFor="discussion-title" className="font-bold uppercase text-xs tracking-wide text-foreground">
                    Discussion Title
                </Label>
                <Input
                    id="discussion-title"
                    placeholder="WHAT'S ON YOUR MIND?"
                    className="border-2 border-border bg-card h-12 font-mono uppercase placeholder:text-muted-foreground text-foreground"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="discussion-content" className="font-bold uppercase text-xs tracking-wide text-foreground">
                    Content
                </Label>
                <Textarea
                    id="discussion-content"
                    placeholder="Share your thoughts..."
                    rows={6}
                    className="border-2 border-border bg-card resize-none text-foreground"
                />
            </div>

            <Button className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-black uppercase tracking-wide shadow-lg shadow-primary/30">
                Create Discussion
            </Button>
        </div>
    )
}
