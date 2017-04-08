import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Tile from './Tile';
import Logo from '../Logo';
import colors from '../../common/colors';
import { team as teamPropType } from '../../common/propTypes';

const TileWrapper = styled.div`
   width: 15vw;
   height: 15vw;
   flex-basis: 20%;
   margin: 0.25em;
`;

const TileContents = styled.div`
   background-color: ${props => props.color};
   border-radius: 0.125em;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export default class TeamTile extends Component {
   static propTypes = {
      ...teamPropType,
      onSelect: PropTypes.func.isRequired,
      selected: PropTypes.bool,
      otherSelected: PropTypes.bool,
   };

   static defaultProps = {
      selected: false,
      otherSelected: false,
   };

   render() {
      const { id, selected, otherSelected, onSelect } = this.props;
      return (
         <TileWrapper>
            <Tile style={{ margin: '0.25em' }} selected={selected} otherSelected={otherSelected} onClick={() => onSelect(id)}>
               <TileContents color={colors[id][0]}>
                  <Logo team={id} full />
               </TileContents>
            </Tile>
         </TileWrapper>
      );
   }
}
