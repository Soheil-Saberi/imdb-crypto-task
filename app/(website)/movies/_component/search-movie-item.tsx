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
      <div className="z-40 flex w-full cursor-pointer items-center gap-2 px-2 py-1 hover:bg-neutral-100">
        <div className="relative h-24 w-16">
          <Image
            src={poster === 'N/A' ? '/assets/images/default-img.png' : poster}
            alt="pic"
            fill
          />
        </div>
        <p className="text-lg font-bold">{title}</p>
      </div>
    </Link>
  )
}

export default SearchMovieItem
