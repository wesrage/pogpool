import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import bootstrap from '../style/bootstrap/bootstrap.scss'

const Row = ({ children, ...props }) => (
   <div {...props} className={classnames(props.className, bootstrap.row)}>
      {children}
   </div>
)

Row.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
   ]),
   className: PropTypes.string,
}

export default Row
