import { Home } from './home'
import { withIronSessionSsr } from 'iron-session/next'
import { prisma } from '@/lib/primas-client'
import { sessionOptions } from '@/lib/session'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

interface EntryPageProps {
  [key: string]: unknown
  hasSession: boolean
  sessionUsername?: string
}

export default function EntryPage({
  hasSession,
  sessionUsername,
}: EntryPageProps) {
  const router = useRouter()

  useEffect(() => {
    if (hasSession) {
      router.push(`/${sessionUsername}`)
    }
  }, [hasSession, sessionUsername, router])

  return <>{!hasSession && <Home />}</>
}

export const getServerSideProps = withIronSessionSsr<EntryPageProps>(
  async function getServerSideProps({ req }) {
    const userSession = req.session.user
    const userId = userSession?.id

    if (userSession) {
      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
        select: {
          username: true,
        },
      })

      if (user) {
        return {
          props: {
            hasSession: true,
            sessionUsername: user.username,
          },
        }
      }
    }

    return {
      props: {
        hasSession: false,
      },
    }
  },
  sessionOptions,
)
