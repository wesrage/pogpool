import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { conferences } from '../../../scraper/nhl';

const conferenceNames = Object.keys(conferences).map(key => conferences[key].fullName);

const ConferenceRoot = styled.div``;

const Name = styled.h1`
   text-align: ${props => props.right ? 'right' : 'left'};
`;

export default class Conference extends Component {
   static propTypes = {
      children: PropTypes.node.isRequired,
      name: PropTypes.oneOf(conferenceNames).isRequired,
      right: PropTypes.bool,
   };

   static defaultProps = {
      right: false,
   };

   render() {
      return (
         <ConferenceRoot>
            <Name right={this.props.right}>{this.props.name} Conference</Name>
            {React.Children.map(this.props.children, child => (
               React.cloneElement(child, { right: this.props.right })
            ))}
         </ConferenceRoot>
      );
   }
}
