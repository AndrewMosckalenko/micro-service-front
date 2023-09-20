import { useSelector } from "react-redux";

import { MainRouter } from "./routing";
import { useGetUserQuery } from "./redux/api";
import { useComponentUpdate } from "./hooks";

import "./App.css";

function App() {
  const token = useSelector((state) => state.auth?.token);

  const { data: user, refetch, error } = useGetUserQuery({});

  useComponentUpdate(() => {
    refetch();
  }, [token, refetch]);

  return <MainRouter user={error ? null : user} />;
}

export default App;
