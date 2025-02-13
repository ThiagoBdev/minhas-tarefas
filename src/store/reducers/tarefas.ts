import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/tarefa'

type TarefaState = {
  itens: Tarefa[]
}

const initialState: TarefaState = {
  itens: [
    {
      id: 1,
      descricao: 'estudar Javascript',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'Estudar javascript'
    },
    {
      id: 2,
      descricao: 'estudar Typescript',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar javascript'
    },
    {
      id: 3,
      descricao: 'estudar HTML',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDA,
      titulo: 'Estudar javascript'
    }
  ]
}

const tarefasSlices = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...(state.itens = state.itens.filter(
          (tarefa) => tarefa.id !== action.payload
        ))
      ]
    }
  }
})

export const { remover } = tarefasSlices.actions

export default tarefasSlices.reducer
