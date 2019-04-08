import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Spinner from './Spinner'

const StyledButton = styled.button`
  background-color: ${props =>
    props.loading ? props.theme.main : props.theme.accent};
  border: none;
  border-radius: 0.125em;
  box-shadow: ${props => (props.disabled ? '0 0 0' : '1px 1px 5px #888')};
  color: #fff;
  padding: 0.25em 1em;
  height: 2em;
  font-size: 2em;
  transition: all 300ms;
  opacity: ${props => (props.loading || !props.disabled ? 1 : 0.5)};
  margin-bottom: 0.5em;

  &:hover {
    background-color: ${props =>
      props.disabled && !props.loading ? props.theme.accent : props.theme.main};
  }

  &:active {
    box-shadow: 0 0 0;
  }
`

const Button = ({
  children,
  loading = false,
  disabled = false,
  onClick,
  ...buttonProps
}) => (
  <StyledButton
    {...buttonProps}
    loading={loading}
    disabled={disabled}
    onClick={disabled ? () => {} : onClick}
  >
    {loading ? <Spinner white /> : children}
  </StyledButton>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

export default Button
