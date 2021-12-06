import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";


function PrivateRoute({ children, ...rest }) {
  const { isloggedin } = useSelector(state => state.user)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isloggedin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}