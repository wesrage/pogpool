import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Conference from '../components/Tree/Conference';
import Division from '../components/Tree/Division';
import Series from '../components/Tree/Series';
import Team from '../components/Tree/Team';

const TreeRoot = styled.div`
   display: flex;
   justify-content: space-between;
`;

export default class Tree extends Component {
   static propTypes = {};

   static defaultProps = {};

   render() {
      return (
         <TreeRoot>
            <Conference name="Western">
               <Division name="Central">
                  <Series>
                     <Team id="CHI" seed={1} />
                     <Team id="NSH" seed={4} />
                  </Series>
                  <Series>
                     <Team id="MIN" seed={2} />
                     <Team id="STL" seed={3} />
                  </Series>
               </Division>
               <Division name="Pacific">
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
            <Conference name="Eastern" right>
               <Division name="Atlantic">
                  <Series>
                     <Team id="MTL" seed={1} />
                     <Team id="NYR" seed={4} />
                  </Series>
                  <Series>
                     <Team id="OTT" seed={2} />
                     <Team id="BOS" seed={3} />
                  </Series>
               </Division>
               <Division name="Metropolitan">
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
      );
   }
}
