import { Header } from './components/Header'
import { TasksCard, Container, ProjectTitle, CardsGrid } from './styles'

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <ProjectTitle>Mobile App</ProjectTitle>

        <CardsGrid>
          <TasksCard category={'to-do'}>
            <header>
              <span>&#x2022;</span>To do
            </header>
          </TasksCard>
          <TasksCard category={'on-progress'}>
            <header>
              <span>&#x2022;</span>On Progress
            </header>
          </TasksCard>
          <TasksCard category={'done'}>
            <header>
              <span>&#x2022;</span>Done
            </header>
          </TasksCard>
        </CardsGrid>
      </Container>
    </>
  )
}
