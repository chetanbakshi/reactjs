import { computeHeadingLevel } from '@testing-library/react';
import React from 'react';
/*
  northern hemisphere
    winter months: 1 2 3 10 11 12 
    summer months: 4 to 9
  Southern Hemisphere
    winter 4 to 9
    summer 1 2 3 10 11 12 
*/

class DisplaySeason extends React.Component {
  seasonConfig = {
    summer: { label: "SUMMER", iconName: "sun" },
    winter: { label: "WINTER", iconName: "snowflake" }
  }
  getSeason(lat, month) {
    if (month > 2 && month < 9) {
      return lat > 0 ? "summer" : "winter";
    } else {
      return lat > 0 ? "winter" : "summer";
    }
  }
  constructor(props) {
    super(props);
    const season = this.getSeason(props.lat, new Date().getMonth());
    // this.label = season === "winter" ? "SUMMER" : "WINTER"
    // this.icon = season === "winter" ? "snowflake" : "sun"
    this.label = this.seasonConfig[season].label;
    this.iconName = this.seasonConfig[season].iconName;
  }
  render() {
    return (
      <div>

        <h1><i className={`${this.iconName} icon`}></i>{this.label}</h1>
      </div>
    )
  }
  // render() {
  //   return (
  //     <div>Latitude: {this.props.lat}</div>
  //   )
  // }
}

export default DisplaySeason;
