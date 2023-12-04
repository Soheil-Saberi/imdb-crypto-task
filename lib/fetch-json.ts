export async function fetchJson<JSON = unknown>(
  input: RequestInfo,
  init?: RequestInit,
  nextjsOptions?: object,
): Promise<JSON> {
  const response = await fetch(input, { ...init, ...nextjsOptions })

  const data = await response.json()

  if (response.ok) {
    return data
  }

  throw new FetchError({
    message: response.statusText,
    response,
    data,
  })
}

export const initPostRequest = (
  body: object | FormData = {},
  authorization: object = {},
  method: string = 'POST',
) => {
  return {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...authorization,
    },
    body: typeof body === 'object' ? JSON.stringify(body) : body,
  }
}

export const initGetRequest = (authorization: object = {}) => {
  return {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...authorization,
    },
  }
}

export class FetchError extends Error {
  response: Response
  data: {
    message: string
  }
  constructor({
    message,
    response,
    data,
  }: {
    message: string
    response: Response
    data: {
      message: string
    }
  }) {
    super(message)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FetchError)
    }

    this.name = 'FetchError'
    this.response = response
    this.data = data ?? { message: message }
  }
}
