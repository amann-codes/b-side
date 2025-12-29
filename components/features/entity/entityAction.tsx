"use client"

import { TabsContent } from "@/components/ui/tabs"
import { TabsTrigger } from "@/components/ui/tabs"
import { TabsList } from "@/components/ui/tabs"
import { Tabs } from "@/components/ui/tabs"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { EntityDiscussion } from "@/components/features/post/addEntityDiscussion"
import { AddSampleForm } from "@/components/features/post/addSample"
import { AddPerformanceForm } from "@/components/features/post/addPerformance"
import { AddCoverForm } from "@/components/features/post/addCoverInspo"
import type { SimplifiedEntity } from "@/lib/types"
import { MessageSquare, Music, ImageIcon, X, CheckCircle2, Mic2 } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { Redirect } from "@/lib/link-wrapper"

interface EntityActionsProps {
    entity: SimplifiedEntity | null
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function EntityActions({ entity, open, onOpenChange }: EntityActionsProps) {
    const [activeTab, setActiveTab] = useState("discussion")
    const [success, setSuccess] = useState(false)

    if (!entity) return null

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent className="max-h-screen md:max-h-[90vh] h-full md:max-w-3xl md:mx-auto bg-[#2c2c2c] border-t-2 md:border-2 border-border">
                <DrawerHeader className="border-b-2 border-primary bg-[#2c2c2c]">
                    {success && (
                        <div className="bg-success/10 border-b border-success px-4 py-2 flex items-center gap-2 text-success text-xs font-bold uppercase mb-2">
                            <CheckCircle2 className="h-4 w-4" />
                            Operation Successful
                        </div>
                    )}
                    <div className="flex items-start justify-between">
                        <div>
                            <DrawerTitle className="text-balance font-black uppercase tracking-tight text-xl text-foreground">
                                Actions for{" "}
                                <Redirect to={entity.type} id={entity.id}>
                                    <span className="hover:underline">
                                        &lsquo;{entity.name}&rsquo;
                                    </span>
                                </Redirect>
                            </DrawerTitle>
                            <DrawerDescription className="font-mono uppercase text-xs tracking-wide mt-1">
                                Add content related to this {entity.type}
                            </DrawerDescription>
                        </div>
                        <DrawerClose asChild>
                            <Button variant="ghost" size="icon" className="h-10 w-10">
                                <X className="h-5 w-5" />
                            </Button>
                        </DrawerClose>
                    </div>
                </DrawerHeader>

                <div className="overflow-y-auto px-4 md:px-6 py-6">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="grid w-full grid-cols-4 mb-6 bg-muted border-2 border-border h-auto p-1 gap-1 md:gap-2">
                            <TabsTrigger
                                value="discussion"
                                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md font-bold uppercase text-xs transition-all"
                            >
                                <MessageSquare className="h-4 w-4 mr-1" />
                                Discuss
                            </TabsTrigger>
                            <TabsTrigger
                                value="sample"
                                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-md font-bold uppercase text-xs transition-all"
                                disabled={entity.type !== "track"}
                            >
                                <Music className="h-4 w-4 mr-1" />
                                Sample
                            </TabsTrigger>
                            <TabsTrigger
                                value="cover"
                                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-md font-bold uppercase text-xs transition-all"
                                disabled={entity.type !== "album"}
                            >
                                <ImageIcon className="h-4 w-4 mr-1" />
                                Cover
                            </TabsTrigger>
                            <TabsTrigger
                                value="performance"
                                className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-md font-bold uppercase text-xs transition-all"
                            >
                                <Mic2 className="h-4 w-4 mr-1" />
                                Live Performance
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="discussion" className="mt-0">
                            <EntityDiscussion />
                        </TabsContent>

                        <TabsContent value="sample" className="mt-0">
                            <AddSampleForm />
                        </TabsContent>

                        <TabsContent value="cover" className="mt-0">
                            <AddCoverForm />
                        </TabsContent>

                        <TabsContent value="performance" className="mt-0">
                            <AddPerformanceForm />
                        </TabsContent>
                    </Tabs>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
