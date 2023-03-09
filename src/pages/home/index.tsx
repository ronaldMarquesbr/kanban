import { FormSection, Hero, PageGrid } from './styles'
import HeroImage from '@/assets/hero-image.jpg'
import Image from 'next/image'
import { LoginForm } from './login-form'
import { RegisterForm } from './register-form'
import { useState } from 'react'

export function Home() {
  const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false)

  function openLoginForm() {
    setIsRegisterFormOpen(false)
  }

  function openRegisterForm() {
    setIsRegisterFormOpen(true)
  }

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
        {isRegisterFormOpen ? (
          <RegisterForm openLoginForm={openLoginForm} />
        ) : (
          <LoginForm openRegisterForm={openRegisterForm} />
        )}
      </FormSection>
    </PageGrid>
  )
}
