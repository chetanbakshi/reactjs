import React from 'react';
import ReactDom from 'react-dom';
import { createStore, combineReducers } from 'redux';

class App extends React.Component {

  // actions (forms)
  createPolicy(name, amount) {
    return {
      type: "CREATE_POLICY",
      payload: { name: name, amount: amount }
    }
  }
  deletePolicy(name) {
    return {
      type: "DELETE_POLICY",
      payload: { name: name }
    }
  }
  createClain(name, amountOfMoneyToCollect) {
    return {
      type: "CREATE_CLAIM",
      payload: { name: name, amountOfMoneyToCollect: amountOfMoneyToCollect }
    }
  }

  // reducers (department)
  // claim history department
  clainHistory(oldListOfClaim = [], action) {
    if (action.type === "CREAT_CLAIM") {
      return [...oldListOfClaim, action.payload];
    }
    return oldListOfClaim;
  }
  //accounting department
  accounting(bagOfMoney = 100, action) {
    switch (action.type) {
      case "CREATE_CLAIN":
        return bagOfMoney - action.payload.amountOfMoneyToCollect;
      case "CREATE_POLICY":
        return bagOfMoney + action.payload.amountOfMoneyToCollect;
    }
    return bagOfMoney;
  }
  // policy department
  policies(listOfPolicies = [], action) {
    switch (action.type) {
      case "CREATE_POLICY":
        return [...listOfPolicies, action.payload.name];
      case "DELETE_POLICY":
        return listOfPolicies.filter(name => name !== action.payload.name);
    }
    return listOfPolicies;
  }





  render() {
    return (
      <div>React</div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('#root'));