import Tarefa from '../../components/Tarefa'
import { ContainerLista } from './styles'
import * as enums from '../../utils/enums/tarefa'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver aulas',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Estudar javaScript',
    descricao: 'Ver aulas',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Estudar HTML',
    descricao: 'Ver aulas',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Estudar Css',
    descricao: 'Ver aulas',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <ContainerLista>
    <p>2 tarefas marcadas como: &quot;categoria&lquo; e &quot;termo&lquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            prioridade={t.prioridade}
            status={t.status}
            titulo={t.titulo}
          />
        </li>
      ))}
    </ul>
  </ContainerLista>
)

export default ListaDeTarefas
