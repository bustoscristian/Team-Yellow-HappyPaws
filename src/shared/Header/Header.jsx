import {
  Box,
  GridItem,
  Image,
  SimpleGrid,
  Text,
  useColorMode
} from "@chakra-ui/react";
import images from "../../images/images";
import styles from "./headerStyles.module.scss";
import { TabsComponent } from "../../layout/tabsComponent/TabsComponent";

export const Header = () => {
  const { logoPatitas } = images;

  const { colorMode } = useColorMode();
  let bgComponentColor = "";
  let colorTitle = "";
  colorMode === "light"
    ? (bgComponentColor = "newColor.150") && (colorTitle = "black")
    : (bgComponentColor = "newColor.50") && (colorTitle = "black");

  return (
    <Box className={styles.boxContainer}>
      <SimpleGrid className={styles.gridContainer}>
        <GridItem>
          <Text
            bgColor={bgComponentColor}
            width={"max-content"}
            margin={"10px 0px"}
            py={3}
            px={5}
            fontSize={{ base: "25px", md: "32px" }}
            fontWeight={600}
            borderRadius="full"
            fontFamily="Inter"
            color={colorTitle}
          >
            Happy Paws
          </Text>
        </GridItem>
        <GridItem className={styles.gridItemLogoContainer}>
          <Image src={logoPatitas} alt="logoPatitas" height="50px" />
        </GridItem>
      </SimpleGrid>
      <Text
        textAlign="center"
        my={5}
        fontSize={{ base: "20px", md: "24px" }}
        fontFamily="Inter"
      >
        Check the status of your beloved pets!
      </Text>
      <TabsComponent />
    </Box>
  );
};
