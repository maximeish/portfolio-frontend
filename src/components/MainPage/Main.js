import React from "react"
import styled from "@emotion/styled"
import { CurrentTopic } from "../../shared"
import { Text, Button, SimpleGrid, Divider, Heading } from "@chakra-ui/react"
import andelaIcon from "../../assets/images/andela-logo.svg"
import uplusLogo from "../../assets/images/uplus-logo.png"
import screenWidth from "../../utilities/screenWidth"
import { FiLinkedin } from "react-icons/fi"
import { HiOutlineMail } from "react-icons/hi"

import IntroSection from "./IntroSection"
import ProjectsSection from "./ProjectsSection"
import AboutMeSection from "./AboutMeSection"

// import nextSectionIcon from "../assets/images/next-section.svg"

const LandingPageWrapper = styled.div`
  padding: 0 4em;

  @media (max-width: 768px) {
    padding: 1em 0.5em 0 0.5em;
  }
`

// const DownIcon = styled.div``

const CompaniesWrapper = styled.section``

const ContactWrapper = styled.section`
  /* height: 50vh; */
`

// const FooterWrapper = styled.section`
//   background: #6c63ff;
//   padding: 4em 6em;
//   text-align: center;

//   display: flex;
//   align-items: space-between;
//   justify-content: center;
// `

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

        <CompaniesWrapper>
          <Text textAlign="center" letterSpacing="wide">
            I'm glad to have also been trained and worked with some awesome companies...
          </Text>
          <SimpleGrid
            templateColumns={width > 768 ? "repeat(2, 1fr)" : "repeat(1, 1fr)"}
            columnGap={width > 768 ? 2 : 0}
            rowGap={width > 768 ? "4em" : "2em"}
            marginTop="4em"
            marginBottom="4em"
            justifyContent="center"
            justifyItems="center"
            alignContent="center"
            minChildWidth="120px"
            gridAutoRows={width < 768 && "150px"}
            spacing="40px">
            <div>
              <img src={andelaIcon} width="150px" height="150px" alt="andela rwanda" />
            </div>
            <div>
              <img src={uplusLogo} alt="uplus mutual partners" width="150px" height="150px" />
            </div>
            {/* <TechStack>
            <img src={firebaseIcon} alt="firebase" width="150px" height="150px" />
          </TechStack> */}
          </SimpleGrid>
        </CompaniesWrapper>

        <Divider margin="2em 0" />

        {/* <TestimonialsWrapper>
        <CurrentTopic topicText={"Testimonials"} styles={{ marginBottom: "1.5em" }} />
        <Text padding="0 2em" letterSpacing="wide">
          Here is who I worked with what they said...
        </Text>

      </TestimonialsWrapper> 
      
      <Divider margin="2em 0" />
      */}

        <ContactWrapper id="contact-me">
          <CurrentTopic topicText={"Contact Me"} styles={{ marginBottom: "1.5em" }} />
          <Heading textAlign="center" margin="0 0 1em 0" letterSpacing="wide">
            Interested in working together?
          </Heading>
          <div style={{ display: "flex", flexDirection: "column", rowGap: "2em", alignItems: "center", justifyContent: "center" }}>
            <a href="mailto:mxmishimwe5@gmail.com">
              <Button leftIcon={<HiOutlineMail />} letterSpacing="wide" variant="outline" colorScheme="purple">
                Send me an email
              </Button>
            </a>

            <a href="https://linkedin.com/in/maximeish">
              <Button leftIcon={<FiLinkedin />} letterSpacing="wider" colorScheme="linkedin">
                Contact me on LinkedIn
              </Button>
            </a>
          </div>
        </ContactWrapper>
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
