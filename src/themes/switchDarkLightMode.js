import { extendTheme } from "@chakra-ui/react";

export const switchDarkLightMode = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true
  },
  styles: {
    global: {
      body: {},
      code: {}
    }
  }
});
