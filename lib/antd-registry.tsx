'use client'

import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
import type Entity from '@ant-design/cssinjs/es/Cache'
import { useServerInsertedHTML } from 'next/navigation'
import { PropsWithChildren, useMemo, useRef } from 'react'

const StyledComponentsRegistry = ({ children }: PropsWithChildren) => {
  const cache = useMemo<Entity>(() => createCache(), [])
  const isServerInserted = useRef<boolean>(false)
  useServerInsertedHTML(() => {
    if (isServerInserted.current) {
      return
    }
    isServerInserted.current = true
    return (
      <style
        id="antd"
        dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
      />
    )
  })
  return <StyleProvider cache={cache}>{children}</StyleProvider>
}

export default StyledComponentsRegistry
