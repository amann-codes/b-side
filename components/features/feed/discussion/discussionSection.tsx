"use client"

import { DiscussionFeed } from "@/components/features/feed/discussion/discussionFeed"
import type { Discussion } from "@/lib/types"

interface DiscussionSectionProps {
    discussions: Discussion[]
}

export function DiscussionSection({ discussions }: DiscussionSectionProps) {
    return (
        <section>
            <h2 className="text-lg md:text-xl font-black mb-4 text-foreground uppercase tracking-tight border-l-4 border-primary pl-3">
                Recent Discussions
            </h2>
            <DiscussionFeed discussions={discussions} />
        </section>
    )
}
