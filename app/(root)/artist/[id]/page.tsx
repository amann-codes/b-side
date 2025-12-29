"use server"

import { ArtistPage } from "@/components/pages/discover/artist";

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <ArtistPage id={id} />
}