export const movieUrl = (path: string) => {
  return process.env.NEXT_PUBLIC_MOVIES_BASE_URL + `${path}`
}
