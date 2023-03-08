import { prisma } from '@/lib/primas-client'
import { sessionOptions } from '@/lib/session'
import { withIronSessionApiRoute } from 'iron-session/next'
import { NextApiRequest } from 'next'
import { z } from 'zod'

const LoginFormSchema = z.object({
  username: z.string(),
  password: z.string(),
})

interface LoginRequestType extends NextApiRequest {
  body: {
    loginData: {
      username: string
      password: string
    }
  }
}

export default withIronSessionApiRoute(async function loginRoute(
  req: LoginRequestType,
  res,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const userData = req.body.loginData

  try {
    LoginFormSchema.parse(userData)
  } catch (error) {
    return res.status(400).json({
      error: 'Os dados foram enviados em um formato incorreto',
    })
  }

  const { username, password } = userData

  const userToLogin = await prisma.user.findFirst({
    where: { username },
  })

  if (!userToLogin) {
    return res.status(404).json({ error: 'usuário não encontrado' })
  }

  const { id, password: userPassword } = userToLogin

  if (password !== userPassword) {
    return res.status(401).json({ error: 'senha incorreta' })
  }

  req.session.user = {
    id,
  }
  await req.session.save()

  return res.status(200).end()
},
sessionOptions)
