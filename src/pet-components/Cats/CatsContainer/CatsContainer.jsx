import { Box, GridItem } from "@chakra-ui/react";
import styles from "./catsContainerStyles.module.scss";
import { useGetCats } from "../../../apis-consumptions/useGetCats";
import { CatCard } from "../../../pet-cards/CatCard/CatCard";
import CatSpinner from "../../../tools/cat-spinner/CatSpinner";
import { CatError } from "../CatError/CatError";

export const CatsContainer = () => {
  const { catData, loading } = useGetCats();

  return (
    <Box className={styles.boxContainer}>
      {loading ? (
        <Box className={styles.boxCatSpinnerContainer}>
          <CatSpinner />
        </Box>
      ) : catData.length > 0 ? (
        catData?.map((cat, i) => {
          return (
            <GridItem key={i}>
              <CatCard {...cat} />
            </GridItem>
          );
        })
      ) : (
        <CatError />
      )}
    </Box>
  );
};
