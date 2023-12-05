'use client'

import { useEffect, useState } from 'react'

import EmptyList from '@/components/empty-list'
import { toggleFavorite } from '@/lib/utils'
import { Movie } from '@/services/type'

import MovieItem from '../_component/movie-item'

export default function FavoriteMovies() {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([])

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteMovies')
    if (storedFavorites) {
      const parsedFavorites: Movie[] = JSON.parse(storedFavorites)
      setFavoriteMovies(parsedFavorites)
    }
  }, [])

  return (
    <>
      <h2 className="self-center text-lg font-bold md:self-start md:text-2xl">
        Favorite Movies
      </h2>
      <div className="flex flex-col gap-4">
        {!!favoriteMovies.length ? (
          favoriteMovies.map((item) => (
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
          ))
        ) : (
          <EmptyList />
        )}
      </div>
    </>
  )
}
