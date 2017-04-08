import React, { Component } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import PlayerGroup from '../components/Picker/PlayerGroup';
import TeamGroup from '../components/Picker/TeamGroup';
import CupGroup from '../components/Picker/CupGroup';
import { H1, Annotation } from '../components/styled';
import groups from '../groups';

const PickerRoot = styled.div``;

export default class Picker extends Component {
   state = {
      picks: {},
   };

   handleSelect = groupId =>
      playerId => {
         this.setState(state => ({
            picks: {
               ...state.picks,
               [groupId]: state.picks[groupId] !== playerId ? playerId : null,
            },
         }));
      };

   renderPlayerGroup = ({ id, players }) => (
      <PlayerGroup
        key={id}
        id={id}
        players={players}
        onSelect={this.handleSelect(id)}
        selection={this.state.picks[id]}
      />
   );

   renderTeamGroup = ({ id, teams }) => (
      <TeamGroup
        key={id}
        id={id}
        teams={teams}
        onSelect={this.handleSelect(id)}
        selection={this.state.picks[id]}
      />
   );

   renderCupGroup = ({ id, teams }) => (
      <CupGroup
        key={id}
        id={id}
        teams={teams}
        onSelect={this.handleSelect(id)}
        selection={this.state.picks[id]}
      />
   );

   render() {
      const forwardGroups = groups.filter(g => g.id[0] === 'f');
      const defenseGroups = groups.filter(g => g.id[0] === 'd');
      const teamGroups = groups.filter(g => g.id[0] === 't');
      const cupGroups = groups.filter(g => g.id[0] === 's');
      return (
         <PickerRoot>
            <Helmet>
               <title>PuckOverGlass 2017 Stanley Cup Playoff Pool</title>
            </Helmet>
            <H1>Players</H1>
            <Annotation>1 point = 1 point</Annotation>
            {forwardGroups.map(this.renderPlayerGroup)}
            {defenseGroups.map(this.renderPlayerGroup)}

            <H1>Teams</H1>
            <Annotation>1 win = 2 points; 1 shutout = 2 points</Annotation>
            {teamGroups.map(this.renderTeamGroup)}

            <H1>Stanley Cup Champion</H1>
            <Annotation>Stanley Cup Championship = 20 points</Annotation>
            {cupGroups.map(this.renderCupGroup)}
         </PickerRoot>
      );
   }
}
