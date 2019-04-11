import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Column from '../../components/Column'
import Row from '../../components/Row'
import { Table, Header, Body, Row as TableRow, Cell } from './Table'
import style from '../../style/standings.scss'

const NumberCell = styled(Cell)`
  text-align: right;
  width: 3em;
`

const CenteredCell = styled(Cell)`
  text-align: center;
`

const StyledTable = styled(Table)`
  font-size: 0.8em;
  margin-bottom: 2em;
  width: 50%;

  @media (max-width: 64em) {
   width: 75%;
  }

  @media (max-width: 45em) {
    font-size: 0.7em;
    width: 100%;
  }
`

const GutterlessRow = styled(Row)`
  margin: 0;

  > div {
    padding-left: 0;
    padding-right: 0;
  }
`

const TableBodyRow = styled.a`
  ${props => props.special && `background-color: ${props.theme.main};`}
  ${props => props.special && `color: #eee !important;`}
`

const StandingsTable = ({ contestants }) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <StyledTable>
      <Header>
        <TableRow>
          <Cell colSpan={3} />
          <CenteredCell borderLeft colSpan={2}>
            East
          </CenteredCell>
          <CenteredCell borderLeft colSpan={2}>
            West
          </CenteredCell>
        </TableRow>
        <TableRow>
          <Cell>Name</Cell>
          <NumberCell>Points</NumberCell>
          <NumberCell>Active</NumberCell>
          <NumberCell borderLeft>A</NumberCell>
          <NumberCell>M</NumberCell>
          <NumberCell borderLeft>C</NumberCell>
          <NumberCell>P</NumberCell>
        </TableRow>
      </Header>
      <Body>
        {contestants.map(contestant =>
          contestant.picks ? (
            <ContestantRow
              key={`${contestant.firstName} ${contestant.lastName}`}
              contestant={contestant}
            />
          ) : (
            <NoLinkRow
              key={`${contestant.firstName} ${contestant.lastName}`}
              contestant={contestant}
            />
          ),
        )}
      </Body>
    </StyledTable>
  </div>
)

const NoLinkRow = ({ contestant }) => (
  <TableBodyRow className={style.standingsRow} special={contestant.special}>
    <Cell>
      {contestant.firstName} {contestant.lastName}
    </Cell>
    <NumberCell>{Math.floor(contestant.points)}</NumberCell>
    <NumberCell />
    <NumberCell />
    <NumberCell />
    <NumberCell />
    <NumberCell />
  </TableBodyRow>
)

const ContestantRow = ({ contestant }) => (
  <TableBodyRow
    href={`#${contestant.firstName}${contestant.lastName}`}
    className={style.standingsRow}
    special={contestant.special}
  >
    <Cell>
      {contestant.firstName} {contestant.lastName}
    </Cell>
    <NumberCell>{Math.floor(contestant.points)}</NumberCell>
    <NumberCell>
      {
        Object.keys(contestant.picks).filter(
          groupName => !contestant.picks[groupName].out,
        ).length
      }
    </NumberCell>
    <NumberCell borderLeft>{contestant.breakdown.A || 0}</NumberCell>
    <NumberCell>{contestant.breakdown.M || 0}</NumberCell>
    <NumberCell borderLeft>{contestant.breakdown.C || 0}</NumberCell>
    <NumberCell>{contestant.breakdown.P || 0}</NumberCell>
  </TableBodyRow>
)

StandingsTable.propTypes = {
  contestants: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default StandingsTable
