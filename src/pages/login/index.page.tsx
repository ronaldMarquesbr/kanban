import {
  FormSection,
  Hero,
  PageGrid,
  LoginButton,
  GoogleButton,
} from './styles'
import HeroImage from '@/assets/hero-image.jpg'
import Image from 'next/image'
import {
  FormContainer,
  FormInputContainer,
  SeparatorLine,
} from '@/components/form/styles'
import { GoogleLogo } from 'phosphor-react'

export default function LoginPage() {
  return (
    <PageGrid>
      <Hero>
        <h1>
          Gerencie melhor seus projetos com o KanTask e aumente sua
          produtividade!
        </h1>
        <Image quality={100} src={HeroImage} width={800} height={800} alt="" />
      </Hero>
      <FormSection>
        <FormContainer>
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

            <LoginButton>Entrar</LoginButton>
          </form>
          <SeparatorLine>
            <span>Ou</span>
          </SeparatorLine>

          <GoogleButton>
            <GoogleLogo size={28} />
            Entrar com Google
          </GoogleButton>
        </FormContainer>
      </FormSection>
    </PageGrid>
  )
}
