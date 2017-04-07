import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { divisions } from '../../../scraper/nhl';

const divisionNames = Object.keys(divisions).map(key => divisions[key].fullName);

const DivisionRoot = styled.div``;

const Name = styled.h2`
   text-align: ${props => props.right ? 'right' : 'left'};
`;

export default class Division extends Component {
   static propTypes = {
      children: PropTypes.node.isRequired,
      name: PropTypes.oneOf(divisionNames).isRequired,
      right: PropTypes.bool,
   };

   static defaultProps = {
      right: false,
   };

   render() {
      return (
         <DivisionRoot>
            <Name right={this.props.right}>{this.props.name} Division</Name>
            {React.Children.map(this.props.children, child =>
               React.cloneElement(child, { right: this.props.right }))}
         </DivisionRoot>
      );
   }
}
