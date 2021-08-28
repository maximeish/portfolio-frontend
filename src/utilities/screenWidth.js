import { useState, useEffect } from "react"

const ScreenWidth = () => {
  const getWidth = () => window.innerWidth

  const [width, setWidth] = useState(getWidth())

  const handleResize = () => setWidth(() => getWidth())

  useEffect(() => window.addEventListener("resize", handleResize))

  return width
}

export default ScreenWidth
