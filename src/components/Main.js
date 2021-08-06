import React from "react";
import Navbar from "./Navbar";
import styled from "@emotion/styled";
import CurrentTopic from "../utilities/CurrentTopic";
import { Text, Button, Grid, GridItem, Box } from "@chakra-ui/react";
import coderIcon from "../assets/images/coder-icon.svg";
import nextSectionIcon from "../assets/images/next-section.svg";

const LandingPageWrapper = styled.div``;

const IntroPageWrapper = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const IntroPageSection = styled.section`
  max-height: 100%;
  height: 100%;
`;

const IntroRightSide = styled.div`
  background: #6c63ff;
`;

const IntroLeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IntroLeftContentWrapper = styled.div``;

// const WorkButton = styled.div`
//   width: 161px;
//   height: 60px;
//   background: #6c63ff;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   border-radius: 7px;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 22px;
//   line-height: 33px;
//   letter-spacing: 0.02em;
//   color: #ffffff;

//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

const Main = () => {
  return (
    <LandingPageWrapper>
      <IntroPageWrapper>
        <Navbar />
        <IntroPageSection className="flex flex-auto">
          <IntroLeftSide className="flex items-start justify-start flex-grow w-3/5 pl-8 border-red-700 border-10">
            <IntroLeftContentWrapper className="border-2">
              <div className="self-start justify-self-start">
                <CurrentTopic topicText={"Maxime Ishimwe"} />
                <Text fontSize="4xl">
                  Hello,
                  <br /> my name's Maxime.
                </Text>
                <Button backgroundColor="purple.700" color="white">
                  My Work
                </Button>
              </div>
              <div className="">
                <div className="relative bottom-0 left-0 flex items-end justify-between w-auto w-1/2 mt-auto">
                  <img src={coderIcon} alt="" />
                </div>
                <div className="relative left-0 flex items-center justify-center w-full bottom-4">
                  <img src={nextSectionIcon} alt="" />
                </div>
              </div>
            </IntroLeftContentWrapper>
          </IntroLeftSide>
          <IntroRightSide className="flex items-center justify-start flex-grow w-2/5 pl-8">
            <Text fontSize="4xl" color="whiteAlpha.900" lineHeight="60px">
              I’m a Full stack Developer
              <br />
              and a UI/UX Designer.
            </Text>
          </IntroRightSide>
        </IntroPageSection>
      </IntroPageWrapper>

      <section>
        <CurrentTopic topicText={"Projects I worked on"} />
        <Text>They mainly use React</Text>
        <Grid templateColumns="repeat(2, 0.5fr)" columnGap={4} rowGap={4}>
          <Box w="200" h="200" />
          <Box w="200" h="200" />
          <Box w="200" h="200" />
          <Box w="200" h="200" />
          <Box w="200" h="200" />
        </Grid>
      </section>
    </LandingPageWrapper>
  );
};

export default Main;
