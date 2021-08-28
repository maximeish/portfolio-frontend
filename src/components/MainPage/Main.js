import React from "react"
import styled from "@emotion/styled"
import { CurrentTopic, ProjectBox } from "../../shared"
import { Text, Button, SimpleGrid, Divider, Heading } from "@chakra-ui/react"
import typeScriptIcon from "../../assets/images/typescript-icon.svg"
import reactIcon from "../../assets/images/react-icon.svg"
import reduxIcon from "../../assets/images/redux-icon.svg"
import figmaIcon from "../../assets/images/figma-icon.svg"
import firebaseIcon from "../../assets/images/firebase-icon.svg"
import tailwindCSSIcon from "../../assets/images/tailwindcss-icon.svg"
import expressIcon from "../../assets/images/express-icon.svg"
import nodejsIcon from "../../assets/images/nodejs-icon.svg"
import mongodbIcon from "../../assets/images/mongodb-icon.svg"
import andelaIcon from "../../assets/images/andela-logo.svg"
import uplusLogo from "../../assets/images/uplus-logo.png"
import phantomLogo from "../../assets/images/phantom-logo.svg"
import pencilIcon from "../../assets/images/pencil-icon.gif"
import glassesImage from "../../assets/images/glasses-image.png"
import screenWidth from "../../utilities/screenWidth"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { HiOutlineMail } from "react-icons/hi"
// import { TiSocialLinkedinCircular } from "react-icons/ti"
// import { ImPencil2 } from "react-icons/im"
import { ProjectsWrapper, SeeMore } from "../styles/projectsSectionStyles"
import IntroSection from "./IntroSection"
// import { extendTheme } from "@chakra-ui/react"

// console.log("screen width", ScreenWidth)
// import nextSectionIcon from "../assets/images/next-section.svg"

// console.log("current width", ScreenWidth)

const LandingPageWrapper = styled.div`
  padding: 0 4em;

  @media (max-width: 768px) {
    padding: 1em 0.5em 0 0.5em;
  }
`

// const DownIcon = styled.div``

const AboutMeWrapper = styled.section`
  /* height: 100vh; */
  padding: 2em 0 1em 0;
`

const TechStack = styled.div``

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
        <IntroSection />

        <Divider margin="2em 0" />

        <ProjectsWrapper id="projects-section">
          <CurrentTopic topicText={"Projects I worked on"} styles={{ marginBottom: "1.5em" }} />
          <Text textAlign="center"> Here are some examples of projects I collaborated on </Text>
          <SimpleGrid
            templateColumns={width > 768 ? "repeat(2, 1fr)" : "repeat(1, 1fr)"}
            columnGap={4}
            rowGap="2em"
            marginTop="2em"
            marginBottom={width > 768 ? "1em" : "2em"}
            justifyContent="center"
            alignContent="center"
            justifyItems="center"
            minChildWidth="120px"
            spacing="40px">
            <ProjectBox
              overlayImage={uplusLogo}
              altText="uplus"
              headingText="Uplus Mutual Partners"
              descriptionText="A digital group financing platform that enables people to pull funds together in a group"
              siteLink="https://uplus.rw"
            />
            <ProjectBox
              overlayImage={phantomLogo}
              altText="phantom"
              headingText="Phantom"
              descriptionText="Phantom is a web application that allows passengers to track bus location and movements around Kigali"
              siteLink="https://orcas-phantom-frontend.herokuapp.com"
            />
            <ProjectBox
              overlayImage={pencilIcon}
              altText="quizapp"
              headingText="QuizApp"
              descriptionText="QuizApp is a web application for daily practice quizzes to sharpen your skills in different subjects, and save your score"
              siteLink="http://quizapp.byethost11.com/dev"
            />
            <ProjectBox
              overlayImage={glassesImage}
              altText="3d-modeling"
              headingText="Glasses 3D Model configurator"
              descriptionText="A side project for a 3D GLTF glasses model configurator using React Three Fiber"
              siteLink="https://glasses-gltf.netlify.app/"
            />
          </SimpleGrid>
          <SeeMore>
            <a href="https://github.com/maximeish">
              <Button leftIcon={<FiGithub />} color="#6C63FF" variant="outline">
                See More
              </Button>
            </a>
          </SeeMore>
        </ProjectsWrapper>

        <Divider margin="2em 0" />

        <AboutMeWrapper id="about-me">
          <CurrentTopic topicText={"About Me"} styles={{ marginBottom: "1.5em" }} />
          <Text padding="0 2em" letterSpacing="wide">
            I am an enthusiastic full-stack developer with a strong will to contribute to team success through working in Agile distributed
            teams (either remotely or on-site), and attention to detail. I took professional courses from Andela Technical Leadership
            Program in Software Engineering specializing in Full-stack web development. I am also a self-taught mobile developer mainly
            using React Native.
          </Text>

          <Text padding="1em 2em" letterSpacing="wide">
            Here are some technologies that I work with...
          </Text>

          <SimpleGrid
            templateColumns={width > 768 ? "repeat(3, 1fr)" : "repeat(1, 1fr)"}
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
              <img src={typeScriptIcon} alt="typescript" />
            </TechStack>
            <TechStack>
              <img src={reactIcon} alt="react" width="150px" height="150px" />
            </TechStack>
            <TechStack>
              <img src={firebaseIcon} alt="firebase" width="150px" height="150px" />
            </TechStack>
            <TechStack>
              <img src={reduxIcon} alt="redux" width="150px" height="150px" />
            </TechStack>
            <TechStack>
              <img src={tailwindCSSIcon} alt="tailwindCSS" width="150px" height="150px" />
            </TechStack>
            <TechStack>
              <img src={figmaIcon} alt="figma" width="150px" height="150px" />
            </TechStack>
            <TechStack>
              <img src={nodejsIcon} alt="nodejs" width="150px" height="150px" />
            </TechStack>
            <TechStack>
              <img src={mongodbIcon} alt="mongoDB" width="150px" height="150px" />
            </TechStack>
            <TechStack>
              <img src={expressIcon} alt="express" width="150px" height="150px" />
            </TechStack>
          </SimpleGrid>

          <Text padding="0 2em" letterSpacing="wide" textAlign="center">
            ...and a few more. Plus, I am willing to learn new ones too when needed.
          </Text>
        </AboutMeWrapper>

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
            <TechStack>
              <img src={andelaIcon} width="150px" height="150px" alt="andela rwanda" />
            </TechStack>
            <TechStack>
              <img src={uplusLogo} alt="uplus mutual partners" width="150px" height="150px" />
            </TechStack>
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
