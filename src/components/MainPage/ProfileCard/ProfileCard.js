import React from "react"
import { RightContentWrapper, TheCard, CardFront, CardBack } from "../../styles/introSectionStyles.js"
import { Text } from "@chakra-ui/react"
import { useSpring, animated, config } from "react-spring"
import ProfileImage from "./assets/profileimage.jpeg"

const ProfileCard = ({ width }) => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: false,
    delay: 200,
    config: config.molasses,
  })

  return (
    <RightContentWrapper>
      <TheCard>
        <CardFront>
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
        </CardFront>
        <CardBack>
          <img src={ProfileImage} alt="profile img" />
        </CardBack>
      </TheCard>
    </RightContentWrapper>
  )
}

export default ProfileCard
