import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, useColorMode } from "@chakra-ui/react";
import { Footer } from "../../shared/Footer/Footer";
import { Header } from "../../shared/Header/Header";
import styles from "./layoutStyles.module.scss";
export const Layout = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  let pageColor = "";
  colorMode === "light" ? (pageColor = "#eaccad") : (pageColor = "dark");

  return (
    <Box className={styles.boxContainer} bgColor={pageColor}>
      <Box className={styles.boxButtonContainer}>
        <Button
          onClick={() => toggleColorMode()}
          style={{
            background: "black"
          }}
        >
          {colorMode === "dark" ? (
            <SunIcon color="orange.400" />
          ) : (
            <MoonIcon color="white" />
          )}
        </Button>
      </Box>
      <Box>
        <Box className={styles.boxHeaderChildrenContainer}>
          <Header />
          <Box h="65%">{children}</Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
