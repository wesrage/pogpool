import React, { Component } from 'react';
import styled from 'styled-components';
import Conference from '../components/Tree/Conference';
import Division from '../components/Tree/Division';
import Series from '../components/Tree/Series';
import Team from '../components/Tree/Team';
import { H1, Annotation } from '../components/styled';

const DisplayToggleWrapper = styled.div`
   text-align: center;
`;

const DisplayToggle = styled.button`

`;

const TreeRoot = styled.div`
   display: flex;
   justify-content: space-around;
   padding-bottom: 1em;
`;

export default class Tree extends Component {
   state = { show: false };

   toggleVisibility = () => {
      this.setState(state => ({
         show: !state.show,
      }));
   };

   DisplayToggle = () => (
      <DisplayToggleWrapper>
         <DisplayToggle onClick={this.toggleVisibility}>
            {this.state.show ? 'Hide' : 'View'} Matchups
         </DisplayToggle>
      </DisplayToggleWrapper>
   );

   render() {
      return (
         <div>
            <H1>Matchups</H1>
            <Annotation>For reference only</Annotation>
            <TreeRoot>
               <Conference id="W">
                  <Division id="C">
                     <Series>
                        <Team id="CHI" seed={1} />
                        <Team id="NSH" seed={4} />
                     </Series>
                     <Series>
                        <Team id="MIN" seed={2} />
                        <Team id="STL" seed={3} />
                     </Series>
                  </Division>
                  <Division id="P">
                     <Series>
                        <Team id="ANA" seed={1} />
                        <Team id="CGY" seed={4} />
                     </Series>
                     <Series>
                        <Team id="EDM" seed={2} />
                        <Team id="SJS" seed={3} />
                     </Series>
                  </Division>
               </Conference>
               <Conference id="E" right>
                  <Division id="A">
                     <Series>
                        <Team id="MTL" seed={1} />
                        <Team id="NYR" seed={4} />
                     </Series>
                     <Series>
                        <Team id="OTT" seed={2} />
                        <Team id="BOS" seed={3} />
                     </Series>
                  </Division>
                  <Division id="M">
                     <Series>
                        <Team id="WSH" seed={1} />
                        <Team id="TOR" seed={4} />
                     </Series>
                     <Series>
                        <Team id="PIT" seed={2} />
                        <Team id="CBJ" seed={3} />
                     </Series>
                  </Division>
               </Conference>
            </TreeRoot>
         </div>
      );
   }
}
