import {
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
  const { register, handleSubmit } = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterFormSchema),
  })
  function handleClickOnButtonSubmit() {
    openLoginForm()
  }

  function handleRegisterForm(userdata: RegisterFormType) {
    api.post('/users/create-user', { userdata })
  }

  return (
    <FormContainer
      css={{ animation: `${FadeInLeft} 1000ms cubic-bezier(0.16, 1, 0.3, 1)` }}
    >
      <strong>Cadastro</strong>
      <form onSubmit={handleSubmit(handleRegisterForm)}>
        <FormInputContainer>
          <label>Nome completo</label>
          <input {...register('name')} type="text" />
        </FormInputContainer>

        <FormInputContainer>
          <label>Username</label>
          <input {...register('username')} type="text" />
        </FormInputContainer>

        <FormInputContainer>
          <label>Email</label>
          <input {...register('email')} type="email" />
        </FormInputContainer>

        <FormInputContainer>
          <label>Senha</label>
          <input {...register('password')} type="password" />
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
  )
}
