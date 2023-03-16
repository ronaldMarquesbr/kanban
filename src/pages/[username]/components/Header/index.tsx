import { NewProjectModal } from './components/NewProjectModal'
import { Greetings, HeaderContainer } from './styles'

interface HeaderProps {
  profileName: string
}

export function Header({ profileName }: HeaderProps) {
  return (
    <HeaderContainer>
      <Greetings>Olá, {profileName}</Greetings>
      <NewProjectModal />
    </HeaderContainer>
  )
}
