import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { ContainerLista } from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefass = () => {
    return itens.filter(
      (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <ContainerLista>
      <p>
        2 tarefas marcadas como: &quot;categoria&lquo; e &quot;{termo}&lquo;
      </p>
      <ul>
        {filtraTarefass().map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
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
