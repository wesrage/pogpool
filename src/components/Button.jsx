import React, { PropTypes } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
   background-color: ${props => props.theme.main};
   border: none;
   border-radius: 0.125em;
   box-shadow: 1px 1px 5px #888;
   color: #fff;
   padding: 0.25em 1em;
   height: 2em;
   font-size: 2em;
   cursor: ${props => props.disabled ? 'default' : 'pointer'};
   transition: all 300ms;
   opacity: ${props => props.disabled ? 0.5 : 1};

   &:hover {
      background-color: ${props => props.disabled ? props.theme.main : props.theme.accent};
   }

   &:active {
      box-shadow: 0 0 0;
   }
`;

const Button = ({ ...buttonProps, children, disabled = false, onClick }) => (
   <StyledButton {...buttonProps} disabled={disabled} onClick={disabled ? () => {} : onClick}>
      {children}
   </StyledButton>
);

Button.propTypes = {
   children: PropTypes.node.isRequired,
   disabled: PropTypes.bool,
   onClick: PropTypes.func.isRequired,
};

export default Button;
