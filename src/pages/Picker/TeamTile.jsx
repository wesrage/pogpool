import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Tile from './Tile'
import Logo from '../../components/Logo'
import colors from '../../common/colors'
import { team as teamPropType } from '../../common/propTypes'

const TileWrapper = styled.div`
  margin: 0.5em;
  position: relative;
  width: 20%;

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 100%;
  }
`

const StyledTile = styled(Tile)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const TileContents = styled.div`
  background-color: ${props => props.color};
  border-radius: 0.125em;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default class TeamTile extends React.Component {
  static propTypes = {
    ...teamPropType,
    onSelect: PropTypes.func.isRequired,
    selected: PropTypes.bool,
    otherSelected: PropTypes.bool,
  }

  static defaultProps = {
    selected: false,
    otherSelected: false,
  }

  render() {
    const { id, selected, otherSelected, onSelect } = this.props
    return (
      <TileWrapper>
        <StyledTile
          selected={selected}
          otherSelected={otherSelected}
          onClick={() => onSelect(id)}
        >
          <TileContents color={colors[id]}>
            <Logo team={id} full />
          </TileContents>
        </StyledTile>
      </TileWrapper>
    )
  }
}
