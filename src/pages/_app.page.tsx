import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import Sidebar from '@/components/sidebar'
import PageContainer from '@/components/page-container'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Sidebar />
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
    </>
  )
}
