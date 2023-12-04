import { useQuery, UseQueryResult } from 'react-query'

import { movieUrl } from '@/lib/endpoints'
import { fetchJson } from '@/lib/fetch-json'

import { Movie, MovieDetails, ServerResponseType } from './type'

export const useGetMoviesList = (
  page = 1,
): UseQueryResult<ServerResponseType<'Search', Movie[]>> => {
  return useQuery(
    ['movies', page],
    async () =>
      await fetchJson<ServerResponseType<'Search', Movie[]>>(
        movieUrl(
          `/?apikey=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}&s=all&page=${page}`,
        ),
      ),
  )
}

export const useSearchMovie = (
  search: string,
): UseQueryResult<MovieDetails> => {
  return useQuery(
    ['search', search],
    async () =>
      await fetchJson<MovieDetails>(
        movieUrl(
          `/?apikey=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}&t=${search}`,
        ),
      ),
    {
      enabled: !!search,
    },
  )
}

export const useGetMovieById = (id: string): UseQueryResult<MovieDetails> => {
  return useQuery(
    'movies',
    async () =>
      await fetchJson<MovieDetails>(
        movieUrl(
          `/?apikey=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}&i=${id}&plot=full`,
        ),
      ),
  )
}
