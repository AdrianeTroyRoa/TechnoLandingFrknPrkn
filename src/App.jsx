import { useState } from "react";
import { Container } from "@chakra-ui/react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      Hello, world!
    </Container>
  );
}

export default App;
