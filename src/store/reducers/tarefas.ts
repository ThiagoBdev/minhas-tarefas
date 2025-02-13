import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/tarefa'

const tarefasSlices = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar Javascript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Estudar imediatamente para concurso',
      1
    ),
    new Tarefa(
      'Lavar a Louça',
      enums.Prioridade.NORMAL,
      enums.Status.CONCLUIDA,
      '',
      2
    ),
    new Tarefa(
      'Estudar TypeScript',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'estudar para prova',
      3
    ),
    new Tarefa(
      'Academia',
      enums.Prioridade.NORMAL,
      enums.Status.PENDENTE,
      'treinar costa',
      4
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlices.actions

export default tarefasSlices.reducer
