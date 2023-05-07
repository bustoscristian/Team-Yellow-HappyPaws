import { Box, GridItem } from "@chakra-ui/react";
import styles from "./birdsContainer.module.scss";
import { useGetBirds } from "../../../apis-consumptions/useGetBirds";
import { BirdCard } from "../../../pet-cards/BirdCard/BirdCard";
import BirdSpinner from "../../../tools/bird-spinner/BirdSpinner";
import { BirdError } from "../BirdError/BirdError";

export const BirdsContainer = () => {
  const { birdData, loading } = useGetBirds();

  return (
    <Box className={styles.boxContainer}>
      {loading ? (
        <Box className={styles.boxBirdSpinnerContainer}>
          <BirdSpinner />
        </Box>
      ) : birdData.length > 0 ? (
        birdData?.map((bird, i) => {
          return (
            <GridItem key={i}>
              <BirdCard {...bird} />
            </GridItem>
          );
        })
      ) : (
        <BirdError />
      )}
    </Box>
  );
};
