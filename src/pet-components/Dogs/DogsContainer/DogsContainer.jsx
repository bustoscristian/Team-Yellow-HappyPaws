import { Box, GridItem } from "@chakra-ui/react";
import styles from "./dogsContainerStyles.module.scss";
import { useGetDogs } from "../../../apis-consumptions/useGetDogs";
import { DogCard } from "../../../pet-cards/DogCard/DogCard";
import DogSpinner from "../../../tools/dog-spinner/DogSpinner";
import { DogError } from "../DogError/DogError";

export const DogsContainer = () => {
  const { dogData, loading } = useGetDogs();
  console.log(dogData.length);
  return (
    <Box className={styles.boxContainer}>
      {loading ? (
        <Box className={styles.boxDogSpinnerContainer}>
          <DogSpinner />
        </Box>
      ) : dogData?.length > 0 ? (
        dogData?.map((dog, i) => {
          return (
            <GridItem key={i}>
              <DogCard {...dog} />
            </GridItem>
          );
        })
      ) : (
        <Box>
          <DogError />
        </Box>
      )}
    </Box>
  );
};
