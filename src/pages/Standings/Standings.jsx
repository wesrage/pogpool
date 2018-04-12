import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import _ from 'lodash'
import axios from '../../util/axios'
import Container from '../../components/Container'
import SpinnerContainer from '../../components/SpinnerContainer'
import StandingsTable from './StandingsTable'
import ContestantList from './ContestantList'
import TeamPieList from './TeamPieList'

export default class Standings extends React.Component {
   state = {
      contestants: [],
      maxPoints: 0,
      loadingStandings: true,
   }

   componentWillMount() {
      this.loadStandings()
   }

   loadStandings = () => {
      return axios.get('/standings')
         .then(response => {
            this.setState({
               contestants: response.data,
               loadingStandings: false,
            })
         })
   }

   render() {
      const contestants = [...this.state.contestants].sort((a, b) => b.points - a.points)
      return (
         <div>
            <Helmet title="PuckOverGlass 2018" />
            <Container>
               <SpinnerContainer loading={this.state.loadingStandings}>
                  {() => (
                     <div>
                        <StandingsTable contestants={contestants} />
                        <TeamPieList
                          contestants={contestants}
                          maxPoints={this.state.maxPoints}
                          loading={this.state.loadingTeams || this.state.loadingStandings}
                        />
                        <ContestantList
                          contestants={contestants}
                          maxPoints={this.state.maxPoints}
                        />
                     </div>
                  )}
               </SpinnerContainer>
            </Container>
         </div>
      )
   }
}

const calculateMaxPoints = contestants =>
   _(contestants).map(({ picks }) => _.map(picks, 'points')).flatten().max() || 0