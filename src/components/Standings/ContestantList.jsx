import React, { PropTypes } from 'react';
import Contestant from './Contestant';

const ContestantList = ({ contestants, maxPoints }) => (
   <div>
      {contestants.map(contestant => (
         <Contestant
           key={`${contestant.firstName} ${contestant.lastName}`}
           maxPoints={maxPoints}
           {...contestant}
         />
      ))}
   </div>
);

ContestantList.propTypes = {
   contestants: PropTypes.arrayOf(PropTypes.object).isRequired,
   maxPoints: PropTypes.number.isRequired,
};

export default ContestantList;
