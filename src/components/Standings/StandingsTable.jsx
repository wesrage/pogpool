import PropTypes from 'prop-types'
import React from 'react'
import Column from '../../components/Column'
import Row from '../../components/Row'
import { Table, Header, Body, Row as TableRow, Cell } from './Table'
import style from '../../style/standings.scss'

const StandingsTable = ({ contestants }) => (
   <Row>
      <Column xs={12} md={6} mdOffset={3}>
         <Table style={{ marginBottom: '2em' }}>
            <Header>
               <TableRow>
                  <Cell>Name</Cell>
                  <Cell style={{ textAlign: 'right' }}>Points</Cell>
                  <Cell style={{ textAlign: 'right' }}>Active</Cell>
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
                     <Cell
                       style={{
                          textAlign: 'right',
                          width: '5em',
                       }}
                     >
                        {contestant.points}
                     </Cell>
                     <Cell
                       style={{
                          textAlign: 'right',
                          width: '5em',
                       }}
                     >
                        {
                           Object.keys(contestant.picks).filter(
                              groupName => !contestant.picks[groupName].out,
                           ).length
                        }
                     </Cell>
                  </a>
               ))}
            </Body>
         </Table>
      </Column>
   </Row>
)

StandingsTable.propTypes = {
   contestants: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default StandingsTable
