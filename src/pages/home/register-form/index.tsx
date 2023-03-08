import {
  ErrorIndicator,
  FormContainer,
  FormInputContainer,
} from '@/components/entry-form/styles'
import { CaretCircleLeft } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  ButtonGrid,
  FadeInLeft,
  LoginFormRedirectButton,
  RegisterSubmitButton,
} from './styles'
import { api } from '@/lib/axios'
import { AxiosError } from 'axios'
import { useState } from 'react'
import { NoticeModal } from '../components/notice-modal'

interface BadRequestResponseData {
  error: 'email already exists' | 'username already exists'
}

interface ExistingErrorsType {
  email: boolean
  username: boolean
}

interface RegisterFormProps {
  openLoginForm: () => void
}

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

type RegisterFormType = z.infer<typeof RegisterFormSchema>

export function RegisterForm({ openLoginForm }: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterFormSchema),
  })

  const [existingErrors, setExistingErrors] = useState<ExistingErrorsType>({
    email: false,
    username: false,
  })

  const [openNoticeModal, setOpenNoticeModal] = useState(false)

  function handleClickOnButtonSubmit() {
    openLoginForm()
  }

  async function handleRegisterFormSubmit(userdata: RegisterFormType) {
    try {
      await api.post('/users/create-user', { userdata }).then(() => {
        setOpenNoticeModal(true)
        setTimeout(() => {
          setOpenNoticeModal(false)
          openLoginForm()
        }, 3000)
      })
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 409) {
          const typedError = error as AxiosError<BadRequestResponseData>
          const errorDescription = typedError?.response?.data.error

          if (errorDescription === 'email already exists') {
            setExistingErrors((oldAlreadyExistsErrors) => {
              return { ...oldAlreadyExistsErrors, email: true }
            })
          } else if (errorDescription === 'username already exists') {
            setExistingErrors((oldAlreadyExistsErrors) => {
              return { email: false, username: true }
            })
          }
        }
      }
    }
  }

  return (
    <>
      <FormContainer
        css={{
          animation: `${FadeInLeft} 1000ms cubic-bezier(0.16, 1, 0.3, 1)`,
        }}
      >
        <strong>Cadastro</strong>
        <form onSubmit={handleSubmit(handleRegisterFormSubmit)}>
          <FormInputContainer>
            <label>Nome completo</label>
            <input {...register('name')} type="text" />
            <ErrorIndicator>
              {errors.name ? errors.name.message : ''}
            </ErrorIndicator>
          </FormInputContainer>

          <FormInputContainer>
            <label>Username</label>
            <input {...register('username')} type="text" />
            <ErrorIndicator>
              {errors.username ? errors.username.message : ''}
              {existingErrors.username && !errors.username
                ? 'Esse username já está sendo usado'
                : ' '}
            </ErrorIndicator>
          </FormInputContainer>

          <FormInputContainer>
            <label>Email</label>
            <input {...register('email')} type="email" />
            <ErrorIndicator>
              {errors.email ? errors.email.message : ''}
              {existingErrors.email && !errors.email
                ? 'Esse email já está sendo usado'
                : ''}
            </ErrorIndicator>
          </FormInputContainer>

          <FormInputContainer>
            <label>Senha</label>
            <input {...register('password')} type="password" />
            <ErrorIndicator>
              {errors.password ? errors.password.message : ''}
            </ErrorIndicator>
          </FormInputContainer>

          <ButtonGrid>
            <RegisterSubmitButton type="submit">
              Cadastrar-se
            </RegisterSubmitButton>
            <LoginFormRedirectButton onClick={handleClickOnButtonSubmit}>
              <CaretCircleLeft size={21} />
              Voltar para o login
            </LoginFormRedirectButton>
          </ButtonGrid>
        </form>
      </FormContainer>
      <NoticeModal isOpenModal={openNoticeModal} />
    </>
  )
}
