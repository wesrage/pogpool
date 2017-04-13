import React, { PropTypes } from 'react';
import classnames from 'classnames';
import bootstrap from '../style/bootstrap/bootstrap.scss';

const Container = ({ children, ...props }) => (
   <div {...props} className={classnames(props.className, bootstrap.container)}>
      {children}
   </div>
);

Container.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
   ]),
   className: PropTypes.string,
};

export default Container;
