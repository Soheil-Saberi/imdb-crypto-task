import { useEffect, useState } from 'react'

interface CryptoItemProps {
  id: string
  name: string
  realTimePrice?: string
  firstPrice: string
  volumeUsd24Hr: string
  marketCapUsd: string
}

const CryptoItem = ({
  id,
  name,
  realTimePrice,
  firstPrice,
  volumeUsd24Hr,
  marketCapUsd,
}: CryptoItemProps) => {
  const [price, setPrice] = useState<string>(parseFloat(firstPrice).toFixed(2))

  useEffect(() => {
    if (realTimePrice) setPrice(realTimePrice)
  }, [realTimePrice])

  return (
    <div
      key={id}
      className="flex items-center justify-between rounded border px-4 py-6"
    >
      <h2 className="text-xl font-bold">{name}</h2>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <p className="text-sm text-neutral-500">Price : </p>
          <p className="text-sm font-bold">${price}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-neutral-500">Volume (24Hr) : </p>
          <p className="text-sm font-bold">
            ${parseFloat(volumeUsd24Hr).toFixed(3)}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-neutral-500">Change (24Hr) : </p>
          <p className="text-sm font-bold">
            ${parseFloat(marketCapUsd).toFixed(3)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CryptoItem
