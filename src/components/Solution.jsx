import traffic from "../assets/img/traffic.jpg";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";

function Feature({ text, iconBg }) {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      />
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
}

function Solution() {
  return (
    <Container maxW={"7xl"} py={12}>
      <Text fontSize="5xl" fontWeight={500} textAlign={"Center"}>
        The Key Issue
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Text textAlign={"Justify"} fontSize={'xl'}>
          <strong>Parking woes have reached critical levels globally, plaguing urban
          centers like Cagayan de Oro</strong> with gridlock and frustration. Illegally
          parked vehicles clog up roads, turning every trip into a battle
          against traffic. <strong>At FrknPrkn, we understand the frustration</strong> of
          circling endlessly for a parking spot and the anxiety of returning to
          find a ticket on your windshield. That's why we've developed a
          game-changing solution to transform your parking experience.
          <strong> Introducing FrknPrkn – your ultimate parking companion!</strong> With our
          innovative mobile app, you gain access to hassle-free, legal parking
          options across Cagayan de Oro. Say goodbye to the endless search for
          parking spots and hello to stress-free journeys!
        </Text>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={traffic}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}

export default Solution;
