import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PlayerGroup from '../components/Picker/PlayerGroup';
import groups from '../groups';

export default class Picker extends Component {
   state = {
      picks: {},
   };

   handleSelect = groupId =>
      playerId => {
         this.setState(state => ({
            picks: {
               ...state.picks,
               [groupId]: state.picks[groupId] !== playerId ? playerId : null,
            },
         }));
      };

   render() {
      return (
         <div>
            <Helmet>
               <title>PuckOverGlass 2017 Stanley Cup Playoff Pool</title>
            </Helmet>
            {groups.map(group => (
               <PlayerGroup
                 key={group.id}
                 players={group.players}
                 onSelect={this.handleSelect(group.id)}
                 selection={this.state.picks[group.id]}
               />
            ))}
         </div>
      );
   }
}
