import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import Sidebar from '@/components/sidebar'
import PageContainer from '@/components/page-container'
import { useRouter } from 'next/router'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isInUserRouter = router.asPath !== '/' && router.asPath !== '/?'

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
