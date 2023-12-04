import { DollarOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <h1 className="text-4xl font-bold">Movies - Crypto Currency Project</h1>
      <div className="flex gap-4">
        <Link href="/movies">
          <Button size="large" type="primary" icon={<VideoCameraOutlined />}>
            Movies
          </Button>
        </Link>
        <Link href="/crypto">
          <Button size="large" icon={<DollarOutlined />}>
            Crypto
          </Button>
        </Link>
      </div>
    </main>
  )
}
