import PropTypes from 'prop-types'
import React from 'react';
import styled from 'styled-components'
import Column from '../../components/Column';
import Row from '../../components/Row';
import { Table, Header, Body, Row as TableRow, Cell } from './Table';
import style from '../../style/standings.scss';

const NumberCell = styled(Cell)`
   text-align: right;
   width: 3em;
`

const CenteredCell = styled(Cell)`
   text-align: center;
`

const StandingsTable = ({ contestants }) => (
   <Row>
      <Column xs={12} md={6} mdOffset={3}>
         <Table style={{ marginBottom: '2em' }}>
            <Header>
               <TableRow>
                  <Cell colSpan={3}></Cell>
                  <CenteredCell borderLeft colSpan={2}>East</CenteredCell>
                  <CenteredCell borderLeft colSpan={2}>West</CenteredCell>
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
               {contestants.map(contestant => (
                  <a
                    key={`${contestant.firstName} ${contestant.lastName}`}
                    href={`#${contestant.firstName}${contestant.lastName}`}
                    className={style.standingsRow}
                  >
                     <Cell>{contestant.firstName} {contestant.lastName}</Cell>
                     <NumberCell>{contestant.points}</NumberCell>
                     <NumberCell>
                        {Object.keys(contestant.picks)
                           .filter(groupName => !contestant.picks[groupName].out).length}
                     </NumberCell>
                     <NumberCell borderLeft>{contestant.breakdown.A}</NumberCell>
                     <NumberCell>{contestant.breakdown.M}</NumberCell>
                     <NumberCell borderLeft>{contestant.breakdown.C}</NumberCell>
                     <NumberCell>{contestant.breakdown.P}</NumberCell>
                  </a>
               ))}
            </Body>
         </Table>
      </Column>
   </Row>
);

StandingsTable.propTypes = {
   contestants: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StandingsTable;
