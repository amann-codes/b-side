"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function AddPerformanceForm() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="performance-venue" className="font-bold uppercase text-xs tracking-wide text-foreground">
          Venue
        </Label>
        <Input
          id="performance-venue"
          placeholder="WHERE WAS THE PERFORMANCE?"
          className="border-2 border-border bg-card h-12 font-mono uppercase placeholder:text-muted-foreground text-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="performance-date" className="font-bold uppercase text-xs tracking-wide text-foreground">
          Date
        </Label>
        <Input id="performance-date" type="date" className="border-2 border-border bg-card h-12 text-foreground" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="performance-description" className="font-bold uppercase text-xs tracking-wide text-foreground">
          Description
        </Label>
        <Textarea
          id="performance-description"
          placeholder="What made this performance special?"
          rows={4}
          className="border-2 border-border bg-card resize-none text-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="performance-video" className="font-bold uppercase text-xs tracking-wide text-foreground">
          Video URL (Optional)
        </Label>
        <Input
          id="performance-video"
          placeholder="YouTube, Vimeo, etc."
          className="border-2 border-border bg-card h-12 text-foreground"
        />
      </div>

      <Button className="w-full h-12 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-black uppercase tracking-wide shadow-lg shadow-secondary/30">
        Add Performance
      </Button>
    </div>
  )
}
