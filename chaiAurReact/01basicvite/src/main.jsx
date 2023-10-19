import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const NewElement = React.createElement(
  'a',
  { href: 'https://www.facebook.com', target: '_blank' },
  'Visible Heading for Scammers'
);
ReactDOM.createRoot(document.getElementById('root')).render(<>{NewElement}</>);
