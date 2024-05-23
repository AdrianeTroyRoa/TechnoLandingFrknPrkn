import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";

export default function Cover() {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Go effortless parking <br />
            <Text as={"span"} color={"#FF8C32"}>
              in Cagayan de Oro
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Discover effortless parking with FrknPrkn: Your swift, reliable, and
            eco-conscious parking solution in Cagayan de Oro! FrknPrkn: Park in
            a Tap!
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"green"}
              bg={"#FF8C32"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "#F27830",
              }}
            >
              Learn More
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
