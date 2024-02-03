import React from "react";
import RoutesComponent from "./routes";
import { GlobalProvider } from "./context";

function App() {
  return (
    <GlobalProvider>
      <RoutesComponent />
    </GlobalProvider>
  );
}

export default App;
