import { ChakraProvider } from "@chakra-ui/react"
import Routes from "./Routes"
import "./styles/App.css"

const App = () => {
  return (
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  )
}

export default App
