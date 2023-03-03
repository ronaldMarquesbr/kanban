import { prisma } from '@/lib/primas-client'
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const RegisterFormSchema = z.object({
  name: z
    .string()
    .min(5, { message: 'O nome deve conter no mínimo 5 caracteres' })
    .max(35, { message: 'O nome deve ter no máximo 35 caracteres' }),
  username: z
    .string()
    .min(3, { message: 'O nome deve conter no mínimo 3 caracteres' })
    .max(25, { message: 'O nome deve ter no máximo 25 caracteres' }),
  email: z
    .string()
    .email({ message: 'Digite um email válido' })
    .min(10, { message: 'O nome deve conter no mínimo 10 caracteres' })
    .max(40, { message: 'O nome deve ter no máximo 40 caracteres' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve conter no mínimo 6 caracteres' })
    .max(30, {
      message: 'A senha deve conter no máximo 30 caracteres',
    }),
})

type UserDataType = z.infer<typeof RegisterFormSchema>

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

  const userData = req.body.userdata

  try {
    RegisterFormSchema.parse(userData)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).send(error.formErrors)
    }
  }

  const parsedUserData = RegisterFormSchema.parse(userData)
  const { username, email, name, password } = parsedUserData

  const usernameAlreadyExists = await prisma.user.findFirst({
    where: {
      username,
    },
  })

  if (usernameAlreadyExists) {
    return res.status(409).json({ error: 'username already exists' })
  }

  const emailAlreadyExists = await prisma.user.findFirst({
    where: {
      email,
    },
  })

  if (emailAlreadyExists) {
    return res.status(409).json({ error: 'email already exists' })
  }

  await prisma.user
    .create({
      data: {
        email,
        name,
        username,
        password,
      },
    })
    .catch((error) => {
      return res.status(500).json(error)
    })

  return res.status(201).end()
}
