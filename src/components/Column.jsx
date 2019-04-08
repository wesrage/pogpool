import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
import bootstrap from '../style/bootstrap/bootstrap.scss'

const Column = ({
  children,
  xs,
  xsOffset,
  sm,
  smOffset,
  md,
  mdOffset,
  lg,
  lgOffset,
  ...props
}) => {
  const classes = []
  if (xs) {
    classes.push(bootstrap[`col-xs-${xs}`])
  }
  if (xsOffset) {
    classes.push(bootstrap[`col-xs-offset-${xsOffset}`])
  }
  if (sm) {
    classes.push(bootstrap[`col-sm-${sm}`])
  }
  if (smOffset) {
    classes.push(bootstrap[`col-sm-offset-${smOffset}`])
  }
  if (md) {
    classes.push(bootstrap[`col-md-${md}`])
  }
  if (mdOffset) {
    classes.push(bootstrap[`col-md-offset-${mdOffset}`])
  }
  if (lg) {
    classes.push(bootstrap[`col-lg-${lg}`])
  }
  if (lgOffset) {
    classes.push(bootstrap[`col-lg-offset-${lgOffset}`])
  }
  return (
    <div {...props} className={classnames(props.className, classes)}>
      {children}
    </div>
  )
}

Column.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  xs: PropTypes.number,
  xsOffset: PropTypes.number,
  sm: PropTypes.number,
  smOffset: PropTypes.number,
  md: PropTypes.number,
  mdOffset: PropTypes.number,
  lg: PropTypes.number,
  lgOffset: PropTypes.number,
}

export default Column
