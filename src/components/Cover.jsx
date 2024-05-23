import { Box } from "@chakra-ui/react";
import background from "../assets/img/yellow_parking.jpg";

const Cover = () => {
  return (
    <section id="home">
    <Box bgImage={background} bgSize="cover" bgPosition="center" h="100vh">
      <h1>HELLO</h1>
    </Box>
    </section>
  );
};

export default Cover;
