import React from "react"
import { AboutMeWrapper, TechStack } from "../styles/aboutSectionStyles.js"
import { CurrentTopic } from "../../shared"
import { Text, SimpleGrid } from "@chakra-ui/react"
import typeScriptIcon from "../../assets/images/typescript-icon.svg"
import reactIcon from "../../assets/images/react-icon.svg"
import reduxIcon from "../../assets/images/redux-icon.svg"
import figmaIcon from "../../assets/images/figma-icon.svg"
import firebaseIcon from "../../assets/images/firebase-icon.svg"
import tailwindCSSIcon from "../../assets/images/tailwindcss-icon.svg"
import expressIcon from "../../assets/images/express-icon.svg"
import nodejsIcon from "../../assets/images/nodejs-icon.svg"
import mongodbIcon from "../../assets/images/mongodb-icon.svg"

const AboutMeSection = ({ width }) => {
  return (
    <AboutMeWrapper id="about-me">
      <CurrentTopic topicText="About Me" styles={{ marginBottom: "1.5em" }} />
      <Text padding="0 2em" letterSpacing="wide">
        I am a full-stack developer with a strong will to contribute to team success through working in Agile distributed teams (either
        remotely or on-site). I took professional courses from Andela Technical Leadership Program in Software Engineering specializing in
        Full-stack web development. I am also a self-taught mobile developer mainly using React Native.
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
          <img src={typeScriptIcon} alt="typescript" title="TypeScript" />
        </TechStack>
        <TechStack>
          <img src={reactIcon} alt="react" width="150px" height="150px" title="React" />
        </TechStack>
        <TechStack>
          <img src={firebaseIcon} alt="firebase" width="150px" height="150px" title="Firebase" />
        </TechStack>
        <TechStack>
          <img src={reduxIcon} alt="redux" width="150px" height="150px" title="Redux" />
        </TechStack>
        <TechStack>
          <img src={tailwindCSSIcon} alt="tailwindCSS" width="150px" height="150px" title="TailwindCSS" />
        </TechStack>
        <TechStack>
          <img src={figmaIcon} alt="figma" width="150px" height="150px" title="Figma" />
        </TechStack>
        <TechStack>
          <img src={nodejsIcon} alt="nodejs" width="150px" height="150px" title="NodeJS" />
        </TechStack>
        <TechStack>
          <img src={mongodbIcon} alt="mongoDB" width="150px" height="150px" title="MongoDB" />
        </TechStack>
        <TechStack>
          <img src={expressIcon} alt="express" width="150px" height="150px" title="Express" />
        </TechStack>
      </SimpleGrid>

      <Text padding="0 2em" letterSpacing="wide" textAlign="center">
        ...and a few more. Plus, I am willing to learn new ones too when needed.
      </Text>
    </AboutMeWrapper>
  )
}

export default AboutMeSection
