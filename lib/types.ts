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

export type Entity =
  | SpotifyArtistEntity
  | SpotifyAlbumEntity
  | SpotifyTrackEntity

export type SpotifyImage = {
  url: string
  height: number
  width: number
}

export type SpotifyTrack = {
  id: string
  name: string
  type: "track"
  popularity: number
  album_type: AlbumType
  album: SpotifyAlbum
  artists: SpotifyArtist[]
  duration_ms: number
  explicit: boolean
}

export type SpotifyArtist = {
  id: string
  name: string
  type: "artist"
  genres: string[]
  popularity: number
  images: SpotifyImage[]
}

export type SpotifyAlbum = {
  id: string
  name: string
  type: "album"
  images: SpotifyImage[]
  release_date: string
  album_type: AlbumType
  total_tracks: number

}

export type SpotifyArtistEntity = SpotifyArtist & {
  entityType: "artist"
}

export type SpotifyAlbumEntity = SpotifyAlbum & {
  entityType: "album"
}

export type SpotifyTrackEntity = SpotifyTrack & {
  entityType: "track"
}