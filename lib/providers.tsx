'use client'

import { ConfigProvider } from 'antd'
import { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import theme from '@/theme/theme-config'

import StyledComponentsRegistry from './antd-registry'

export const Providers = (props: PropsWithChildren) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        <ConfigProvider theme={theme}>{props.children}</ConfigProvider>
      </StyledComponentsRegistry>
    </QueryClientProvider>
  )
}
