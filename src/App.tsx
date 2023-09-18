import { useDispatch } from "react-redux";

import { MainRouter } from "./routing";
import { getTokenFromLocalStorage } from "./utils";
import { requestWhoAmIAction } from "./redux/actions";
import { useComponentUpdate } from "./hooks";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useComponentUpdate(() => {
    dispatch(requestWhoAmIAction());
  }, [dispatch]);

  return (
    <>
      <MainRouter token={getTokenFromLocalStorage() || ""} />
    </>
  );
}

export default App;
