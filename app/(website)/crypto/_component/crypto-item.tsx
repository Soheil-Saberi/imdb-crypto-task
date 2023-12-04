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
      className="flex flex-col flex-wrap items-center justify-between gap-6 rounded border px-4 py-6 sm:flex-row "
    >
      <h2 className="text-xl font-bold">{name}</h2>
      <div className="flex flex-wrap items-start gap-8 sm:flex-col sm:gap-2 md:flex-col xl:flex-row 2xl:flex-row">
        <div className="flex items-center gap-2">
          <p className="text-[10px] text-neutral-500 sm:text-[10px] sm:text-sm">
            Price :
          </p>
          <p className="text-[10px] font-bold sm:text-sm">${price}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[10px] text-neutral-500 sm:text-[10px] sm:text-sm">
            Volume (24Hr) :
          </p>
          <p className="text-[10px] font-bold sm:text-sm">
            ${parseFloat(volumeUsd24Hr).toFixed(3)}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[10px] text-neutral-500 sm:text-[10px] sm:text-sm">
            Change (24Hr) :
          </p>
          <p className="text-[10px] font-bold sm:text-sm">
            ${parseFloat(marketCapUsd).toFixed(3)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CryptoItem
