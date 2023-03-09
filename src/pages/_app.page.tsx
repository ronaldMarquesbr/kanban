import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import Sidebar from './[username]/components/sidebar'
import PageContainer from './[username]/components/page-container'
import { useRouter } from 'next/router'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isInUserRouter = router.query.username

  return (
    <>
      {isInUserRouter ? (
        <>
          <Sidebar />
          <PageContainer>
            <Component {...pageProps} />
          </PageContainer>
        </>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}
