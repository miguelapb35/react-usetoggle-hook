import React from "react";
import useToggle from "./useToggle";

const App = () => {
  const [open, toggle] = useToggle(false);

  return <button onClick={toggle}>{open ? "Hide" : "Show"}</button>;
};

export default App;
