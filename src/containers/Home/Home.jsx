import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Home extends Component {
   static propTypes = {

   }

   static defaultProps = {

   }

   render() {
      return (
         <div>
            <Helmet title="Home"/>
            <h1>Welcome to the app!</h1>
         </div>
      );
   }
}
