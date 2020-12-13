// Import Rect and ReactDom libraries
import React from 'react';
import ReactDom from 'react-dom';

function getButtonText() {
  return 'CLICK ME';
}

// Create a react component
const App = () => {
  const buttonText = "CLICK ME!";
  return (
    <div>
      <label className="label" htmlFor="name">Enter name</label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>{getButtonText()}</button>
    </div>
  );
};

// Display react component
ReactDom.render(
  <App />,
  document.querySelector('#root')
)

