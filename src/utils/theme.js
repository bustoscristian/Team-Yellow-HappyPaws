import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "Trebuchet MS"
      },
      html: {
        fontFamily: "Trebuchet MS"
      }
    })
  }
});
