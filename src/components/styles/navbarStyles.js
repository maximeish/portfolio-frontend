import styled from "@emotion/styled"

export const NavWrapper = styled.nav``

export const Hamburger = styled.div`
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
`

export const NavMenu = styled.ul`
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
      row-gap: 1.2em;
    }
  }
`

export const NavLink = styled.a`
  opacity: 0.7;
  transition: all 0.2s ease;
  letter-spacing: 0.5px;
  font-weight: 550;

  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.5em;

  :hover {
    opacity: 1;
  }
`

export const RouteLink = styled.span`
  opacity: 0.7;
  transition: all 0.2s ease;
  letter-spacing: 0.5px;
  font-weight: 550;

  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.5em;

  :hover {
    opacity: 1;
  }
`
