import React from "react"
import { Text, Button, Heading } from "@chakra-ui/react"
import { BiWorld } from "react-icons/bi"
import { ProjectBoxWrapper, BoxOverlay, BoxContent } from "./styles/projectBoxStyles"

const ProjectBox = ({ overlayImage, headingText, descriptionText, siteLink, altText, color = "white" }) => {
  return (
    <ProjectBoxWrapper>
      <BoxOverlay style={{ background: color !== undefined && color }}>
        <img src={overlayImage} alt={altText} />
      </BoxOverlay>

      <BoxContent>
        <figcaption>
          <Heading fontSize="larger">{headingText}</Heading>
        </figcaption>
        <Text>{descriptionText}</Text>
        <a href={siteLink}>
          <Button leftIcon={<BiWorld />} colorScheme="white" variant="outline" letterSpacing="wide">
            Visit Website
          </Button>
        </a>
      </BoxContent>
    </ProjectBoxWrapper>
  )
}

export default ProjectBox
