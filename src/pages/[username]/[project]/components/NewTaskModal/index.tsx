import * as Dialog from '@radix-ui/react-dialog'
import { Plus, X } from 'phosphor-react'
import React, { FocusEvent, MouseEvent, useEffect, useState } from 'react'
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

  function increaseSubtasks(event: MouseEvent<HTMLButtonElement>) {
    const newSubtask = { id: Math.random(), description: '' }
    setSubtasks((oldSubtasks) => [...oldSubtasks, newSubtask])
  }

  function HandleUpdateSubtask(e: FocusEvent<HTMLInputElement>) {
    const subtaskField = e.target

    if (subtaskField.dataset.id === undefined) {
      return
    }
    const subtaskId = parseFloat(subtaskField.dataset.id)
    const subtaskUpdatedDescription = subtaskField.value

    const updatedSubtasks = subtasks.filter(
      (subtask) => subtask.id !== subtaskId,
    )

    setSubtasks([
      ...updatedSubtasks,
      { id: subtaskId, description: subtaskUpdatedDescription },
    ])
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
                  type={'text'}
                  data-id={subtask.id}
                  onBlur={HandleUpdateSubtask}
                  defaultValue={subtask?.description}
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
