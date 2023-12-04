import Image from 'next/image'
import Link from 'next/link'

interface SearchMovieItem {
  id: string
  poster: string
  title: string
}

const SearchMovieItem = ({ id, poster, title }: SearchMovieItem) => {
  return (
    <Link href={`/movies/${id}`}>
      <div className="flex w-full cursor-pointer items-center gap-2 px-2 py-1 hover:bg-neutral-100">
        <Image src={poster} alt="pic" width={50} height={100} />
        <p className="text-lg font-bold">{title}</p>
      </div>
    </Link>
  )
}

export default SearchMovieItem
