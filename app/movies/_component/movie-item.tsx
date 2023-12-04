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
}

const MovieItem = ({ id, poster, title, year, type }: MovieItemProps) => {
  return (
    <div
      id={id}
      className="flex items-center justify-between rounded border p-2"
    >
      <div className="flex gap-2">
        <Image src={poster} alt="pic" width={150} height={250} />
        <div className="flex flex-col justify-around">
          <h2 className="text-xl font-bold">{title}</h2>
          <h5 className="text-lg font-bold text-neutral-400">Year : {year}</h5>
          <h5 className="text-lg font-bold text-neutral-400">Type : {type}</h5>
        </div>
      </div>
      <Link href={`/movies/${id}`}>
        <Button size="large" type="link">
          See Details
        </Button>
      </Link>
    </div>
  )
}

export default MovieItem
