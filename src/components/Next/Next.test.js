import React from 'react';
import ReactDOM from 'react-dom';
import Next from './Next';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Next />, div);
  ReactDOM.unmountComponentAtNode(div);
});
