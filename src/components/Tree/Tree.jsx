import React, { Component } from 'react'
import styled from 'styled-components'
import Conference from './Conference'
import Division from './Division'
import Series from './Series'
import Team from './Team'
import { H1, Annotation } from '../styled'

const DisplayToggleWrapper = styled.div`
  text-align: center;
`

const DisplayToggle = styled.button``

const TreeRoot = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 1em;
`

export default class Tree extends Component {
  state = { show: false }

  toggleVisibility = () => {
    this.setState(state => ({
      show: !state.show,
    }))
  }

  DisplayToggle = () => (
    <DisplayToggleWrapper>
      <DisplayToggle onClick={this.toggleVisibility}>
        {this.state.show ? 'Hide' : 'View'} Matchups
      </DisplayToggle>
    </DisplayToggleWrapper>
  )

  render() {
    return (
      <div>
        <H1>Matchups</H1>
        <Annotation>For reference only</Annotation>
        <TreeRoot>
          <Conference id="W">
            <Division id="C">
              <Series>
                <Team id="NSH" seed={1} />
                <Team id="DAL" seed={4} />
              </Series>
              <Series>
                <Team id="WPG" seed={2} />
                <Team id="STL" seed={3} />
              </Series>
            </Division>
            <Division id="P">
              <Series>
                <Team id="CGY" seed={1} />
                <Team id="COL" seed={4} />
              </Series>
              <Series>
                <Team id="SJS" seed={2} />
                <Team id="VGK" seed={3} />
              </Series>
            </Division>
          </Conference>
          <Conference id="E" right>
            <Division id="A">
              <Series>
                <Team id="TBL" seed={1} />
                <Team id="CBJ" seed={4} />
              </Series>
              <Series>
                <Team id="BOS" seed={2} />
                <Team id="TOR" seed={3} />
              </Series>
            </Division>
            <Division id="M">
              <Series>
                <Team id="WSH" seed={1} />
                <Team id="CAR" seed={4} />
              </Series>
              <Series>
                <Team id="NYI" seed={2} />
                <Team id="PIT" seed={3} />
              </Series>
            </Division>
          </Conference>
        </TreeRoot>
      </div>
    )
  }
}
