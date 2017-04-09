import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import PlayerGroup from '../components/Picker/PlayerGroup';
import TeamGroup from '../components/Picker/TeamGroup';
import CupGroup from '../components/Picker/CupGroup';
import LabelledInput from '../components/LabelledInput';
import Button from '../components/Button';
import { H1, Annotation } from '../components/styled';
import { makeSelection, removeSelection, submit } from '../store/picks';
import { changeField } from '../store/user';
import groups from '../groups';

const PickerRoot = styled.div``;

const InformationSection = styled.div`
   text-align: center;
`;

@connect(
   state => ({
      picks: state.picks,
      user: state.user,
   }),
   { makeSelection, removeSelection, submit, changeField },
)
export default class Picker extends Component {
   static propTypes = {
      picks: PropTypes.shape().isRequired,
      user: PropTypes.shape({
         firstName: PropTypes.string,
         lastName: PropTypes.string,
      }),
      makeSelection: PropTypes.func.isRequired,
      removeSelection: PropTypes.func.isRequired,
      submit: PropTypes.func.isRequired,
      changeField: PropTypes.func.isRequired,
   };

   handleSelect = groupId =>
      pickId => {
         if (this.props.picks[groupId] === pickId) {
            this.props.removeSelection(groupId);
         } else {
            this.props.makeSelection(groupId, pickId);
         }
      };

   handleInputChange = ({ target: { name, value } }) => {
      this.props.changeField({ name, value });
   };

   renderPlayerGroup = ({ id, players }) => (
      <PlayerGroup
        key={id}
        id={id}
        players={players}
        onSelect={this.handleSelect(id)}
        selection={this.props.picks[id]}
      />
   );

   renderTeamGroup = ({ id, teams }) => (
      <TeamGroup
        key={id}
        id={id}
        teams={teams}
        onSelect={this.handleSelect(id)}
        selection={this.props.picks[id]}
      />
   );

   renderCupGroup = ({ id, teams }) => (
      <CupGroup
        key={id}
        id={id}
        teams={teams}
        onSelect={this.handleSelect(id)}
        selection={this.props.picks[id]}
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

            <H1>Your Information</H1>
            <InformationSection>
               <LabelledInput
                 label="First Name"
                 name="firstName"
                 value={this.props.user.firstName}
                 onChange={this.handleInputChange}
               />
               <LabelledInput
                 label="Last Name"
                 name="lastName"
                 value={this.props.user.lastName}
                 onChange={this.handleInputChange}
               />
            </InformationSection>

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

            <Button onClick={this.props.submit}>Submit</Button>
         </PickerRoot>
      );
   }
}
