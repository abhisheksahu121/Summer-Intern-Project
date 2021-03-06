import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import { Routes } from "./components/routing/Routes";
// import ChartContainer from "./Admin/Piechart";
import PieRechartComponent from "./components/Admin/Piechart";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    //the way by which we can dispatch the loaduser action from here is by taking the store directory and then we just call dispatch and pass in loaduser
    store.dispatch(loadUser());
  }, []); //second parameter pass as empty bcs doing this will make it so that it only run ones
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          {/* <h1>App</h1> */}
          {/* <Piechart/> */}
          {/* <Alert/> */}
          {/* <section> */}
          <Navbar />
          {/* <Landing/> */}
          <Switch>
            <Route exact path="/dataset" component={PieRechartComponent}/>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>

          {/* </section>   */}
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
