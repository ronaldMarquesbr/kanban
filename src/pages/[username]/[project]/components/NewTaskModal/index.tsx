import * as Dialog from '@radix-ui/react-dialog'
import {
  ModalCard,
  ModalCardTitle,
  ModalOverlay,
  NewTaskButton,
} from './styles'

export function NewTaskModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <NewTaskButton>Nova tarefa</NewTaskButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <ModalOverlay />

        <ModalCard>
          <ModalCardTitle>Adicionar nova tarefa</ModalCardTitle>
        </ModalCard>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
