import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { team as teamPropType } from '../../common/propTypes'
import TeamTile from './TeamTile'

const Root = styled.div`
  align-items: center;
  justify-content: space-around;
  flex-flow: row wrap;
  display: flex;
  width: 50%;
  margin: 0 auto;

  @media (max-width: 45em) {
    width: 75%;
  }

  @media (max-width: 30em) {
    width: 100%;
  }

  &:not(:last-child) {
    padding-bottom: 2em;

    @media (max-width: 45em) {
      padding-bottom: 1em;
    }
  }
`

export default class CupGroup extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    selection: PropTypes.string,
    teams: PropTypes.arrayOf(PropTypes.shape(teamPropType)).isRequired,
    onSelect: PropTypes.func.isRequired,
  }

  static defaultProps = {
    selection: null,
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.selection !== this.props.selection
  }

  render() {
    return (
      <Root>
        {this.props.teams.map(team => {
          const selected = team.id === this.props.selection
          return (
            <TeamTile
              {...team}
              key={team.id}
              onSelect={this.props.onSelect}
              selected={selected}
              otherSelected={this.props.selection !== null && !selected}
            />
          )
        })}
      </Root>
    )
  }
}
