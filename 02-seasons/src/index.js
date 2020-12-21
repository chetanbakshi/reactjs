import React from 'react';
import ReactDom from 'react-dom';

import DisplaySeason from './season-display.component'

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   )
//   return (
//     <DisplaySeason />
//   );
// };

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { lat: null, errorMessage: '' };
//     window.navigator.geolocation.getCurrentPosition(
//       (position) => {
//         this.setState({ lat: position.coords.latitude });
//       },
//       (err) => {
//         this.setState({ errorMessage: err.message });
//       }
//     )
//   }
//   render() {
//     if (this.state.errorMessage && !this.state.lat) {
//       return <div>Error: {this.state.errorMessage}</div>
//     }
//     if (!this.state.errorMessage && this.state.lat) {
//       return <div>Latitude: {this.state.lat}</div>
//     }
//     return <div>Loading ...</div>

//   }
// }

// class App extends React.Component {
//   state = { lat: null, errorMessage: '' };
//   componentDidMount() {
//     window.navigator.geolocation.getCurrentPosition(
//       (position) => this.setState({ lat: position.coords.latitude }),
//       (err) => this.setState({ errorMessage: err.message })
//     )
//   }
//   render() {
//     if (this.state.errorMessage && !this.state.lat) {
//       return <div>Error: {this.state.errorMessage}</div>
//     }
//     if (!this.state.errorMessage && this.state.lat) {
//       return <div>Latitude: {this.state.lat}</div>
//     }
//     return <div>Loading ...</div>

//   }
// }

class App extends React.Component {
  state = { lat: null, errorMessage: '' };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    )
  }
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <DisplaySeason lat={this.state.lat} />
    }
    return <div>Loading ...</div>
  }
  render() {
    return (
      <div style={{ width: "100vw", height: "100vh", border: "red 10px solid" }}>{this.renderContent()}</div>
    )

  }
}

ReactDom.render(
  <App />,
  document.querySelector("#root")
)