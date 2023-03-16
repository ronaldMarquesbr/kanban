import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { UserContext } from '@/context/userContext'
import { Layout } from './[username]/components/layout'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isInUserRouter = router.query.username

  return (
    <UserContext>
      {isInUserRouter ? (
        <>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      ) : (
        <Component {...pageProps} />
      )}
    </UserContext>
  )
}
