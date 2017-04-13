import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import _ from 'lodash';
import { connect } from 'react-redux';
import Container from '../components/Container';
import SpinnerContainer from '../components/SpinnerContainer';
import StandingsTable from '../components/Standings/StandingsTable';
import ContestantList from '../components/Standings/ContestantList';
import TeamPieList from '../components/Standings/TeamPieList';
import { loadStandings, loadTeams } from '../store/standings';

@connect(
   state => ({
      contestants: state.standings.contestants,
      loadingStandings: state.standings.loadingStandings,
      loadingTeams: state.standings.loadingTeams,
      loadingStandingsError: state.standings.loadingStandingsError,
      loadingTeamsError: state.standings.loadingTeamsError,
      maxPoints: calculateMaxPoints(state.standings.contestants),
      teamInfo: state.standings.teams,
   }),
   { loadStandings, loadTeams },
)
export default class Standings extends Component {
   static propTypes = {
      contestants: PropTypes.arrayOf(PropTypes.shape()),
      loadingStandings: PropTypes.bool.isRequired,
      loadingTeams: PropTypes.bool.isRequired,
      loadingStandingsError: PropTypes.string,
      loadingTeamsError: PropTypes.string,
      maxPoints: PropTypes.number.isRequired,
      loadStandings: PropTypes.func.isRequired,
      loadTeams: PropTypes.func.isRequired,
      teamInfo: PropTypes.objectOf(
         PropTypes.shape({
            conference: PropTypes.string.isRequired,
            division: PropTypes.string.isRequired,
            seed: PropTypes.number.isRequired,
            place: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
         }),
      ),
   };

   componentWillMount() {
      this.props.loadStandings();
      this.props.loadTeams();
   }

   render() {
      const contestants = [...this.props.contestants].sort((a, b) => b.points - a.points);
      return (
         <div>
            <Helmet title="PuckOverGlass 2017" />
            <Container>
               <SpinnerContainer loading={this.props.loadingStandings}>
                  {() => (
                     <div>
                        <StandingsTable contestants={contestants} />
                        <TeamPieList
                          contestants={contestants}
                          maxPoints={this.props.maxPoints}
                          teamInfo={this.props.teamInfo}
                        />
                        <ContestantList
                          contestants={contestants}
                          maxPoints={this.props.maxPoints}
                        />
                     </div>
                  )}
               </SpinnerContainer>
            </Container>
         </div>
      );
   }
}

const calculateMaxPoints = contestants =>
   _(contestants).map(({ picks }) => _.map(picks, 'points')).flatten().max() || 0;
