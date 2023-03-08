import { FormSection, Hero, PageGrid } from './styles'
import HeroImage from '@/assets/hero-image.jpg'
import Image from 'next/image'
import { LoginForm } from './login-form'
import { RegisterForm } from './register-form'
// import { withIronSessionSsr } from 'iron-session/next'
import { useState } from 'react'
// import { sessionOptions } from '@/lib/session'
// import { prisma } from '@/lib/primas-client'

export default function Home() {
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

// export const getServerSideProps = withIronSessionSsr(
//   async function getServerSideProps({ req }) {
//     const userSession = req.session.user
//     const userId = userSession?.id

//     if (userSession) {
//       const user = await prisma.user.findUnique({
//         where: {
//           id: userId,
//         },
//       })
//       const username = user?.username

//       window.location.href = `/${username}`
//     }

//     return {
//       props: {
//         user: { id: userId },
//       },
//     }
//   },
//   sessionOptions,
// )
