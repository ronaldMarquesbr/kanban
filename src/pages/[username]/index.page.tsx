import { withIronSessionSsr } from 'iron-session/next'
import { sessionOptions } from '@/lib/session'
import { prisma } from '@/lib/primas-client'

interface EntryPageProps {
  [key: string]: unknown
  name: string | undefined
}

export default function Dashboard({ name }: EntryPageProps) {
  return <h1>{name}</h1>
}

export const getServerSideProps = withIronSessionSsr<EntryPageProps>(
  async function getServerSideProps({ req, query, res }) {
    const sessionUserId = req.session.user?.id
    const routeUsername = query.username

    const user = await prisma.user.findUnique({
      where: {
        id: sessionUserId,
      },
      select: {
        username: true,
      },
    })

    if (routeUsername !== user?.username) {
      res.statusCode = 401
      res.end()
    }

    const userData = await prisma.user.findUnique({
      where: {
        id: sessionUserId,
      },
      select: {
        name: true,
      },
    })

    if (!userData) {
      res.statusCode = 500
      res.end()
    }

    return {
      props: {
        name: userData?.name,
      },
    }

    // if (userSession) {
    //   const user = await prisma.user.findUnique({
    //     where: {
    //       id: sessionUserId,
    //     },
    //     select: {
    //       username: true,
    //     },
    //   })

    //   if (user) {
    //     return {
    //       props: {
    //         hasSession: true,
    //         sessionUsername: user.username,
    //       },
    //     }
    //   }
    // }

    // return {
    //   props: {
    //     hasSession: false,
    //   },
    // }
  },
  sessionOptions,
)
