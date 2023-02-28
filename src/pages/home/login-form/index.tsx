import {
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

interface LoginFormProps {
  openRegisterForm: () => void
}

export function LoginForm({ openRegisterForm }: LoginFormProps) {
  function handleClickOnRegisterButton() {
    openRegisterForm()
  }
  return (
    <FormContainer
      css={{ animation: `${FadeInRight} 1000ms cubic-bezier(0.16, 1, 0.3, 1)` }}
    >
      <strong>Login</strong>
      <form action="">
        <FormInputContainer>
          <label>Username</label>
          <input type={'text'} placeholder="jonhdoe" />
        </FormInputContainer>

        <FormInputContainer>
          <label>Senha</label>
          <input
            type={'password'}
            placeholder="&#x2022; &#x2022; &#x2022; &#x2022; &#x2022; &#x2022;"
          />
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
