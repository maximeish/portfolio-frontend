import { ChakraProvider } from "@chakra-ui/react";
import Routes from "./Routes";
import "./App.css";

const App = () => {
  return (
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  );
};

export default App;
