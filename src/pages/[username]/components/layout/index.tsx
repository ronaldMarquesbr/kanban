import { ReactNode } from 'react'
import PageContainer from './page-container'
import Sidebar from './sidebar'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Sidebar />
      <PageContainer>{children}</PageContainer>
    </>
  )
}
