import React from 'react'
import styled from 'styled-components'
import produce from 'immer'
import axios from '../../util/axios'
import Helmet from 'react-helmet'
import NotificationSystem from 'react-notification-system'
import PlayerGroup from './PlayerGroup'
import TeamGroup from './TeamGroup'
import CupGroup from './CupGroup'
import LabelledInput from '../../components/LabelledInput'
import Button from '../../components/Button'
import { H1, Notice, Annotation } from '../../components/styled'
import groups, { filterGroups } from '../../../modules/groups'
import { validatePicks } from '../../../modules/validation'

const PickerRoot = styled.div``

const Centered = styled.div`
  text-align: center;
`

const Spacer = styled.div`
  padding-bottom: 1em;
`

const FixedButtonWrapper = styled.div`
  font-size: 0.5em;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
`

function loadFromStorage(key, defaultValue) {
  const value = localStorage.getItem(key)
  if (value) {
    try {
      return JSON.parse(value)
    } catch (error) {
      return defaultValue
    }
  }
  return defaultValue
}

export default class Picker extends React.Component {
  state = {
    picks: loadFromStorage('2019-picks', {}),
    user: loadFromStorage('2019-user', {
      firstName: '',
      lastName: '',
    }),
    photosVisible: true,
    submitted: false,
    submitting: false,
    submitError: null,
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.submitted && !prevState.submitted) {
      this.notificationSystem.addNotification({
        message: `
               Picks submitted successfully!
               You can re-submit as many times as you like until the deadline.
               Your browser will remember your picks.
            `,
        level: 'success',
        dismissible: false,
        position: 'br',
      })
    }
    if (
      !this.state.submitting &&
      prevState.submitting &&
      !!this.state.submitError &&
      this.state.submitError !== prevState.submitError
    ) {
      this.notificationSystem.addNotification({
        message: this.state.submitError,
        level: 'error',
        dismissible: true,
        position: 'br',
      })
    }
  }

  handleSelect = groupId => pickId => {
    if (this.state.picks[groupId] === pickId) {
      this.setState(
        produce(draft => {
          delete draft.picks[groupId]
        }),
        this.persist
      )
    } else {
      this.setState(
        produce(draft => {
          draft.picks[groupId] = pickId
        }),
        this.persist
      )
    }
  }

  handleInputChange = ({ target }) => {
    this.setState(
      produce(draft => {
        draft.user[target.name] = target.value
      }),
      this.persist
    )
  }

  handleSubmit = e => {
    this.setState({
      submitted: false,
      submitting: true,
    })
    const payload = {
      ...this.state.user,
      ...this.state.picks,
    }
    axios.put('/picks', payload).then(this.submitSuccess, this.submitFailure)
  }

  submitSuccess = () => {
    this.setState({
      submitted: true,
      submitting: false,
    })
  }

  submitFailure = ({ message }) => {
    this.setState({
      submitting: false,
      submitError: message,
    })
  }

  persist = () => {
    localStorage.setItem('2019-picks', JSON.stringify(this.state.picks))
    localStorage.setItem('2019-user', JSON.stringify(this.state.user))
  }

  renderPlayerGroup = ({ id, players }) => (
    <PlayerGroup
      key={id}
      id={id}
      players={players}
      onSelect={this.handleSelect(id)}
      selection={this.state.picks[id]}
      photosVisible={this.state.photosVisible}
    />
  )

  renderTeamGroup = ({ id, teams }) => (
    <TeamGroup
      key={id}
      id={id}
      teams={teams}
      onSelect={this.handleSelect(id)}
      selection={this.state.picks[id]}
    />
  )

  renderCupGroup = ({ id, teams }) => (
    <CupGroup
      key={id}
      id={id}
      teams={teams}
      onSelect={this.handleSelect(id)}
      selection={this.state.picks[id]}
    />
  )

  render() {
    const validationError = validatePicks({
      ...this.state.user,
      ...this.state.picks,
    })
    return (
      <PickerRoot>
        <Helmet>
          <title>PuckOverGlass 2019 Stanley Cup Playoff Pool</title>
        </Helmet>
        <NotificationSystem
          ref={e => {
            this.notificationSystem = e
          }}
        />

        <H1>Instructions</H1>
        <Annotation>
          <p>Make one selection from each row.</p>
          <p>
            There's no need to complete your picks in one sitting; your browser
            will remember where you left off.
          </p>
          <p>Submission Deadline: Wednesday, April 10, 2019 @ 7:00 PM EDT</p>
        </Annotation>

        <H1>Your Information</H1>
        <Centered>
          <LabelledInput
            label="First Name"
            name="firstName"
            value={this.state.user.firstName}
            onChange={this.handleInputChange}
          />
          <LabelledInput
            label="Last Name"
            name="lastName"
            value={this.state.user.lastName}
            onChange={this.handleInputChange}
          />
        </Centered>
        <Spacer />

        <H1>Forwards</H1>
        <Annotation>1 point = 1 point</Annotation>
        {filterGroups(groups, 'f').map(this.renderPlayerGroup)}

        <H1>Defensemen</H1>
        <Annotation>1 point = 1 point</Annotation>
        {filterGroups(groups, 'd').map(this.renderPlayerGroup)}

        <H1>Teams</H1>
        <Annotation>1 win = 2 points 1; shutout = 2 points</Annotation>
        {filterGroups(groups, 't').map(this.renderTeamGroup)}

        <H1>Stanley Cup Champion</H1>
        <Annotation>
          Stanley Cup Championship = 20 points. Choose one team.
        </Annotation>
        {filterGroups(groups, 's').map(this.renderCupGroup)}

        <Centered>
          <Button
            disabled={!!validationError || this.state.submitting}
            loading={this.state.submitting}
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
          {validationError && <Annotation>{validationError}</Annotation>}
        </Centered>
        <Spacer />
      </PickerRoot>
    )
  }
}
