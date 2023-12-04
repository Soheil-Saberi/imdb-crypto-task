import { Input } from 'antd'
import { useState } from 'react'

import ErrorList from '@/components/error-list'
import LoadingList from '@/components/loading-list'
import { useSearchMovie } from '@/services/movies'

import SearchMovieItem from './search-movie-item'

const { Search } = Input

const SearchMovies = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isOpenSearchBox, setIsOpenSearchBox] = useState<boolean>(false)

  const {
    data: searchedMovies,
    isSuccess: isSuccessSearchedMovies,
    isFetching: isFetchingSearchedMovies,
    isError: isErrorSearchedMovies,
    refetch: refetchSearchedMovies,
  } = useSearchMovie(searchTerm)

  const handleSearch = (searchValue: string) => {
    if (searchValue) {
      setIsOpenSearchBox(true)
      setSearchTerm(searchValue)
    }
  }

  return (
    <div className="relative z-40">
      <Search
        enterButton
        onBlur={() => setIsOpenSearchBox(false)}
        className=" w-full md:w-[350px]"
        placeholder="Search ..."
        onSearch={handleSearch}
      />
      {isOpenSearchBox && (
        <div className="absolute top-10 w-full rounded border bg-neutral-50 p-2 shadow-sm">
          {isFetchingSearchedMovies ? (
            <LoadingList size="small" />
          ) : isErrorSearchedMovies ? (
            <ErrorList retryHandle={refetchSearchedMovies} />
          ) : (
            isSuccessSearchedMovies && (
              <SearchMovieItem
                id={searchedMovies.imdbID}
                title={searchedMovies.Title}
                poster={searchedMovies.Poster}
              />
            )
          )}
        </div>
      )}
    </div>
  )
}

export default SearchMovies
