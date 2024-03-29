import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from '@/lib/session'
import { prisma } from '@/lib/primas-client'
import { Header } from './components/Header'

interface EntryPageProps {
  [key: string]: unknown
  name: string
  username: string
}

export default function Dashboard({ name, username }: EntryPageProps) {
  return (
    <>
      <Header profileName={name} />
    </>
  )
}

export const getServerSideProps = withIronSessionSsr<EntryPageProps>(
  async function getServerSideProps({ req, query }) {
    const sessionUserId = req.session.user?.id
    const routeUsername = query.username

    try {
      const user = await prisma.user.findUnique({
        where: {
          id: sessionUserId,
        },
        select: {
          username: true,
          name: true,
        },
      })

      if (routeUsername !== user?.username) {
        return {
          redirect: {
            destination: '/',
            statusCode: 401,
            permanent: true,
          },
        }
      }

      const userData = await prisma.user.findUniqueOrThrow({
        where: {
          id: sessionUserId,
        },
        select: {
          name: true,
          username: true,
        },
      })

      return {
        props: {
          name: userData.name,
          username: userData.username,
        },
      }
    } catch (err) {
      return {
        notFound: true,
      }
    }
  },
  sessionOptions,
)
