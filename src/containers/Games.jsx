import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import SpinnerContainer from '../components/SpinnerContainer';
import Game from '../components/Games/Game';
import { load as loadGames } from '../store/games';

const GamesRoot = styled.div`
   display: flex;
   justify-content: center;
`;

const GamesWrapper = styled.div`
   display: flex;
`;

@connect(
   state => ({
      games: state.games.games,
      loaded: state.games.loaded,
      loading: state.games.loading,
   }),
   { loadGames },
)
export default class Games extends Component {
   static propTypes = {
      games: PropTypes.arrayOf(PropTypes.shape()).isRequired,
      loaded: PropTypes.bool.isRequired,
      loading: PropTypes.bool.isRequired,
      loadGames: PropTypes.func.isRequired,
   };

   componentWillMount() {
      if (!this.props.loaded) {
         this.props.loadGames();
      }
   }

   render() {
      return (
         <GamesRoot>
            <SpinnerContainer loading={this.props.loading}>
               {() => (
                  <GamesWrapper>
                     {this.props.games.map(game => <Game key={game.id} {...game} />)}
                  </GamesWrapper>
               )}
            </SpinnerContainer>
         </GamesRoot>
      );
   }
}
