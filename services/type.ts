export type MoviesServerResponseType<T extends string, U> = {
  [key in T as `${key}`]: U
} & {
  totalResults: string
  Response: 'True' | 'False'
}

export type CryptoServerResponseType<T> = {
  data: T
  timestamp: number
}

export type MovieType = 'movie' | 'series' | 'episode'

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: MovieType
  Poster: string
}

export interface MovieDetails {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: {
    Source: string
    Value: string
  }[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: 'True' | 'False'
}

export type Crypto = {
  id: string
  rank: string
  symbol: string
  name: string
  supply: string
  maxSupply: string | null
  marketCapUsd: string
  volumeUsd24Hr: string
  priceUsd: string
  changePercent24Hr: string
  vwap24Hr: string
}
