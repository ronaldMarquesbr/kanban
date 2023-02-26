import { MagnifyingGlass } from 'phosphor-react'
import {
  HeaderContainer,
  NewTaskButton,
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
      <NewTaskButton>Nova tarefa</NewTaskButton>
    </HeaderContainer>
  )
}
