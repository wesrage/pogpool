import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import { divisions } from '../../../scraper/nhl';

const divisionIds = Object.keys(divisions);

const DivisionRoot = styled.div``;

const Name = styled.h2`
   font-size: 1em;
   text-align: ${props => props.right ? 'right' : 'left'};
`;

export default class Division extends Component {
   static propTypes = {
      children: PropTypes.node.isRequired,
      id: PropTypes.oneOf(divisionIds).isRequired,
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
                  ? <span>{divisions[this.props.id].shortName}</span>
                  : <span>{divisions[this.props.id].fullName}</span>}
         </Media>
      );
      return (
         <DivisionRoot>
            <Name right={this.props.right}>{displayName}</Name>
            {React.Children.map(this.props.children, child =>
               React.cloneElement(child, { right: this.props.right }))}
         </DivisionRoot>
      );
   }
}
