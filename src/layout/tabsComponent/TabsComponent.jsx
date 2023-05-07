import { Box, Tab, TabList, Tabs, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const TabsComponent = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const { colorMode } = useColorMode();

  const [tabValue, setTabValue] = useState(0);

  const handleTabDogs = () => {
    navigate("/dogs");
  };

  const handleTabCats = () => {
    navigate("/cats");
  };

  const handleTabBirds = () => {
    navigate("/birds");
  };

  let bgTabColor = "";
  colorMode === "light"
    ? (bgTabColor = "tabColorLight")
    : (bgTabColor = "tabColorDark");

  useEffect(() => {
    switch (location.pathname) {
      case "/dogs":
        setTabValue(0);
        break;
      case "/cats":
        setTabValue(1);
        break;

      case "/birds":
        setTabValue(2);
        break;

      default:
        setTabValue(0);
        break;
    }
  }, [location]);

  return (
    <Box>
      <Tabs
        variant="soft-rounded"
        colorScheme={bgTabColor}
        onChange={(e) => setTabValue(e)}
        index={tabValue}
      >
        <TabList justifyContent="center">
          <Tab
            onClick={handleTabDogs}
            fontSize={{ base: "15px", md: "20px" }}
            fontFamily="Inter"
            color="dark"
          >
            Dogs
          </Tab>
          <Tab
            onClick={handleTabCats}
            fontSize={{ base: "15px", md: "20px" }}
            fontFamily="Inter"
            color="dark"
          >
            Cats
          </Tab>
          <Tab
            onClick={handleTabBirds}
            fontSize={{ base: "15px", md: "20px" }}
            fontFamily="Inter"
            color="dark"
          >
            Birds
          </Tab>
        </TabList>
      </Tabs>
    </Box>
  );
};
