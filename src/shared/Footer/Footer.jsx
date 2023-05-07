import { Box, Grid, GridItem, Image, Link, Text } from "@chakra-ui/react";
import images from "../../images/images";
import styles from "./footerStyles.module.scss";
const { gitHubTeamYellow } = images;
const { instagramGlobal } = images;

export const Footer = () => {
  return (
    <Box className={styles.boxContainer} bg="dark">
      <Grid className={styles.gridContainer}>
        <GridItem class={styles.gridItemTitleContainer}>
          <Text
            className="footerTitle"
            color="dark"
            role="img"
            aria-label="footerTitle"
            textAlign="center"
          >
            Developed with 💛 by Team-Yellow
          </Text>
        </GridItem>
        <GridItem className={styles.gridItemImagesContainer}>
          <Link href="https://github.com/bustoscristian/Team-Yellow-HappyPaws">
            <Image
              src={gitHubTeamYellow}
              alt="gitHubTeamYellow"
              height="30px"
            />
          </Link>
          <Link href="https://www.instagram.com/globalthinktechnology">
            <Image
              src={instagramGlobal}
              alt="instagramGlobal"
              className="instagramGlobal"
              height="30px"
            />
          </Link>
        </GridItem>
      </Grid>
    </Box>
  );
};
