import React from "react"
import { RightContentWrapper, TheCard, CardFront, CardBack, RoleList, Role, TextTyping, RoleTxt } from "./styles"
import { Text } from "@chakra-ui/react"
import { useSpring, animated, config } from "react-spring"
import ProfileImage from "./assets/profileimage.jpeg"
import "./styles/index.css"

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
                Hi,
                <br />
                I'm Maxime. <br /> <br />
                Full Stack Developer and <br />
                UI/UX Designer <br /> <br />
              </animated.span>
            )}
            <animated.span style={props}>
              <TextTyping>
                <RoleTxt>I develop applications for</RoleTxt>
                <RoleList color="white">
                  <Role className="typd-wrp">
                    <span className="typd">Web</span>
                  </Role>
                  <Role className="typd-wrp">
                    <span className="typd">Mobile</span>
                  </Role>
                </RoleList>
                <RoleTxt>platforms</RoleTxt>
              </TextTyping>
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
