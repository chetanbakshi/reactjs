const { createStore, combineReducers } = Redux;

// actions
const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: { name: name, amount: amount }
  };
};
const deletePolicy = name => {
  return {
    type: "DELETE_POLICY",
    payload: { name: name }
  };
};
const createClain = (name, amountOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: { name: name, amount: amountOfMoneyToCollect }
  };
};

// claim history department
const clainHistory = (oldListOfClaim = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...oldListOfClaim, action.payload];
  }
  return oldListOfClaim;
};
//accounting department
const accounting = (bagOfMoney = 100, action) => {
  switch (action.type) {
    case "CREATE_CLAIM":
      return bagOfMoney - action.payload.amount;
    case "CREATE_POLICY":
      console.log(action.payload);
      return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};
// policy department
const policies = (listOfPolicies = [], action) => {
  switch (action.type) {
    case "CREATE_POLICY":
      return [...listOfPolicies, action.payload.name];
    case "DELETE_POLICY":
      return listOfPolicies.filter(name => name !== action.payload.name);
  }
  return listOfPolicies;
};

// reducers (departments)
const departments = combineReducers({
  accounting: accounting,
  claimHistory: clainHistory,
  policies: policies
});

const store = createStore(departments);

store.dispatch(createPolicy("Sam", 20));
store.dispatch(createPolicy("Jim", 30));
store.dispatch(createPolicy("Bob", 80));
store.dispatch(createClain("Bob", 30));
store.dispatch(deletePolicy("Jim"));
console.log(store.getState());
