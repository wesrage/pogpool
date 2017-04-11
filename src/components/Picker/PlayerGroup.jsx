import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { player as playerPropType } from '../../common/propTypes';
import PlayerTile from './PlayerTile';

const Root = styled.div`
   justify-content: space-around;
   display: flex;
   width: 100%;
   max-width: 64em;
   margin: 0 auto;

   &:not(:last-child) {
      padding-bottom: 2em;

      @media(max-width: 45em) {
          padding-bottom: 1em;
      }
   }
`;

const GroupId = styled.div`
   color: #aaa;
   width: 2em;
   font-size: 2em;
   font-weight: bold;
   text-align: center;
   text-transform: uppercase;

   @media(max-width: 64em) {
      font-size: 1.5em;
      width: 1.5em;
   }

   @media(max-width: 45em) {
      font-size: 1em;
      width: 1em;
   }

   @media(max-width: 30em) {
      font-size: 0.75em;
      width: 1em;
      margin-left: -0.5em;
   }
`;

export default class PlayerGroup extends Component {
   static propTypes = {
      id: PropTypes.string.isRequired,
      selection: PropTypes.number,
      players: PropTypes.arrayOf(PropTypes.shape(playerPropType)).isRequired,
      onSelect: PropTypes.func.isRequired,
      photosVisible: PropTypes.bool,
   };

   static defaultProps = {
      selection: null,
   };

   shouldComponentUpdate(nextProps) {
      return nextProps.selection !== this.props.selection;
   }

   render() {
      return (
         <Root>
            {/* <GroupId>{this.props.id}</GroupId> */}
            {this.props.players.map(player => {
               const selected = player.id === this.props.selection;
               return (
                  <PlayerTile
                    {...player}
                    key={player.id}
                    onSelect={this.props.onSelect}
                    selected={selected}
                    otherSelected={this.props.selection !== null && !selected}
                    showPhoto={this.props.photosVisible}
                  />
               );
            })}
         </Root>
      );
   }
}
