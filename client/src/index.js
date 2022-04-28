import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DataLayer from "./Components/DataLayer";
import reducer from "./Components/utility/reducer";
import { initialState } from "./Components/utility/reducer";
ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);
