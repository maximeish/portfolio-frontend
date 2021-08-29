import React, { useContext } from "react"
import {
  IntroPageWrapper,
  IntroPageSection,
  IntroLeftSide,
  LeftContentWrapper,
  IntroRightSide,
  RightContentWrapper,
  DevIcon,
  WorkButton,
  WorkButtonMobile,
} from "../styles/introSectionStyles.js"
import Navbar from "../Navbar.js"
import coderIcon from "../../assets/images/coder-icon.svg"
import { FiArrowDown } from "react-icons/fi"
import { CurrentTopic } from "../../shared"
import { Text, Button } from "@chakra-ui/react"
import { AppContext } from "../../context/AppContext.js"

const IntroSection = ({ width }) => {
  const { state } = useContext(AppContext)

  return (
    <IntroPageWrapper>
      <Navbar />
      <IntroPageSection>
        <IntroLeftSide>
          <LeftContentWrapper>
            <CurrentTopic hidden={width > 768 ? false : true} topicText={"Maxime Ishimwe"} />
            <Text hidden={width > 768 ? false : true} fontSize="4xl">
              Hello, <br /> my name's Maxime.
            </Text>
            <a href="#projects-section">
              <Button rightIcon={<FiArrowDown />} style={width > 768 ? WorkButton : WorkButtonMobile}>
                My Work
              </Button>
            </a>
          </LeftContentWrapper>
        </IntroLeftSide>
        <IntroRightSide style={{ height: state.isMenuToggled && "70%" }}>
          <RightContentWrapper>
            <Text
              textAlign={width > 768 ? "center" : "left"}
              fontSize={width > 768 ? "3xl" : "18px"}
              color="whiteAlpha.900"
              lineHeight={width > 768 ? "55px" : "32px"}
              letterSpacing={width > 768 && "wide"}>
              {width < 768 && (
                <span>
                  Hello,
                  <br />
                  my name's Maxime. <br /> <br />
                </span>
              )}
              Full stack Developer <br />
              and UI Designer.
            </Text>
          </RightContentWrapper>
        </IntroRightSide>
        <DevIcon hidden={state.isMenuToggled}>
          <img src={coderIcon} alt="" />
        </DevIcon>
      </IntroPageSection>
    </IntroPageWrapper>
  )
}

export default IntroSection
