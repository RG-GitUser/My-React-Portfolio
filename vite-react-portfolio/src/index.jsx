import React from "react";
import "./index.css";
import App from "./App";

import { createRoot } from 'react-dom';

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export default App; 

