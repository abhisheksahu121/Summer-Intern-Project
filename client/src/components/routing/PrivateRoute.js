// when we are loged out we dont want to see dashboard in our screen so we can fix this  by using private route component for our dashboard
import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateRoute = (
  { component: Component, auth: { isAuthenticated, loading }, ...rest } //we want to get ant other parameter that is passed in by using rest parameter
) => (
  //adding the render propes where we check to see if the user not authenticated and not loading if this true then we are going to redirect login
  <Route
    {...rest}
    render={
      (props) =>
        !isAuthenticated && !loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )

      // ) : (
      //      //passd the component and props of that component
      //   <Component {...props} /> //and is they are authenticated then the component will load
      // )
    }
  />
  // </Switch>
  // </Fragment>
  // </Route>
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

//pulled out all the state from auth reducers
const mapStateToPropes = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToPropes)(PrivateRoute);

// import React from 'react';
// import { Route, Redirect,Switch,Router } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// const PrivateRoute = ({ component: Component, auth, ...rest }) => (
//   <Router>
//   <Switch>
//   <Route
//     {...rest}
//     render={props =>
//       auth.isAuthenticated === true ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to="/login" />
//       )
//     }
//   />
//   </Switch>
//   </Router>
// );

// PrivateRoute.propTypes = {
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps)(PrivateRoute);
