import { Box, Container, Flex, Img, Spacer, Text } from "@chakra-ui/react";
import FRKN from "../assets/img/FRKN.png";

function Header() {
  const menuItems = {
    Home: "home",
    "About Us": "about",
    "Innovative Venture": "venture",
    "Unique Selling Propositions": "value",
  };

  const menuItemKeys = Object.keys(menuItems);

  return (
    <Container maxW="container.xl">
      <Flex bg="white">
        <Img width="100px" src={FRKN} alt="FRKN PRKN Logo" />
        <Spacer />
        {menuItemKeys.map((key, index) => (
          <a href={"#" + menuItems[key]}>
            <Box
              p="4"
              bg="white"
              color="black"
              _hover={{ bg: "orange", color: "white" }}
            >
              <Text fontSize="xl" key={index}>
                {key}
              </Text>
            </Box>
          </a>
        ))}
      </Flex>
    </Container>
  );
}

export default Header;
