import React from "react";
import RoutesComponent from "./routes";
import { GlobalProvider } from "./context";
import "./styles/styles.scss";

function App() {
  return (
    <GlobalProvider>
      <RoutesComponent />
    </GlobalProvider>
  );
}

export default App;
