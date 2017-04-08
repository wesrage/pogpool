import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Conference from '../components/Tree/Conference';
import Division from '../components/Tree/Division';
import Series from '../components/Tree/Series';
import Team from '../components/Tree/Team';
import { H1 } from '../components/styled';

const TreeRoot = styled.div`
   display: flex;
   justify-content: space-around;

   @media(max-width: 64em) {
      justify-content: space-between;
   }
`;

export default class Tree extends Component {
   render() {
      return (
         <div>
            <H1>Matchups</H1>
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
