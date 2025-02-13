import Tarefa from '../../components/Tarefa'
import { ContainerLista } from './styles'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver aulas',
    prioridade: 'Importante',
    status: 'pendente'
  },
  {
    titulo: 'Estudar javaScript',
    descricao: 'Ver aulas',
    prioridade: 'Importante',
    status: 'pendente'
  },
  {
    titulo: 'Estudar HTML',
    descricao: 'Ver aulas',
    prioridade: 'Importante',
    status: 'concluido'
  },
  {
    titulo: 'Estudar Css',
    descricao: 'Ver aulas',
    prioridade: 'Importante',
    status: 'concluido'
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
