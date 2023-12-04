'use client'

import Image from 'next/image'

import ErrorList from '@/components/error-list'
import LoadingList from '@/components/loading-list'
import { useGetMovieById } from '@/services/movies'

type PageProps = {
  params: { id: string }
}

export default function MovieDetails({ params }: PageProps) {
  const {
    data: movie,
    isSuccess: isSuccessMovie,
    isLoading: isLoadingMovie,
    isError: isErrorMovie,
    refetch: refetchMovie,
  } = useGetMovieById(params.id)

  return (
    <main className="grid grid-cols-12 items-center justify-center">
      <section className="col-span-8 col-start-3 my-10 flex items-center gap-4 rounded border p-4">
        {isLoadingMovie ? (
          <LoadingList />
        ) : isErrorMovie ? (
          <ErrorList retryHandle={refetchMovie} />
        ) : (
          isSuccessMovie && (
            <>
              <Image src={movie.Poster} alt="pic" width={300} height={500} />
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">{movie.Title}</h2>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">
                    Type : <span className="font-normal">{movie.Type}</span>
                  </p>
                  <p className="font-bold">
                    Year : <span className="font-normal">{movie.Year}</span>
                  </p>
                  <p className="font-bold">
                    Country :{' '}
                    <span className="font-normal">{movie.Country}</span>
                  </p>
                  <p className="font-bold">
                    Time : <span className="font-normal">{movie.Runtime}</span>
                  </p>
                  <p className="font-bold">
                    Genre : <span className="font-normal">{movie.Genre}</span>
                  </p>
                  <p className="font-bold">
                    Director :
                    <span className="font-normal">{movie.Director}</span>
                  </p>
                  <p className="font-bold">
                    Actors :<span className="font-normal">{movie.Actors}</span>
                  </p>
                  <p className="text-justify font-bold">
                    Description :
                    <span className="font-normal">{movie.Plot}</span>
                  </p>
                  <p className="font-bold">
                    IMDB Rate :
                    <span className="font-normal">{movie.imdbRating}</span>
                  </p>
                </div>
              </div>
            </>
          )
        )}
      </section>
    </main>
  )
}
