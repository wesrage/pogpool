import PropTypes from 'prop-types'
import React from 'react'
import styled, { keyframes } from 'styled-components'
import Done from 'react-icons/lib/md/done'

const TileRoot = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   margin: 0 auto;
   filter: ${props => props.otherSelected ? 'grayscale(100%)' : 'none'};
   opacity: ${props => props.selected ? 1 : 0.8};
   box-shadow: ${props => props.selected
      ? '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
      : '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
   };
   transform: scale(${props => props.selected ? 1.05 : props.otherSelected ? 0.9 : 1});
   transition: all 0.3s cubic-bezier(.25,.8,.25,1);
   border-radius: 0.125em;
   position: relative;
   height: 100%;
   justify-content: space-between;

   &:hover {
      opacity: 1;
      transform: ${props => props.selected
         ? 'scale(1.1)'
         : 'scale(1.05)'
      };
      box-shadow: ${props => props.selected
         ? '0 16px 38px rgba(0,0,0,0.30), 0 12px 12px rgba(0,0,0,0.22)'
         : '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
      };
      filter: none;
   }
`

const checkAnimation = keyframes`
   0% {
      transform: scale(0);
   }

   80% {
      transform: scale(1.2);
   }

   100% {
      transform: scale(1);
   }
`

const selectedAnimationLarge = keyframes`
   from {
      width: 0;
      height: 0;
   }

   to {
      width: 2em;
      height: 2em;
   }
`

const selectedAnimationMedium = keyframes`
   from {
      width: 0;
      height: 0;
   }

   to {
      width: 1.5em;
      height: 1.5em;
   }
`

const selectedAnimationSmall = keyframes`
   from {
      width: 0;
      height: 0;
   }

   to {
      width: 1em;
      height: 1em;
   }
`

const SelectedRoot = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   height: 2em;
   width: 2em;
   animation: ${selectedAnimationLarge} 100ms;
   background-color: #4885ed;
   display: flex;
   align-items: center;
   justify-content: center;

   @media(max-width: 64em) {
      height: 1.5em;
      width: 1.5em;
      animation: ${selectedAnimationMedium} 100ms;
   }

   @media(max-width: 30em) {
      height: 1em;
      width: 1em;
      animation: ${selectedAnimationSmall} 100ms;
   }
`

const AnimatedCheck = styled(Done)`
   height: 1.5em;
   width: 1.5em;
   animation: ${checkAnimation} 300ms;

   @media(max-width: 64em) {
      height: 1em;
      width: 1em;
   }

   @media(max-width: 30em) {
      height: 0.75em;
      width: 0.75em;
   }
`

const Selected = () => (
   <SelectedRoot>
      <AnimatedCheck color="#fff" />
   </SelectedRoot>
)

const handleKeyboardSelect = onClick => e => {
   if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick()
   }
}

const Tile = ({ className, selected, otherSelected, onClick, children }) => (
   <TileRoot
      className={className}
      selected={selected}
      otherSelected={otherSelected}
      onClick={onClick}
      onKeyDown={handleKeyboardSelect(onClick)}
      tabIndex={0}
   >
      {children}
      {selected && <Selected />}
   </TileRoot>
)

Tile.propTypes = {
   className: PropTypes.string,
   children: PropTypes.node.isRequired,
   selected: PropTypes.bool,
   otherSelected: PropTypes.bool,
   onClick: PropTypes.func,
}

Tile.defaultProps = {
   selected: false,
   otherSelected: false,
   onClick: () => {},
}

export default Tile
