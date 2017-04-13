import React from 'react';

export const Cell = props => (
   <div {...props} style={{
      ...props.style,
      display: 'table-cell',
      padding: '0.5em 1em',
   }}>
      {props.children}
   </div>
);

export const Table = props => (
   <div {...props} style={{
      ...props.style,
      display: 'table',
      width: '100%',
   }}>
      {props.children}
   </div>
);

export const Header = props => (
   <div {...props} style={{
      ...props.style,
      display: 'table-header-group',
      backgroundColor: '#333',
      color: '#eee',
      fontWeight: 'bold',
   }}>
      {props.children}
   </div>
);

export const Row = props => (
   <div {...props} style={{
      ...props.style,
      borderBottom: '1px solid #ccc',
      display: 'table-row',
   }}>
      {props.children}
   </div>
);

export const Body = props => (
   <div {...props} style={{
      ...props.style,
      display: 'table-row-group',
   }}>
      {props.children}
   </div>
);
