import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import NotificationSystem from 'react-notification-system';
import PlayerGroup from '../components/Picker/PlayerGroup';
import TeamGroup from '../components/Picker/TeamGroup';
import CupGroup from '../components/Picker/CupGroup';
import LabelledInput from '../components/LabelledInput';
import Button from '../components/Button';
import { H1, Annotation } from '../components/styled';
import { makeSelection, removeSelection } from '../store/picks';
import { submit } from '../store/picker';
import { changeField } from '../store/user';
import groups from '../../modules/groups';
import { validatePicks } from '../../modules/validation';

const PickerRoot = styled.div``;

const Centered = styled.div`
   padding-bottom: 1em;
   text-align: center;
`;

@connect(
   state => ({
      picks: state.picks,
      user: state.user,
      submitted: state.picker.submitted,
      submitting: state.picker.submitting,
      submitError: state.picker.submitError,
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
      submitted: PropTypes.bool,
      submitting: PropTypes.bool,
      submitError: PropTypes.string,
      makeSelection: PropTypes.func.isRequired,
      removeSelection: PropTypes.func.isRequired,
      submit: PropTypes.func.isRequired,
      changeField: PropTypes.func.isRequired,
   };

   componentWillReceiveProps(nextProps) {
      if (nextProps.submitted && !this.props.submitted) {
         this.notificationSystem.addNotification({
            message: `
               Picks submitted successfully!
               You can re-submit as many times as you like until the deadline.
               Your browser will remember your picks.
            `,
            level: 'success',
            dismissible: false,
            position: 'br',
         });
      }
      if (
         !nextProps.submitting &&
         this.props.submitting &&
         nextProps.submitError !== this.props.submitError
      ) {
         this.notificationSystem.addNotification({
            message: nextProps.submitError,
            level: 'error',
            dismissible: true,
            position: 'br',
         });
      }
   }

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
      const validationError = validatePicks({
         ...this.props.user,
         ...this.props.picks,
      });
      return (
         <PickerRoot>
            <Helmet>
               <title>PuckOverGlass 2017 Stanley Cup Playoff Pool</title>
            </Helmet>
            <NotificationSystem ref={e => { this.notificationSystem = e; }} />

            <H1>Your Information</H1>
            <Centered>
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
            </Centered>

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

            <Centered>
               <Button
                 disabled={!!validationError || this.props.submitting}
                 loading={this.props.submitting}
                 onClick={this.props.submit}
               >
                  Submit
               </Button>
               {validationError &&
                  <Annotation>
                     {validationError}
                  </Annotation>}
            </Centered>
         </PickerRoot>
      );
   }
}
