import { sessionOptions } from '@/lib/session'
import { withIronSessionApiRoute } from 'iron-session/next'

export default withIronSessionApiRoute(function userRoute(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  res.send({ user: req.session.user })
}, sessionOptions)
