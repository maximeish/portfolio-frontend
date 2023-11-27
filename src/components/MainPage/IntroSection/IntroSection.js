import React, { useContext } from "react"
import {
  IntroPageWrapper,
  IntroPageSection,
  IntroLeftSide,
  LeftContentWrapper,
  IntroRightSide,
  DevIcon,
  WorkButton,
  WorkButtonMobile,
} from "../../styles/introSectionStyles.js"
import Navbar from "../../Navbar"
import coderIcon from "../../../assets/images/coder-icon.svg"
import { FiArrowDown } from "react-icons/fi"
import { CurrentTopic } from "../../../shared"
import { Text, Button } from "@chakra-ui/react"
import { AppContext } from "../../../context/AppContext"
import { useSpring, animated, config } from "react-spring"
import ProfileCard from "./ProfileCard/ProfileCard.js"

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
              <CurrentTopic hidden={width > 768 ? false : true} topicText="Bio" />
            </animated.span>
            <Text hidden={width > 768 ? false : true} fontSize="2xl">
              <animated.span style={props}>
                Hi, <br /> I'm Maxime.
              </animated.span>
              <Text>Full Stack Developer and UI/UX Designer</Text>
            </Text>
            <a href="/#projects">
              <Button rightIcon={<FiArrowDown />} _hover={{ bgColor: "teal.600" }} style={width > 768 ? WorkButton : WorkButtonMobile}>
                <animated.span style={props}>My Work</animated.span>
              </Button>
            </a>
          </LeftContentWrapper>
        </IntroLeftSide>
        <IntroRightSide style={{ height: state.isMenuToggled && "60%" }}>
          <ProfileCard width={width} />
        </IntroRightSide>
        <DevIcon hidden={state.isMenuToggled}>
          <img src={coderIcon} alt="" />
        </DevIcon>
      </IntroPageSection>
    </IntroPageWrapper>
  )
}

export default IntroSection
