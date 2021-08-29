import React from "react"
import styled from "@emotion/styled"
import { CurrentTopic } from "../../shared"
import { Text, Button, Divider, Heading } from "@chakra-ui/react"
import screenWidth from "../../utilities/screenWidth"

import IntroSection from "./IntroSection"
import ProjectsSection from "./ProjectsSection"
import AboutMeSection from "./AboutMeSection"
import CompaniesSection from "./CompaniesSection"
// import TestimonialsSection from "./TestimonialsSection"
import ContactSection from "./ContactSection"

// import nextSectionIcon from "../assets/images/next-section.svg"

const LandingPageWrapper = styled.div`
  padding: 0 4em;

  @media (max-width: 768px) {
    padding: 1em 0.5em 0 0.5em;
  }
`

// const DownIcon = styled.div``

const Main = () => {
  const width = screenWidth()

  return (
    <>
      <LandingPageWrapper>
        <IntroSection width={width} />

        <Divider margin="2em 0" />

        <ProjectsSection width={width} />

        <Divider margin="2em 0" />

        <AboutMeSection width={width} />

        <Divider margin="2em 0" />

        <CompaniesSection width={width} />

        <Divider margin="2em 0" />

        {/* <TestimonialsSection />

        <Divider margin="2em 0" /> */}

        <ContactSection width={width} />
      </LandingPageWrapper>

      <Divider margin="2em 0" />

      <Heading textAlign="center" opacity="0.6" fontSize="medium" letterSpacing="wider" marginTop="4em">
        Thanks for visiting my site
      </Heading>
      <Text textAlign="center" opacity="0.6" fontSize="small" letterSpacing="wider" margin="1em 0 4em 0" padding="1em 2em 0 2em">
        Please be aware that I am still working on some features to be added to this site, including the blogging system and sending
        messages
      </Text>

      {/* <FooterWrapper>
        <Heading fontWeight="bold" letterSpacing="wider" color="whiteAlpha.900">
          Maxime Ishimwe
        </Heading>
        <SimpleGrid
          templateColumns={width > 768 ? "repeat(2, 1fr)" : "repeat(1, 1fr)"}
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
          <TechStack>
            <a href="https://linkedin.com/in/maximeish/">
              <Button iconSpacing="auto" leftIcon={<TiSocialLinkedinCircular />} variant="ghost" colorScheme="linkedin"></Button>
            </a>
          </TechStack>
          <TechStack>
            <img src={uplusLogo} alt="uplus mutual partners" width="150px" height="150px" />
          </TechStack>
          <TechStack>
            <img src={firebaseIcon} alt="firebase" width="150px" height="150px" />
          </TechStack>
          <TechStack>
            <img src={firebaseIcon} alt="firebase" width="150px" height="150px" />
          </TechStack>
          <TechStack>
            <img src={firebaseIcon} alt="firebase" width="150px" height="150px" />
          </TechStack>
        </SimpleGrid>
      </FooterWrapper> */}
    </>
  )
}

export default Main
