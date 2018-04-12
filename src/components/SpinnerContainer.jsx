import PropTypes from 'prop-types'
import React from 'react'
import Spinner from './Spinner'

import styled from 'styled-components'

const Center = styled.div`
   left: 50%;
   position: absolute;
   top: 50%;
   transform: translate(-50%, -50%);
`

const renderSpinner = () => (
   <Center>
      <Spinner />
   </Center>
)

const SpinnerContainer = ({ children, loading }) => (
   loading
      ? renderSpinner()
      : children()
)

SpinnerContainer.propTypes = {
   children: PropTypes.func.isRequired,
   loading: PropTypes.bool,
}

SpinnerContainer.defaultProps = {
   loading: false,
}

export default SpinnerContainer
