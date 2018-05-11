import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
   100% { transform: rotate(360deg) }
`

const bounce = keyframes`
  0%, 100% { transform: scale(0.0) }
  50% { transform: scale(1.0) }
`

const Wrapper = styled.div`
   width: 40px;
   height: 40px;
   position: relative;
   text-align: center;
   animation: ${rotate} 1.0s infinite linear;
`

const Dot = styled.div`
   width: 60%;
   height: 60%;
   display: inline-block;
   position: absolute;
   top: 0;
   background-color: ${props => props.white ? '#fff' : props.theme.main};
   border-radius: 100%;
   animation: ${bounce} 1s infinite ease-in-out;
`

const Dot2 = styled(Dot)`
   top: auto;
   bottom: 0;
   animation-delay: -0.5s;
`

const Spinner = ({ white }) => (
   <Wrapper>
      <Dot white={white} />
      <Dot2 />
   </Wrapper>
)

export default Spinner
