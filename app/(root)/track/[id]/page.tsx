"use server"

import { TrackPage } from "@/components/pages/discover/track";

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <TrackPage id={id} />
}