import { useDispatch, useSelector } from "react-redux";

import { MainRouter } from "./routing";
import { getTokenFromLocalStorage } from "./utils";
import { requestWhoAmIAction } from "./redux/actions";
import { useComponentUpdate } from "./hooks";

import "./App.css";
import { userFromUserReducerSelector } from "./redux/reducers/selectors";

function App() {
  const dispatch = useDispatch();

  const user = useSelector(userFromUserReducerSelector)

  useComponentUpdate(() => {
    dispatch(requestWhoAmIAction());
  }, [dispatch]);

  return (
    <>
      <MainRouter user={user} />
    </>
  );
}

export default App;
