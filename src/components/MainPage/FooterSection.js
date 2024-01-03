import React from "react"
import { FooterWrapper } from "../styles/footerStyles.js"
import { Text, Heading, SimpleGrid, Button } from "@chakra-ui/react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const FooterSection = ({ width }) => {
  return (
    <FooterWrapper>
      <Heading textAlign="center" fontWeight="bold" fontSize="medium" letterSpacing="widest" color="whiteAlpha.900">
        Maxime Ishimwe
      </Heading>
      <SimpleGrid
        templateColumns="repeat(2, 5em)"
        columnGap={width > 768 ? 4 : 0}
        rowGap={width > 768 ? "4em" : "2em"}
        marginTop="2em"
        marginBottom="2em"
        justifyContent="center"
        justifyItems="center"
        alignContent="center"
        minChildWidth="120px"
        spacing="40px">
        <div>
          <a href="https://linkedin.com/in/maximeish/">
            <Button iconSpacing="auto" size="lg" leftIcon={<AiFillLinkedin color="white" />} colorScheme="white"></Button>
          </a>
        </div>
        <div>
          <a href="https://github.com/maximeish/">
            <Button iconSpacing="auto" size="lg" leftIcon={<AiFillGithub color="white" />} colorScheme="white"></Button>
          </a>
        </div>
        {/* <div>
          <a href="https://twitter.com">
            <Button iconSpacing="auto" size="lg" leftIcon={<TiSocialTwitter />} colorScheme="white"></Button>
          </a>
        </div> */}
      </SimpleGrid>
      <Text textAlign="center" color="whiteAlpha.800" letterSpacing="widest">
        Made by me © 2024
      </Text>
    </FooterWrapper>
  )
}

export default FooterSection
