import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

const SeriesRoot = styled.div`
   &:not(:last-child) {
      padding-bottom: 1em;
   }
`;

export default class Series extends Component {
   static propTypes = {
      children: PropTypes.node.isRequired,
      right: PropTypes.bool,
   };

   static defaultProps = {
      right: false,
   };

   render() {
      return (
         <SeriesRoot>
            {React.Children.map(this.props.children, child =>
               React.cloneElement(child, { right: this.props.right }))}
         </SeriesRoot>
      );
   }
}
