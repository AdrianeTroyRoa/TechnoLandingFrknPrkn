import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Center,
  Container,
} from "@chakra-ui/react";

const Feature = ({ title, text }) => {
  return (
    <Stack>
      <Text fontWeight={600} fontSize='3xl' color="orange">{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function About() {
  return (
    <Container maxW={"container.xl"} id="about">
      <Center>
        <Text fontSize="5xl" fontWeight={500}>Our 3Ps Philosophy</Text>
      </Center>
      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            title={"Proximity"}
            text={
              "We commit ourselves to give our customers the most reliable, best, and closest parking spots in the city of Cagayan de Oro."
            }
          />
          <Feature
            title={"Price"}
            text={
              "In FRKN PRKN, we believe that honesty is the best policy; hence, we aim to give our users consistent price rates designed fairly with our partners."
            }
          />
          <Feature
            title={"People Orientation"}
            text={
              "Drivers and its partners - in this company, we focus in serving the interests of both: to give each of them the best of our services."
            }
          />
        </SimpleGrid>
      </Box>
    </Container>
  );
}
