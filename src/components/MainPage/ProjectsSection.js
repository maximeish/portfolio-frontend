import React from "react"
import { ProjectsWrapper, SeeMore } from "../styles/projectsSectionStyles"
import { CurrentTopic, ProjectBox } from "../../shared"
import uplusLogo from "../../assets/images/uplus-logo.png"
import phantomLogo from "../../assets/images/phantom-logo.svg"
import pencilIcon from "../../assets/images/pencil-icon.gif"
import glassesImage from "../../assets/images/glasses-image.png"
import { Text, Button, SimpleGrid } from "@chakra-ui/react"
import { FiGithub } from "react-icons/fi"

const ProjectsSection = ({ width }) => {
  return (
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
  )
}

export default ProjectsSection
