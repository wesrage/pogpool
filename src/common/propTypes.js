import { PropTypes } from 'react';

export const player = {
   id: PropTypes.number.isRequired,
   firstName: PropTypes.string.isRequired,
   lastName: PropTypes.string.isRequired,
   team: PropTypes.string.isRequired,
};
