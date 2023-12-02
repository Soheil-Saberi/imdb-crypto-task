import { DollarOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Button, Flex } from 'antd'
import Title from 'antd/es/typography/Title'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Title level={1}>IMDB - Crypto Currency Project</Title>
      <Flex gap="small">
        <Link href="/imdb">
          <Button size="large" type="primary" icon={<VideoCameraOutlined />}>
            IMDB
          </Button>
        </Link>
        <Link href="/crypto">
          <Button size="large" icon={<DollarOutlined />}>
            Crypto
          </Button>
        </Link>
      </Flex>
    </main>
  )
}
