import React from "react";
import {
  Box,
  Container,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        maxW={"6xl"}
        py={4}
      >
        <Text textAlign={'center'}>© 2024 Frkn Prkn. All rights reserved</Text>
      </Container>
    </Box>
  );
}
