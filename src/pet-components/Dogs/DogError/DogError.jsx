import { Box, GridItem, Image, Text } from "@chakra-ui/react";
import images from "../../../images/images";
import styles from "./dogErrorStyles.module.scss";
export const DogError = () => {
  const { dogErrorImage } = images;

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
        <Image src={dogErrorImage} className={styles.errorImage} />
      </GridItem>
    </Box>
  );
};
