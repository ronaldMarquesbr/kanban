import { ReactNode } from 'react'
import { PageContainerElement } from './styles'

interface PageContainerProps {
  children: ReactNode
}

export default function PageContainer(props: PageContainerProps) {
  return <PageContainerElement>{props.children}</PageContainerElement>
}
