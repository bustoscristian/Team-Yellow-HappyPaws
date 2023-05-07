import moment from "moment";
// import styles from "../../styles.scss";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode
} from "@chakra-ui/react";

export const DogCard = ({ name, photo, lastTimeWalked, lastTimePlayed }) => {
  lastTimeWalked
    ? (lastTimeWalked = new Date())
    : (lastTimePlayed = new Date());
  const chileWalked = moment(lastTimeWalked).utcOffset(-4); //CONVIERTO A UTC Y LE RESTO 4 HORAS
  const chilePlayed = moment(lastTimePlayed).utcOffset(-4); //CONVIERTO A UTC Y LE RESTO 4 HORAS

  const { colorMode } = useColorMode();
  let bgComponentColor = "";
  let colorTitle = "";
  colorMode === "light"
    ? (bgComponentColor = "newColor.150") && (colorTitle = "black")
    : (bgComponentColor = "newColor.200") && (colorTitle = "newColor.100");

  return (
    <Box className="boxContainer">
      <Card backgroundColor={bgComponentColor} className="cardContainer">
        <CardBody className="cardBodyContainer">
          <Box className="boxImageContainer">
            <Image src={photo} alt="DogImage" className="cardImage" />
          </Box>
          <Stack mt="6" spacing="3">
            <Heading
              size="md"
              display="flex"
              justifyContent="center"
              color="dark"
            >
              <Text
                className="lastTimeTitle"
                fontSize={{ base: "17px", md: "18px" }}
              >
                {lastTimeWalked
                  ? `Last Time Walked of ${name}`
                  : `Last Time Played of ${name}`}
              </Text>
            </Heading>
            <Text
              className="chileTimeSubtitle"
              color="dark"
              fontSize={{ base: "14px", md: "16px" }}
            >
              {lastTimeWalked
                ? chileWalked.format("LLL")?.toString() +
                  " (Chile Standard Time)"
                : chilePlayed.format("LLL")?.toString() +
                  " (Chile Standard Time)"}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter className="cardFooterContainer">
          <Text
            className="petNameFooter"
            color="dark"
            fontSize={{ base: "15px", md: "17px" }}
          >
            {name.split(" ")[0].toUpperCase()}
          </Text>
        </CardFooter>
      </Card>
    </Box>
  );
};
