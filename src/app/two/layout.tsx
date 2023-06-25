import React from 'react'
import { Providers } from '@/redux/provider'

type Props = {
  children: React.ReactNode
}

const layout = ({ children }: Props) => {
  return <Providers>{children}</Providers>
}

export default layout
