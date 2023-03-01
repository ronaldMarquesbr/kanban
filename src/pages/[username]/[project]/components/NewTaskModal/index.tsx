import * as Dialog from '@radix-ui/react-dialog'
import { Plus, X } from 'phosphor-react'
import { FocusEvent, useEffect, useState } from 'react'
import {
  DeleteSubTaskButton,
  InputContainer,
  ModalCard,
  ModalCardTitle,
  ModalOverlay,
  NewTaskButton,
  SubTaskContainer,
  TextBoxContainer,
} from './styles'

interface SubtaskType {
  id: number
  description: string
}

export function NewTaskModal() {
  const [subtasks, setSubtasks] = useState<SubtaskType[]>([
    { id: Math.random(), description: '' },
  ])

  function increaseSubtasks() {
    const newSubtask = { id: Math.random(), description: '' }
    setSubtasks((oldSubtasks) => [...oldSubtasks, newSubtask])
  }

  function HandleUpdateSubtask(e: FocusEvent<HTMLInputElement>) {
    const subtaskUpdatedDescription = e.target.value
    console.log(subtaskUpdatedDescription)
  }

  useEffect(() => {
    console.log(subtasks)
  }, [subtasks])

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <NewTaskButton>Nova tarefa</NewTaskButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <ModalOverlay />

        <ModalCard>
          <ModalCardTitle>Adicionar nova tarefa</ModalCardTitle>
          <InputContainer>
            <label>Título</label>
            <input type={'text'} placeholder="Construir o site do projeto" />
          </InputContainer>

          <TextBoxContainer>
            <label>Descrição</label>
            <textarea
              placeholder="Aplicação web que forneçerá todas as informações para os cliente sobre o que está sendo feito
            "
            />
          </TextBoxContainer>

          <SubTaskContainer label-outline>
            <label>Subtarefas</label>

            {subtasks.map((subtask) => (
              <div key={subtask.id}>
                <input
                  data-subtask-id={subtask.id}
                  type={'text'}
                  onBlur={HandleUpdateSubtask}
                  value={subtask?.description}
                />
                <DeleteSubTaskButton>
                  <X size={24} />
                </DeleteSubTaskButton>
              </div>
            ))}

            <button onClick={increaseSubtasks}>
              <Plus size={20} /> Adicionar mais uma subtarefa
            </button>
          </SubTaskContainer>
        </ModalCard>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
