import { ChakraProvider } from "@chakra-ui/react"
import Routes from "./Routes"
import "./styles/App.css"
import ContextWrapper from "./context/AppContext"

const App = () => {
  return (
    <ContextWrapper>
      <ChakraProvider>
        <Routes />
      </ChakraProvider>
    </ContextWrapper>
  )
}

export default App
