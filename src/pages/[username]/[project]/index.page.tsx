import { Header } from './components/Header'
import { ProgressBar } from './components/ProgressBar'
import { TaskMenu } from './components/TaskMenu'
import {
  TasksCard,
  Container,
  ProjectTitle,
  CardsGrid,
  TaskCard,
  PriorityLabel,
} from './styles'

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <ProjectTitle>Mobile App</ProjectTitle>

        <CardsGrid>
          <TasksCard category={'to-do'}>
            <header>
              <span>&#x2022;</span>Fazer
            </header>

            <TaskCard>
              <header>
                <div>
                  <PriorityLabel priority={'low'}>Baixa</PriorityLabel>
                  <TaskMenu />
                </div>
                <strong>Brainstorming</strong>
              </header>
              <p>
                Brainstorming brings team members diverse experience into play.
              </p>
            </TaskCard>

            <TaskCard>
              <header>
                <div>
                  <PriorityLabel priority={'low'}>Baixa</PriorityLabel>
                  <TaskMenu />
                </div>
                <strong>Página Home</strong>
              </header>
              <p>Realizar a construção da página Home</p>
            </TaskCard>
          </TasksCard>
          <TasksCard category={'on-progress'}>
            <header>
              <span>&#x2022;</span>Em progresso
            </header>

            <TaskCard>
              <header>
                <div>
                  <PriorityLabel priority={'high'}>Alta</PriorityLabel>
                  <TaskMenu />
                </div>
                <strong>Backend</strong>
              </header>
              <p>Construir a API do aplicativo mobile.</p>
              <footer>
                <ProgressBar currentProgress={20} fullProgress={100} />
              </footer>
            </TaskCard>
          </TasksCard>
          <TasksCard category={'done'}>
            <header>
              <span>&#x2022;</span>Feitos
            </header>
            <TaskCard>
              <header>
                <div>
                  <PriorityLabel priority={'high'}>Alta</PriorityLabel>
                  <TaskMenu />
                </div>
                <strong>Projeto de Design</strong>
              </header>
              <p>Design para estilizar o aplicativo.</p>
            </TaskCard>
          </TasksCard>
        </CardsGrid>
      </Container>
    </>
  )
}
