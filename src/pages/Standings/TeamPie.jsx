import PropTypes from 'prop-types'
import React from 'react';
import PieChart from '../../components/PieChart';
import TeamPieInfo from './TeamPieInfo';
import style from '../../style/standings.scss';
import layout from '../../style/layout.scss';

export default class TeamPie extends React.Component {
   static propTypes = {
      contestantName: PropTypes.string.isRequired,
      data: PropTypes.shape().isRequired,
      maxPoints: PropTypes.number.isRequired,
      radius: PropTypes.number.isRequired,
   };

   state = {
      hoveredTeam: null,
   }

   handleSliceMouseover = ({ data }) => {
      this.setState({ hoveredTeam: data });
   };

   handleSliceMouseout = () => {
      this.setState({ hoveredTeam: null });
   };

   render() {
      return (
         <div className={style.teamPieContainer}>
            <h5 className={style.heading}>{this.props.contestantName}</h5>
            <div className={style.teamPieWrapper}>
               <PieChart
                 data={this.props.data}
                 maxPoints={this.props.maxPoints}
                 radius={this.props.radius}
                 onSliceMouseover={this.handleSliceMouseover}
                 onSliceMouseout={this.handleSliceMouseout}
               />
               {this.state.hoveredTeam && <TeamPieInfo {...this.state.hoveredTeam} />}
            </div>
         </div>
      );
   }
}
