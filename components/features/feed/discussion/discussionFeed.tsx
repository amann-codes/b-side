"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar } from "@/components/ui/avatar"
import type { Discussion } from "@/lib/types"
import { MessageSquare, Heart } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

interface DiscussionFeedProps {
    discussions: Discussion[]
}

export function DiscussionFeed({ discussions }: DiscussionFeedProps) {
    return (
        <div className="space-y-3">
            {discussions.map((discussion) => (
                <Card
                    key={discussion.id}
                    className="border-2 border-border bg-[#1e1e1e] p-4 md:p-5 cursor-pointer transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.01]"
                >
                    <div className="flex gap-4">
                        <Avatar className="h-12 w-12 md:h-14 md:w-14 border-2 border-border bg-muted shrink-0">
                            <div className="flex items-center justify-center h-full w-full text-base md:text-lg font-black text-foreground">
                                {discussion.author.charAt(0).toUpperCase()}
                            </div>
                        </Avatar>

                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-2">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-black text-sm text-foreground uppercase tracking-tight">
                                        {discussion.author}
                                    </span>
                                    {discussion.entityType && (
                                        <Badge
                                            variant="outline"
                                            className="text-[10px] px-2 py-0.5 h-5 border-2 border-secondary/40 text-secondary font-bold uppercase"
                                        >
                                            {discussion.entityType}
                                        </Badge>
                                    )}
                                </div>
                                <span className="text-xs text-muted-foreground shrink-0 font-mono uppercase">
                                    {formatDistanceToNow(discussion.timestamp, { addSuffix: true })}
                                </span>
                            </div>

                            {discussion.likes > 20 && (
                                <Badge className="mb-2 bg-error text-white border-none font-black uppercase text-[10px] py-0 px-2 h-5">
                                    Hot Take Alert
                                </Badge>
                            )}

                            <h4 className="font-black text-base mb-2 text-foreground tracking-tight">{discussion.title}</h4>
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{discussion.content}</p>

                            <div className="flex items-center gap-4 text-muted-foreground">
                                <button className="flex items-center gap-1.5 text-xs hover:text-secondary transition-colors font-bold uppercase">
                                    <MessageSquare className="h-4 w-4" />
                                    <span>{discussion.replies}</span>
                                </button>
                                <button className="flex items-center gap-1.5 text-xs hover:text-secondary transition-colors font-bold uppercase">
                                    <Heart className="h-4 w-4" />
                                    <span>{discussion.likes}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    )
}
