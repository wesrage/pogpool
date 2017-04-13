import React, { PropTypes } from 'react';
import classnames from 'classnames';
import layout from '../style/layout.scss';

const FlexRow = (props) => (
   <div {...props} className={classnames(props.className, layout.flexRow)}/>
);

FlexRow.propTypes = {
   className: PropTypes.string,
};

export default FlexRow;
