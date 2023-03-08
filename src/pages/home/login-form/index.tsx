import {
  ErrorIndicator,
  FormContainer,
  FormInputContainer,
  SeparatorLine,
} from '@/components/entry-form/styles'

import { Envelope, GoogleLogo } from 'phosphor-react'

import {
  FadeInRight,
  GoogleButton,
  GridButtons,
  LoginButton,
  RegisterButton,
} from './styles'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface LoginFormProps {
  openRegisterForm: () => void
}

interface ResponseErrorsType {
  username: boolean
  password: boolean
}

const LoginFormSchema = z.object({
  username: z.string().min(1, { message: 'Digite seu username' }),
  password: z.string().min(1, { message: 'Digite sua senha' }),
})

type LoginFormType = z.infer<typeof LoginFormSchema>

export function LoginForm({ openRegisterForm }: LoginFormProps) {
  const { register, handleSubmit } = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
  })

  const [responseErrors, setResponseErrors] = useState<ResponseErrorsType>({
    username: false,
    password: false,
  })

  const router = useRouter()

  function handleClickOnRegisterButton() {
    openRegisterForm()
  }

  async function handleLogin(loginData: LoginFormType) {
    await api
      .post('/users/login', { loginData })
      .then(() => {
        router.push(`/${loginData.username}`)
      })
      .catch((res) => {
        const responseStatus = res.response.status
        if (responseStatus === 404) {
          setResponseErrors({ password: false, username: true })
        } else if (responseStatus === 401) {
          setResponseErrors({ password: true, username: false })
        }
      })
  }

  return (
    <FormContainer
      css={{ animation: `${FadeInRight} 1000ms cubic-bezier(0.16, 1, 0.3, 1)` }}
    >
      <strong>Login</strong>
      <form onSubmit={handleSubmit(handleLogin)}>
        <FormInputContainer>
          <label>Username</label>
          <input
            type={'text'}
            {...register('username')}
            placeholder="jonhdoe"
          />
          <ErrorIndicator>
            {responseErrors.username
              ? 'O username fornecido não está conectado a uma conta'
              : ''}
          </ErrorIndicator>
        </FormInputContainer>

        <FormInputContainer>
          <label>Senha</label>
          <input
            type={'password'}
            {...register('password')}
            placeholder="&#x2022; &#x2022; &#x2022; &#x2022; &#x2022; &#x2022;"
          />
          <ErrorIndicator>
            {responseErrors.password ? 'Senha incorreta' : ''}
          </ErrorIndicator>
        </FormInputContainer>

        <LoginButton type="submit">Entrar</LoginButton>
      </form>
      <SeparatorLine>
        <span>Ou</span>
      </SeparatorLine>

      <GridButtons>
        <GoogleButton>
          <GoogleLogo size={28} />
          Entrar com Google
        </GoogleButton>

        <RegisterButton onClick={handleClickOnRegisterButton}>
          <Envelope size={28} />
          Cadastrar-se com email
        </RegisterButton>
      </GridButtons>
    </FormContainer>
  )
}
