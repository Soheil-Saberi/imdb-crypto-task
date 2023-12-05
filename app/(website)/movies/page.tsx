'use client'

import { HeartOutlined } from '@ant-design/icons'
import { Button, Pagination } from 'antd'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import EmptyList from '@/components/empty-list'
import ErrorList from '@/components/error-list'
import LoadingList from '@/components/loading-list'
import { toggleFavorite } from '@/lib/utils'
import { useGetMoviesList } from '@/services/movies'
import { Movie } from '@/services/type'

import MovieItem from './_component/movie-item'
import SearchMovies from './_component/search-movies'

export default function Movies() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([])

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteMovies')
    if (storedFavorites) {
      const parsedFavorites: Movie[] = JSON.parse(storedFavorites)
      setFavoriteMovies(parsedFavorites)
    }
  }, [])

  const {
    data: movies,
    isSuccess: isSuccessMovies,
    isFetching: isFetchingMovies,
    isError: isErrorMovies,
    refetch: refetchMovies,
  } = useGetMoviesList(currentPage)

  return (
    <>
      <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:gap-0">
        <h2 className="text-lg font-bold md:text-2xl">Movies List</h2>
        <div className="flex gap-2">
          <Link href="/movies/favorite">
            <Button icon={<HeartOutlined />}></Button>
          </Link>
          <SearchMovies />
        </div>
      </div>
      {isFetchingMovies ? (
        <LoadingList />
      ) : isErrorMovies ? (
        <ErrorList retryHandle={refetchMovies} />
      ) : isSuccessMovies && !!movies?.Search.length ? (
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            {movies?.Search.map((item) => (
              <MovieItem
                key={item.imdbID}
                id={item.imdbID}
                poster={item.Poster}
                title={item.Title}
                year={item.Year}
                type={item.Type}
                favoriteHandler={() =>
                  toggleFavorite(item, favoriteMovies, setFavoriteMovies)
                }
                isFavorite={favoriteMovies.some(
                  (favMovie) => favMovie.imdbID === item.imdbID,
                )}
              />
            ))}
          </div>
          <Pagination
            className="self-center"
            current={currentPage}
            total={parseInt(movies?.totalResults!)}
            showSizeChanger={false}
            onChange={(page) => setCurrentPage(page)}
          />
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  )
}
