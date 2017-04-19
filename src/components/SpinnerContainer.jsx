import React, { PropTypes } from 'react';
import Spinner from './Spinner';
import layout from '../style/layout.scss';

const renderSpinner = () => (
   <div className={layout.centerParent}>
      <div className={layout.center}>
         <Spinner />
      </div>
   </div>
);

const SpinnerContainer = ({ children, loading }) => (
   loading
      ? renderSpinner()
      : children()
);

SpinnerContainer.propTypes = {
   children: PropTypes.func.isRequired,
   loading: PropTypes.bool,
};

SpinnerContainer.defaultProps = {
   loading: false,
};

export default SpinnerContainer;
