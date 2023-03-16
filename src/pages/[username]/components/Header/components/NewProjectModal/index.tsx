import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import {
  CloseButton,
  InputContainer,
  ModalCard,
  ModalCardTitle,
  ModalOverlay,
  SubmitButton,
} from '../../../NewItemModal/styles'
import { NewProjectTriggerButton } from './styles'

export function NewProjectModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <NewProjectTriggerButton>Criar novo projeto</NewProjectTriggerButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <ModalOverlay />
        <ModalCard>
          <ModalCardTitle>Criar um projeto</ModalCardTitle>
          <CloseButton>
            <X />
          </CloseButton>
          <form>
            <InputContainer>
              <label>Título</label>
              <input type={'text'} placeholder="Site da empresa" />
            </InputContainer>
            <SubmitButton>Criar</SubmitButton>
          </form>
        </ModalCard>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
