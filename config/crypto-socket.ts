export type CryptoPrices = {
  [key: string]: string
}

type WebSocketModuleProps = {
  onMessage: (data: CryptoPrices) => void
}

export function createWebSocketModule(
  props: WebSocketModuleProps,
  cryptoIds?: string,
) {
  let ws: WebSocket | null = null
  const { onMessage } = props
  let reconnectTimeout: NodeJS.Timeout | null = null

  const connect = () => {
    ws = new WebSocket(
      `wss://ws.coincap.io/prices?assets=${cryptoIds || 'ALL'}`,
    )

    ws.onopen = () => {
      console.log('WebSocket connected to CoinCap')
      clearTimeoutReconnect()
    }

    ws.onerror = (error) => {
      console.error('WebSocket error:', error)
      reconnect()
    }

    ws.onclose = () => {
      console.log('WebSocket closed')
      reconnect()
    }

    ws.onmessage = (message) => {
      try {
        const data = JSON.parse(message.data)
        onMessage(data)
      } catch (error) {
        console.error('Error parsing WebSocket message:', error)
      }
    }
  }

  const reconnect = () => {
    if (!reconnectTimeout) {
      reconnectTimeout = setTimeout(() => {
        connect()
        reconnectTimeout = null
      }, 3000)
    }
  }

  const clearTimeoutReconnect = () => {
    if (reconnectTimeout) {
      clearTimeout(reconnectTimeout)
      reconnectTimeout = null
    }
  }

  const close = () => {
    clearTimeoutReconnect()
    ws?.close()
  }

  connect()

  return {
    close,
  }
}
