import { Button } from 'antd'

interface ErrorListProps {
  retryHandle: () => void
}

const ErrorList = ({ retryHandle }: ErrorListProps) => {
  return (
    <div className="flex h-80 w-full flex-col items-center justify-center gap-3">
      <p>Error, try again</p>
      <Button onClick={retryHandle}>Retry</Button>
    </div>
  )
}

export default ErrorList
