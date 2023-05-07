import { createRoot } from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { newTabTheme } from "./themes/newTabTheme";
import { switchDarkLightMode } from "./themes/switchDarkLightMode";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <ChakraProvider theme={newTabTheme}>
    <ColorModeScript
      initialColorMode={switchDarkLightMode.config.initialColorMode}
    />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);
