"use server"

import { AlbumPage } from "@/components/pages/discover/album";


export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <AlbumPage id={id} />;
}