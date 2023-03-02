import { prisma } from '@/lib/primas-client'
import { NextApiRequest, NextApiResponse } from 'next'

type UserDataType = {
  email: string
  name: string
  username: string
  password: string
}

interface CreateUserRequestType extends NextApiRequest {
  body: { userdata: UserDataType }
}

export default async function handler(
  req: CreateUserRequestType,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405)
  }

  const { email, name, username, password } = req.body.userdata

  const userAlreadyExists = await prisma.user.findFirst({
    where: { username },
  })

  if (userAlreadyExists) {
    return res.status(409).json({ error: 'O email passado já está cadastrado' })
  }

  await prisma.user.create({
    data: {
      email,
      name,
      username,
      password,
    },
  })
  return res.status(201)
}
