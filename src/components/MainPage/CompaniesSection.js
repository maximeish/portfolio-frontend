import React from "react"
import andelaIcon from "../../assets/images/andela-logo.svg"
import uplusLogo from "../../assets/images/uplus-logo.png"
import mvendLogo from "../../assets/images/mvend-logo.jpg"
import { CompaniesWrapper } from "../styles/companiesSectionStyles.js"
import { Text, SimpleGrid } from "@chakra-ui/react"

const CompaniesSection = ({ width }) => {
  return (
    <CompaniesWrapper>
      <Text textAlign="center" letterSpacing="wide">
        I'm glad to have also been trained and worked with these awesome companies...
      </Text>
      <SimpleGrid
        templateColumns={width > 768 ? "repeat(3, 1fr)" : "repeat(1, 1fr)"}
        columnGap={width > 768 ? 2 : 0}
        rowGap={width > 768 ? "4em" : "2em"}
        marginTop="4em"
        marginBottom="4em"
        justifyContent="center"
        justifyItems="center"
        alignContent="center"
        alignItems="center"
        minChildWidth="120px"
        gridAutoRows={width < 768 && "150px"}
        spacing="40px">
        <div>
          <a href="https://andela.com">
            <img src={andelaIcon} width="150px" height="150px" alt="andela rwanda" />
          </a>
        </div>
        <div>
          <a href="https://uplus.rw">
            <img src={uplusLogo} alt="uplus mutual partners" width="150px" height="150px" />
          </a>
        </div>
        <div>
          <a href="https://mvend.co.rw">
            <img src={mvendLogo} alt="mvend limited" width="150px" height="150px" />
          </a>
        </div>
        {/* <TechStack>
            <img src={firebaseIcon} alt="firebase" width="150px" height="150px" />
          </TechStack> */}
      </SimpleGrid>
    </CompaniesWrapper>
  )
}

export default CompaniesSection
