"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState, useEffect, useRef } from "react"

type SearchInputProps = {
    onQueryChange: (query: string) => void
}

export function SearchInput({ onQueryChange }: SearchInputProps) {
    const [inputValue, setInputValue] = useState("")
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
            onQueryChange(inputValue.trim())
        }, 1000)

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [inputValue, onQueryChange])

    return (
        <div className="relative md:max-w-2xl my-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={"SEARCH ARTISTS, TRACKS, ALBUMS..."}
                className="pl-12 h-14 md:h-16 border-2 border-border bg-card text-foreground placeholder:text-muted-foreground font-mono uppercase text-sm tracking-wide focus:border-primary focus:ring-1 focus:ring-primary"
            />
        </div>
    )
}
