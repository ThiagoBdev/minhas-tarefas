import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { ContainerLista } from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
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
}

export default ListaDeTarefas
