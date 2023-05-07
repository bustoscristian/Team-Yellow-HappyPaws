import moment from "moment";
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

export const BirdCard = ({ name, photo, lastTimeFed }) => {
  lastTimeFed = new Date();
  const chileFed = moment(lastTimeFed).utcOffset(-4); //CONVIERTO A UTC Y LE RESTO 4 HORAS

  const { colorMode } = useColorMode();
  let bgComponentColor = "";

  colorMode === "light"
    ? (bgComponentColor = "newColor.150")
    : (bgComponentColor = "newColor.200");

  return (
    <Box className="boxContainer">
      <Card backgroundColor={bgComponentColor} className="cardContainer">
        <CardBody className="cardBodyContainer">
          <Box className="boxImageContainer">
            <Image src={photo} alt="birdImage" className="cardImage" />
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
                {`Last Time Fed of ${name.split(" ")[0]}`}
              </Text>
            </Heading>
            <Text
              className="chileTimeSubtitle"
              color="dark"
              fontSize={{ base: "14px", md: "16px" }}
            >
              {chileFed.format("LLL").toString() + " (Chile Standard Time)"}
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
