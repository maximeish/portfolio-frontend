import React, { useContext } from "react"
import { Link } from "react-router-dom"
import Logo from "../assets/images/logo.svg"
import { AppContext } from "../context/AppContext"
import { GrProjects } from "react-icons/gr"
import { AiOutlineMessage } from "react-icons/ai"
import { NavWrapper, NavMenu, NavLink, Hamburger } from "./styles/navbarStyles"
import AboutMeIcon from "../assets/images/about-me.svg"

const Navbar = () => {
  const { state, setState } = useContext(AppContext)

  const toggleMenu = () =>
    setState({
      ...state,
      isMenuToggled: !state.isMenuToggled,
    })

  return (
    <NavWrapper className="flex flex-col items-center justify-center w-full p-4 pt-8 gap-y-4 md:gap-y-0 md:items-center md:p-8 md:flex-row md:justify-between md:">
      <div>
        <Link to="/">
          <img style={{ opacity: 0.9 }} src={Logo} alt="Maxime Ishimwe" />
        </Link>
      </div>

      <NavMenu className={state.isMenuToggled ? "-open" : null}>
        <li>
          <NavLink href="/#projects">
            <GrProjects /> Projects
          </NavLink>
        </li>
        <li>
          <NavLink href="/#about-me">
            <img src={AboutMeIcon} width="24px" height="24px" alt="about-me" aria-hidden="true" /> About me
          </NavLink>
        </li>
        {/* <li>
          <Link to="/blog">
            <RouteLink>
              <GrBlog /> Blog
            </RouteLink>
          </Link>
        </li> */}
        <li>
          <NavLink href="/#contact-me">
            <AiOutlineMessage /> Send me a message
          </NavLink>
        </li>
      </NavMenu>

      <Hamburger onClick={toggleMenu} className={state.isMenuToggled ? "-menu-open" : ""}>
        <svg width="36px" height="36px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g>
            <line x1="0" y1="17" x2="48" y2="17" strokeWidth="1" />
            <line x1="0" y1="31" x2="48" y2="31" strokeWidth="1" />
          </g>

          <g>
            <line x1="0" y1="24" x2="48" y2="24" strokeWidth="1" />
            <line x1="0" y1="24" x2="48" y2="24" strokeWidth="1" />
          </g>
        </svg>
      </Hamburger>
    </NavWrapper>
  )
}

export default Navbar
