"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function AddCoverForm() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="cover-url" className="font-bold uppercase text-xs tracking-wide text-foreground">
          Image URL or Search
        </Label>
        <Input
          id="cover-url"
          placeholder="PASTE URL OR SEARCH"
          className="border-2 border-border bg-card h-12 font-mono uppercase placeholder:text-muted-foreground text-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="cover-description" className="font-bold uppercase text-xs tracking-wide text-foreground">
          Description
        </Label>
        <Textarea
          id="cover-description"
          placeholder="Describe the inspiration..."
          rows={4}
          className="border-2 border-border bg-card resize-none text-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="cover-source" className="font-bold uppercase text-xs tracking-wide text-foreground">
          Source (Optional)
        </Label>
        <Input
          id="cover-source"
          placeholder="Artist, artwork, or reference"
          className="border-2 border-border bg-card h-12 text-foreground"
        />
      </div>

      <Button className="w-full h-12 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-black uppercase tracking-wide shadow-lg shadow-secondary/30">
        Add Cover Inspiration
      </Button>
    </div>
  )
}
