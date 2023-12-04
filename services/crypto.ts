import { useQuery, UseQueryResult } from 'react-query'

import { cryptoUrl } from '@/lib/endpoints'
import { fetchJson } from '@/lib/fetch-json'

import { Crypto, CryptoServerResponseType } from './type'

export const useGetCryptoList = (
  offset = 1,
): UseQueryResult<CryptoServerResponseType<Crypto[]>> => {
  return useQuery(
    ['crypto', offset],
    async () =>
      await fetchJson<CryptoServerResponseType<Crypto[]>>(
        cryptoUrl(`/v2/assets/?limit=10&offset=${offset}`),
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_CRYPTO_API_KEY}`,
            'Accept-Encoding': 'deflate',
          },
        },
      ),
  )
}
