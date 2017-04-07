import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class NotFound extends Component {
   static propTypes = {

   }

   static defaultProps = {

   }

   render() {
      return (
         <div>
            <Helmet title="Not Found"/>
            <h1>404</h1>
         </div>
      );
   }
}
