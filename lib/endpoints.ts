export const movieUrl = (path: string) => {
  return process.env.NEXT_PUBLIC_MOVIES_BASE_URL + `${path}`
}

export const cryptoUrl = (path: string) => {
  return process.env.NEXT_PUBLIC_CRYPTO_BASE_URL + `${path}`
}
