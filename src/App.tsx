import { useDispatch, useSelector } from "react-redux";

import { MainRouter } from "./routing";
import { requestWhoAmIAction } from "./redux/actions";
import { useComponentUpdate } from "./hooks";
import { userFromUserReducerSelector } from "./redux/reducers/selectors";

import "./App.css";
import { ErrorForm } from "./components/forms/error-form";

function App() {
  const dispatch = useDispatch();

  const user = useSelector(userFromUserReducerSelector);

  useComponentUpdate(() => {
    dispatch(requestWhoAmIAction());
  }, [dispatch]);

  return (
    <>
      <MainRouter user={user} />
      <ErrorForm />
    </>
  );
}

export default App;
