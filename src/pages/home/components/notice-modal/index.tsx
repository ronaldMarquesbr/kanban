import * as Dialog from '@radix-ui/react-dialog'
import { ModalCard, ModalOverlay } from './styles'

interface NoticeModalProps {
  isOpenModal: boolean
}

export function NoticeModal({ isOpenModal }: NoticeModalProps) {
  return (
    <Dialog.Root open={isOpenModal}>
      <Dialog.Trigger></Dialog.Trigger>
      <Dialog.Portal>
        <ModalOverlay />
        <ModalCard>
          <strong>Usuário cadastrado com sucesso!</strong>
          <span>
            Você será redirecionado para a página de login em alguns segundos.
          </span>
        </ModalCard>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
