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
          <Cell>Name</Cell>
          <NumberCell>Points</NumberCell>
          <NumberCell>Active</NumberCell>
          <NumberCell borderLeft>Central</NumberCell>
          <NumberCell borderLeft>East</NumberCell>
          <NumberCell borderLeft>North</NumberCell>
          <NumberCell borderLeft>West</NumberCell>
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
    <NumberCell borderLeft>{contestant.breakdown.C || 0}</NumberCell>
    <NumberCell borderLeft>{contestant.breakdown.E || 0}</NumberCell>
    <NumberCell borderLeft>{contestant.breakdown.N || 0}</NumberCell>
    <NumberCell borderLeft>{contestant.breakdown.W || 0}</NumberCell>
  </TableBodyRow>
)

StandingsTable.propTypes = {
  contestants: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default StandingsTable
