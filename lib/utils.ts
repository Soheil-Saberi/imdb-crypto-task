import { Dispatch, SetStateAction } from 'react'

import { Movie } from '@/services/type'

export const addToFavorites = (
  movie: Movie,
  favoriteMovies: Movie[],
  setFavoriteMovies: Dispatch<SetStateAction<Movie[]>>,
) => {
  const updatedFavorites = [...favoriteMovies, movie]
  setFavoriteMovies(updatedFavorites)
  localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavorites))
}

export const removeFromFavorites = (
  movie: Movie,
  favoriteMovies: Movie[],
  setFavoriteMovies: Dispatch<SetStateAction<Movie[]>>,
) => {
  const updatedFavorites = favoriteMovies.filter(
    (favMovie) => favMovie.imdbID !== movie.imdbID,
  )
  setFavoriteMovies(updatedFavorites)
  localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavorites))
}

export const toggleFavorite = (
  movie: Movie,
  favoriteMovies: Movie[],
  setFavoriteMovies: Dispatch<SetStateAction<Movie[]>>,
) => {
  if (favoriteMovies.some((favMovie) => favMovie.imdbID === movie.imdbID)) {
    removeFromFavorites(movie, favoriteMovies, setFavoriteMovies)
  } else {
    addToFavorites(movie, favoriteMovies, setFavoriteMovies)
  }
}
