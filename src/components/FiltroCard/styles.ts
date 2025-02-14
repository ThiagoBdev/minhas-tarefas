import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Card = styled.div.attrs<Props>(() => ({}))<Props>`
  padding: 8px;
  border: 1px solid ${({ ativo }) => (ativo ? '#1E90FF' : '#A1A1A1')};
  color: ${({ ativo }) => (ativo ? '#1E90FF' : '#5E5E5E')};
  background-color: ${({ ativo }) => (ativo ? '#FFF' : '#FCFCFC')};
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
