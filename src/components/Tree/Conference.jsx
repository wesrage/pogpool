import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import { H2 } from '../../components/styled';
import { conferences } from '../../../modules/nhl';

const conferenceIds = Object.keys(conferences);

const ConferenceRoot = styled.div``;

const Name = styled(H2)`
   text-align: ${props => props.right ? 'right' : 'left'};
`;

export default class Conference extends Component {
   static propTypes = {
      children: PropTypes.node.isRequired,
      id: PropTypes.oneOf(conferenceIds).isRequired,
      right: PropTypes.bool,
   };

   static defaultProps = {
      right: false,
   };

   render() {
      const displayName = (
         <Media query="(max-width: 45em)">
            {matches =>
               matches
                  ? <span>{conferences[this.props.id].shortName}</span>
                  : <span>{conferences[this.props.id].fullName}</span>}
         </Media>
      );
      return (
         <ConferenceRoot>
            <Name right={this.props.right}>{displayName}</Name>
            {React.Children.map(this.props.children, child =>
               React.cloneElement(child, { right: this.props.right }))}
         </ConferenceRoot>
      );
   }
}
