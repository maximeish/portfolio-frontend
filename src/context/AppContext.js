import React, { useState, createContext } from "react"

const store = {
  isMenuToggled: false,
}

export const AppContext = createContext(store)

const ContextWrapper = (props) => {
  const [state, setState] = useState(store)

  return <AppContext.Provider value={{ state, setState }}>{props.children}</AppContext.Provider>
}

export default ContextWrapper
