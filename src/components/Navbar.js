import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import styled from "@emotion/styled";

const NavWrapper = styled.nav``;

const Hamburger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 1em;
    right: 1em;
    height: 48px;
    box-sizing: border-box;
    cursor: pointer;
    z-index: 2;

    svg {
      stroke: #000;
      transition: all 0.2s ease;

      g {
        &:first-of-type {
          opacity: 1;
          transition: opacity 0s 0.2s;

          line {
            transition: transform 0.2s 0.2s;
            transform: translateY(0px);
          }
        }

        &:last-child {
          opacity: 0;
          transition: opacity 0s 0.2s;

          line {
            transition: transform 0.2s;
            transform: rotate(0deg);
            transform-origin: center;
          }
        }
      }
    }

    &.-menu-open svg {
      g {
        &:first-of-type {
          opacity: 0;

          line {
            transition: transform 0.2s;

            &:first-of-type {
              transform: translateY(7px);
            }

            &:last-child {
              transform: translateY(-7px);
            }
          }
        }

        &:last-child {
          opacity: 1;

          line {
            transition: transform 0.2s 0.2s;

            &:first-of-type {
              transform: rotate(45deg);
            }

            &:last-child {
              transform: rotate(-45deg);
            }
          }
        }
      }
    }
  }
`;

const NavMenu = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 1em;

  @media (max-width: 768px) {
    opacity: 0;
    transition: all 0.2s ease;
    display: none;

    &.-open {
      opacity: 0.9;
      display: flex;
      flex-direction: column;
      margin-top: 2em;
      row-gap: 1em;
    }
  }
`;

const NavLink = styled.a`
  opacity: 0.7;
  transition: all 0.2s ease;

  :hover {
    opacity: 1;
  }
`;

const Navbar = () => {
  const [isMenuToggled, setMenuToggled] = useState(false);

  const toggleMenu = () => {
    setMenuToggled(!isMenuToggled);
  };

  return (
    <NavWrapper className="flex flex-col items-center justify-center w-full p-4 pt-8 gap-y-4 md:gap-y-0 md:items-center md:p-8 md:flex-row md:justify-between md:">
      <div>
        <Link to="/">
          <img src={Logo} alt="Maxime Ishimwe" />
        </Link>
      </div>

      <NavMenu className={isMenuToggled ? "-open" : null}>
        <li>
          <NavLink href="#projects">Projects</NavLink>
        </li>
        <li>
          <NavLink href="#about-me">About me</NavLink>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <NavLink href="#send-message">Send me a message</NavLink>
        </li>
      </NavMenu>

      <Hamburger
        onClick={toggleMenu}
        className={isMenuToggled ? "-menu-open" : ""}
      >
        <svg
          width="36px"
          height="36px"
          viewBox="0 0 48 48"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
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
  );
};

export default Navbar;
