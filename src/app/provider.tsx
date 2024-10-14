'use client'

import rootTheme from '@/theme'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={rootTheme}>{children}</ChakraProvider>
}