import { MagnifyingGlass } from 'phosphor-react'
import { NewTaskModal } from '../NewTaskModal'
import {
  HeaderContainer,
  TaskQueryInput,
  TaskQueryInputContainer,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <TaskQueryInputContainer>
        <TaskQueryInput placeholder="Search Here..." />
        <MagnifyingGlass style={{ opacity: '0.7' }} size={20} />
      </TaskQueryInputContainer>
      <NewTaskModal />
    </HeaderContainer>
  )
}
