export type GoogleSignInBodyType = {
  providerId: string;
  providerAccountId: string;

  accessToken?: string | null;
  refreshToken?: string | null;
  accessTokenExpires?: Date | null;

  user: {
    email?: string | null;
    name?: string | null;
    image?: string | null;
  };
};


export interface Discussion {
  id: string
  entityId?: string
  entityType?: EntityType
  title: string
  content: string
  author: string
  timestamp: Date
  replies: number
  likes: number
}

export interface Sample {
  id: string
  trackId: string
  originalTrack: string
  artist: string
  timestamp: string
}

export interface CoverArtInspiration {
  id: string
  albumId: string
  imageUrl: string
  description: string
  source?: string
}

export interface Performance {
  id: string
  entityId: string
  entityType: EntityType
  venue: string
  date: string
  description: string
  videoUrl?: string
}

export type AlbumType = "single" | "album" | "compilation"

export type EntityType = "artist" | "track" | "album"

export type SimplifiedEntity =
  | SimplifiedSpotifyArtistEntity
  | SimplifiedSpotifyAlbumEntity
  | SimplifiedSpotifyTrackEntity

export type SpotifyImage = {
  url: string
  height: number
  width: number
}

export type SimplifiedSpotifyTrack = {
  id: string
  name: string
  type: "track"
  popularity: number
  album_type: AlbumType
  album: SimplifiedSpotifyAlbum
  artists: SimplifiedSpotifyArtist[]
  duration_ms: number
  explicit: boolean
}

export type SimplifiedSpotifyArtist = {
  id: string
  name: string
  type: "artist"
  genres: string[]
  popularity: number
  images: SpotifyImage[]
}

export type SimplifiedSpotifyAlbum = {
  id: string
  name: string
  type: "album"
  images: SpotifyImage[]
  release_date: string
  album_type: AlbumType
  total_tracks: number

}

export type SimplifiedSpotifyArtistEntity = SimplifiedSpotifyArtist & {
  entityType: "artist"
}

export type SimplifiedSpotifyAlbumEntity = SimplifiedSpotifyAlbum & {
  entityType: "album"
}

export type SimplifiedSpotifyTrackEntity = SimplifiedSpotifyTrack & {
  entityType: "track"
}

export type SpotifyArtist = {
  followers: {
    total: number
  }
  genres: string[]
  href: string
  id: string
  name:string
  images: SpotifyImage[]
  popularity: number
  type: string
}


export type SpotifyAlbum = {
  album_type: string
  total_tracks: number
  id: string
  images: SpotifyImage[]
  name: string
  release_date: string
  type: string
  artists: SimplifiedSpotifyArtist[]
  tracks: SimplifiedSpotifyTrack[]
  genres?: string[]
  popularity?: number
}


export type SpotifyTrack = {
  album: SpotifyAlbum
  artists: SimplifiedSpotifyArtist[]
  duration_ms: number
  explicit: boolean
  id: string
  name: string
  popularity: number
}