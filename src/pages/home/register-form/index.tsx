import {
  FormContainer,
  FormInputContainer,
} from '@/components/entry-form/styles'
import { CaretCircleLeft } from 'phosphor-react'
import {
  ButtonGrid,
  FadeInLeft,
  LoginFormRedirectButton,
  RegisterSubmitButton,
} from './styles'

interface RegisterFormProps {
  openLoginForm: () => void
}

export function RegisterForm({ openLoginForm }: RegisterFormProps) {
  function handleClickOnButtonSubmit() {
    openLoginForm()
  }

  return (
    <FormContainer
      css={{ animation: `${FadeInLeft} 1000ms cubic-bezier(0.16, 1, 0.3, 1)` }}
    >
      <strong>Cadastro</strong>
      <form action="">
        <FormInputContainer>
          <label>Nome completo</label>
          <input type="text" />
        </FormInputContainer>

        <FormInputContainer>
          <label>Username</label>
          <input type="text" />
        </FormInputContainer>

        <FormInputContainer>
          <label>Email</label>
          <input type="email" />
        </FormInputContainer>

        <FormInputContainer>
          <label>Senha</label>
          <input type="password" />
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
