import styled from 'styled-components'

export const Cell = styled.td`
  border-left: ${props => (props.borderLeft ? '1px solid #ccc' : 'none')};
  border-right: ${props => (props.borderRight ? '1px solid #ccc' : 'none')};
  padding: 0.5em 1em;
`

export const Table = styled.table`
  width: 100%;
`

export const Header = styled.thead`
  background-color: #333;
  color: #eee;
  font-weight: bold;
`

export const Row = styled.tr`
  border-bottom: 1px solid #ccc;
`

export const Body = styled.tbody``
