import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { team as teamPropType } from '../../common/propTypes';
import TeamTile from './TeamTile';

const Root = styled.div`
   align-items: center;
   justify-content: space-around;
   display: flex;
   width: 50%;
   margin: 0 auto;

   @media(max-width: 45em) {
      width: 75%;
   }

   @media(max-width: 30em) {
      width: 100%;
   }

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

export default class TeamGroup extends Component {
   static propTypes = {
      id: PropTypes.string.isRequired,
      selection: PropTypes.string,
      teams: PropTypes.arrayOf(PropTypes.shape(teamPropType)).isRequired,
      onSelect: PropTypes.func.isRequired,
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
            {this.props.teams.map(team => {
               const selected = team.id === this.props.selection;
               return (
                  <TeamTile
                    {...team}
                    key={team.id}
                    onSelect={this.props.onSelect}
                    selected={selected}
                    otherSelected={this.props.selection !== null && !selected}
                  />
               );
            })}
         </Root>
      );
   }
}
