import { Spin } from 'antd'

interface LoadingListProps {
  size?: 'large' | 'small'
}

const LoadingList = ({ size = 'large' }: LoadingListProps) => {
  return (
    <div
      className={`flex  w-full items-center justify-center ${
        size === 'large' ? 'h-80' : 'h-10'
      }`}
    >
      <Spin />
    </div>
  )
}

export default LoadingList
