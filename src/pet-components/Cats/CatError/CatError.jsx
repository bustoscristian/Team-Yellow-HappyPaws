import { Box, GridItem, Image, Text } from "@chakra-ui/react";
import images from "../../../images/images";
import styles from "./catErrorStyles.module.scss";
export const CatError = () => {
  const { catErrorImage } = images;

  return (
    <Box className={styles.boxContainer}>
      <GridItem>
        <Text
          className={styles.textErrorContainer}
          fontSize={{ base: "20px", md: "30px" }}
          color="dark"
        >
          (404) NOT FOUND
        </Text>
        <Image src={catErrorImage} className={styles.errorImage} />
      </GridItem>
    </Box>
  );
};
