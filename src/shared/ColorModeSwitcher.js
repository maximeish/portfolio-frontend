import * as React from "react"
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

let mode

export const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue("light", "dark")
  mode = text
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      title={`Switch to ${text === "light" ? "dark" : "light"} mode`}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text === "light" ? "dark" : "light"} mode`}
      {...props}
    />
  )
}

export default mode
