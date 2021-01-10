import { ColorModeScript } from "@chakra-ui/react";
import React, { StrictMode } from "react";
import { render } from "react-dom";
import { App } from "./App";

const rootElement = document.getElementById("root");
render(
  <StrictMode>
    <ColorModeScript />
    <App />
  </StrictMode>,
  rootElement,
);
