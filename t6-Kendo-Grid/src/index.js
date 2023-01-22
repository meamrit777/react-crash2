import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import { FormContextProvider } from "./context/Form-Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FormContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FormContextProvider>
);
reportWebVitals();
