import { HeartOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'

import { MovieType } from '@/services/type'

interface MovieItemProps {
  id: string
  poster: string
  title: string
  year: string
  type: MovieType
  favoriteHandler: () => void
  isFavorite: boolean
}

const MovieItem = ({
  id,
  poster,
  title,
  year,
  type,
  favoriteHandler,
  isFavorite = false,
}: MovieItemProps) => {
  return (
    <div
      id={id}
      className="flex flex-col items-center justify-between gap-5 rounded border p-2 md:flex-row md:gap-0"
    >
      <div className="flex flex-col items-center gap-2 md:flex-row">
        <Image src={poster} alt="pic" width={150} height={250} />
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-8">
          <h2 className="text-md line-clamp-1 font-bold md:line-clamp-none md:text-xl">
            {title}
          </h2>
          <h5 className="text-sm font-bold text-neutral-400 md:text-lg">
            Year : {year}
          </h5>
          <h5 className="text-sm font-bold text-neutral-400 md:text-lg">
            Type : {type}
          </h5>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Link href={`/movies/${id}`}>
          <Button size="large" type="link">
            See Details
          </Button>
        </Link>
        <Button
          onClick={favoriteHandler}
          type={isFavorite ? 'primary' : 'default'}
          icon={<HeartOutlined />}
        >
          {isFavorite ? 'Remove from Favorite' : 'Add to Favorites'}
        </Button>
      </div>
    </div>
  )
}

export default MovieItem
