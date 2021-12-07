import { useSelector } from "react-redux";
import {

  Route,
  Navigate,
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
          <Navigate
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

export default PrivateRoute;