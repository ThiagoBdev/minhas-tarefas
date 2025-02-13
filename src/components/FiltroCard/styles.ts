import styled from 'styled-components'
import { Props } from '.'

type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div.attrs<PropsSemLegendaEContador>(() => ({
  ativo: undefined
}))<PropsSemLegendaEContador>`
  padding: 8px;
  border: 1px solid ${({ ativo }) => (ativo ? '#1E90FF' : '#A1A1A1')};
  color: ${({ ativo }) => (ativo ? '#1E90FF' : '#5E5E5E')};
  background-color: ${({ ativo }) => (ativo ? '#FFF' : '#FCFCFC')};
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
