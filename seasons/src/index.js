import React from 'react';
import ReactDom from 'react-dom';

import DisplaySeason from './season-display.component'

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  )
  return (
    <DisplaySeason />
  );
};

ReactDom.render(
  <App />,
  document.querySelector("#root")
)