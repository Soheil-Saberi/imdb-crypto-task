'use client'

import { Pagination } from 'antd'
import { useEffect, useState } from 'react'

import ErrorList from '@/components/error-list'
import LoadingList from '@/components/loading-list'
import { createWebSocketModule, CryptoPrices } from '@/config/crypto-socket'
import { useGetCryptoList } from '@/services/crypto'

import CryptoItem from './_component/crypto-item'

export default function Crypto() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [cryptoPrices, setCryptoPrices] = useState<CryptoPrices>({})

  const {
    data: cryptoList,
    isSuccess: isSuccessCryptoList,
    isFetching: isFetchingCryptoList,
    isError: isErrorCryptoList,
    refetch: refetchCryptoList,
  } = useGetCryptoList((currentPage - 1) * 10)

  useEffect(() => {
    if (isSuccessCryptoList && cryptoList.data) {
      const cryptoIds = cryptoList.data.map((crypto) => crypto.id).join(',')

      const webSocketModule = createWebSocketModule(
        {
          onMessage: (data) => setCryptoPrices(data),
        },
        cryptoIds,
      )
      return () => {
        webSocketModule.close()
      }
    }
  }, [cryptoList?.data, isSuccessCryptoList])

  return (
    <>
      <h2 className="self-center text-lg font-bold md:self-start md:text-2xl">
        Crypto Currency
      </h2>
      <div className="flex flex-col gap-2">
        {isFetchingCryptoList ? (
          <LoadingList />
        ) : isErrorCryptoList ? (
          <ErrorList retryHandle={refetchCryptoList} />
        ) : (
          isSuccessCryptoList &&
          cryptoList.data && (
            <>
              {cryptoList?.data.map((crypto) => (
                <CryptoItem
                  key={crypto.id}
                  id={crypto.id}
                  name={crypto.name}
                  realTimePrice={cryptoPrices[crypto.id]}
                  firstPrice={parseFloat(crypto.priceUsd).toFixed(2)}
                  volumeUsd24Hr={crypto.volumeUsd24Hr}
                  marketCapUsd={crypto.marketCapUsd}
                />
              ))}
              <Pagination
                className="w-fit self-center"
                current={currentPage}
                total={2000}
                showSizeChanger={false}
                onChange={(page) => setCurrentPage(page)}
              />
            </>
          )
        )}
      </div>
    </>
  )
}
