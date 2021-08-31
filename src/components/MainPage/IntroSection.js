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
import { useSpring, animated, config } from "react-spring"

const IntroSection = ({ width }) => {
  const { state } = useContext(AppContext)

  // const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: false,
    delay: 200,
    config: config.molasses,
  })

  return (
    <IntroPageWrapper>
      <Navbar />
      <IntroPageSection>
        <IntroLeftSide>
          <LeftContentWrapper>
            <animated.span style={props}>
              <CurrentTopic hidden={width > 768 ? false : true} topicText="Maxime Ishimwe" />
            </animated.span>
            <Text hidden={width > 768 ? false : true} fontSize="4xl">
              <animated.span style={props}>
                Hello, <br /> my name's Maxime.
              </animated.span>
            </Text>
            <a href="/#projects">
              <Button rightIcon={<FiArrowDown />} style={width > 768 ? WorkButton : WorkButtonMobile}>
                <animated.span style={props}>My Work</animated.span>
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
                <animated.span style={props}>
                  Hello,
                  <br />
                  my name's Maxime. <br /> <br />
                </animated.span>
              )}
              <animated.span style={props}>
                Full stack Developer <br />
                and UI Designer.
              </animated.span>
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
