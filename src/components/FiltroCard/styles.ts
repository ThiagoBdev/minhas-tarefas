import styled from 'styled-components'
import { Props } from '.'

type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsSemLegendaEContador>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1E90FF' : '#A1A1A1')};
  color: ${(props) => (props.ativo ? '#1e90FF' : '#5e5e5e')};
  background-color: ${(props) => (props.ativo ? '#FFF' : '#fcfcfc')};
  border-radius: 8px;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
