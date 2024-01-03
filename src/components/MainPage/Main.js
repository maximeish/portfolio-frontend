import React from "react"
import styled from "@emotion/styled"
// import { CurrentTopic } from "../../shared"
import { Text, Divider, Heading } from "@chakra-ui/react"
import screenWidth from "../../utilities/screenWidth.js"

import IntroSection from "./IntroSection/IntroSection.js"
import ProjectsSection from "./ProjectsSection.js"
import AboutMeSection from "./AboutMeSection.js"
import CompaniesSection from "./CompaniesSection.js"
// import TestimonialsSection from "./Testimonials/TestimonialsSection.js"
import ContactSection from "./ContactSection.js"
import FooterSection from "./FooterSection.js"

// import nextSectionIcon from "../assets/images/next-section.svg"

const LandingPageWrapper = styled.main`
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

        <Divider margin="4em 0" />

        <AboutMeSection width={width} />

        <Divider margin="4em 0" />

        <CompaniesSection width={width} />

        <Divider margin="4em 0" />

        {/* <TestimonialsSection /> */}

        {/* <Divider margin="2em 0" /> */}

        <ContactSection width={width} />
      </LandingPageWrapper>

      {/* <Divider margin="4em 0" />

      <Heading textAlign="center" opacity="0.6" fontSize="medium" letterSpacing="wider" marginTop="4em">
        Thanks for visiting my site
      </Heading>
      <Text textAlign="center" opacity="0.6" fontSize="small" letterSpacing="wider" margin="1em 0 4em 0" padding="1em 2em 0 2em">
        Please be aware that some features are still being worked on to be added to this site, including the blogging system and sending
        messages
      </Text> */}

      {/* <Divider margin="2em 0" /> */}

      <FooterSection width={width} />
    </>
  )
}

export default Main
