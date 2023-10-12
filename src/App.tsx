import { useSelector } from "react-redux";

import { MainRouter } from "./routing";
import { useComponentUpdate } from "./hooks";
import { useGetUserQuery } from "./redux/api";

import "./App.scss";

function App() {
  const token = useSelector((state) => state.auth?.token);

  const { data: user, refetch, error } = useGetUserQuery({});

  useComponentUpdate(() => {
    refetch();
  }, [token, refetch]);

  return <MainRouter user={error ? null : user} />;
}

export default App;
