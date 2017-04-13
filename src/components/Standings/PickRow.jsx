import React, { PropTypes } from 'react';
import classnames from 'classnames';
import TeamLabel from '../TeamLabel';
import style from '../../style/standings.scss';

const GroupName = ({ name }) => <span className={style.groupName}>{name}</span>;

const DisplayName = ({ name }) => <span>{name}</span>;

const PointCount = ({ points, best }) => {
   const classes = classnames(style.pointCount, {
      [style.bestPickCount]: best,
   });
   return <div className={classes}>{points}</div>;
};

const PickRow = ({ groupName, displayName, team, points, best, worst, out, final, maxPoints }) => {
   const classes = classnames(style.pickRow, {
      [style.bestPickRow]: best,
      [style.outPickRow]: out,
      [style.worstPickRow]: worst,
      [style.finalPickRow]: final,
   });

   const titleText = buildTitleText({ best, worst, out, final });

   return (
      <div>
         <div className={classes} title={titleText}>
            <GroupName name={groupName.toUpperCase()} />
            <TeamLabel team={team} />
            <DisplayName name={displayName} />
            <PointCount points={points} best={best} />
         </div>
         <div
           className={style.pointBar}
           style={{
              width: `${points / maxPoints * 100}%`,
           }}
         />
      </div>
   );
};

function buildTitleText({ best, worst, out, final }) {
   if (worst && !final) {
      return null;
   }
   if (out && !best && !worst) {
      return 'Eliminated';
   }
   const finalizedStatus = final ? 'Clinched' : 'Current';
   const superlativeStatus = best ? 'best' : 'worst';
   const eliminationStatusSuffix = best ? `; ${out ? 'eliminated' : 'still active'}` : '';
   return `${finalizedStatus} ${superlativeStatus} pick in group${eliminationStatusSuffix}`;
}

PickRow.propTypes = {
   best: PropTypes.bool,
   worst: PropTypes.bool,
   out: PropTypes.bool,
   final: PropTypes.bool,
   groupName: PropTypes.string.isRequired,
   displayName: PropTypes.string.isRequired,
   team: PropTypes.string.isRequired,
   points: PropTypes.number.isRequired,
   maxPoints: PropTypes.number.isRequired,
};

PickRow.defaultProps = {
   best: false,
   worst: false,
   out: false,
   final: false,
};

export default PickRow;
