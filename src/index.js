import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

import { NavLink, Route, Switch, BrowserRouter } from "react-router-dom";

import Login from "./components/Login";

const App = () => {
  return (
    <div className="App">
      <Login
        onSuccess={data => {
          console.log(data.user.displayName);
        }}
      />
      <AppRoute />
    </div>
  );
};
const HomePage = props => {
  return <div>HomePage</div>;
};
const DashboardePage = () => {
  return <div>DashboardePage</div>;
};
const AppRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dashboard" component={DashboardePage} />
      </Switch>
    </BrowserRouter>
  );
};

// ********
const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
