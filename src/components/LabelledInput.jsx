import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import uuid from 'uuid'

const Wrapper = styled.div`
   margin-bottom: 0.125em;
`

const Label = styled.label`
   display: inline-block;
   font-size: 0.825em;
   color: #888;
   text-align: right;
   padding-right: 0.5em;
`

const Input = styled.input`
   color: #464a4c;
   padding: .25em 0.5em;
   font-size: 1em;
   line-height: 1.25;
   border: 1px solid rgba(0,0,0,.15);
   border-radius: 0 0.125em 0.125em 0;
   transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`

export default class LabelledInput extends React.Component {
   static propTypes = {
      id: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string,
   }

   static defaultProps = {
      value: '',
   }

   id = uuid.v1()

   render() {
      const { label, id: propsId, ...inputProps } = this.props
      const id = propsId || this.id
      return (
         <Wrapper>
            <Label htmlFor={id}>
               {label}
            </Label>
            <Input {...inputProps} id={id} />
         </Wrapper>
      )
   }
}
