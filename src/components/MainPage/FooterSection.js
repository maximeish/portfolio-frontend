import React from "react"
import { FooterWrapper } from "../styles/footerStyles.js"
import { Text, Heading, SimpleGrid, Button } from "@chakra-ui/react"
import { TiSocialLinkedinCircular, TiSocialGithub, TiSocialTwitter } from "react-icons/ti"

const FooterSection = ({ width }) => {
  return (
    <FooterWrapper>
      <Heading textAlign="center" fontWeight="bold" fontSize="medium" letterSpacing="widest" color="whiteAlpha.900">
        Maxime Ishimwe
      </Heading>
      <SimpleGrid
        templateColumns="repeat(3, 5em)"
        columnGap={width > 768 ? 4 : 0}
        rowGap={width > 768 ? "4em" : "2em"}
        marginTop="2em"
        marginBottom="2em"
        justifyContent="center"
        justifyItems="center"
        alignContent="center"
        minChildWidth="120px"
        gridAutoRows={width < 768 && "150px"}
        spacing="40px">
        <div>
          <a href="https://linkedin.com/in/maximeish/">
            <Button iconSpacing="auto" size="lg" leftIcon={<TiSocialLinkedinCircular />} colorScheme="white"></Button>
          </a>
        </div>
        <div>
          <a href="https://github.com/maximeish/">
            <Button iconSpacing="auto" size="lg" leftIcon={<TiSocialGithub />} colorScheme="white"></Button>
          </a>
        </div>
        <div>
          <a href="https://twitter.com/maximeish/">
            <Button iconSpacing="auto" size="lg" leftIcon={<TiSocialTwitter />} colorScheme="white"></Button>
          </a>
        </div>
      </SimpleGrid>
      <Text textAlign="center" color="whiteAlpha.800" letterSpacing="widest">
        Made by me © 2023
      </Text>
    </FooterWrapper>
  )
}

export default FooterSection
