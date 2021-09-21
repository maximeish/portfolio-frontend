import React from "react"
import styled from "@emotion/styled"
import Navbar from "../Navbar"
import { CurrentTopic } from "../../shared"
import { Button, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import ScreenWidth from "../../utilities/screenWidth"
import samplePost from "../../assets/images/sample-post.jpg"
import samplePost2 from "../../assets/images/sample-post2.jpg"

const BlogPageWrapper = styled.main`
  padding: 0 4em;

  @media (max-width: 768px) {
    padding: 1em 0.5em 0 0.5em;
  }
`

const PostsSection = styled.section``

const PostsWrapper = styled.div``

const PostsHeader = styled.div`
  width: 83%;
  padding-right: 2em;
  margin: 4em auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 2em;
    width: 90%;
    padding-right: 0;

    & > div {
      align-self: center;
      justify-self: center;
    }
  }
  border: 2px solid red;
`

const PostBoxWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  padding: 1em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease-in-out;
  width: 100%;

  :hover {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
  }
`

const PostImage = styled.div`
  border: 2px solid blue;
  width: 100%;
  height: 2;

  & > img {
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
`

const Blog = () => {
  const width = ScreenWidth()

  return (
    <BlogPageWrapper>
      <Navbar />
      <PostsSection>
        <PostsHeader>
          <CurrentTopic topicText="Recents Posts" />
          <Button letterSpacing="widest">View all</Button>
        </PostsHeader>

        <PostsWrapper>
          <SimpleGrid
            templateColumns={width > 768 ? "repeat(2, 0.5fr)" : "repeat(1, 0.5fr)"}
            columnGap={4}
            rowGap="2em"
            marginTop="2em"
            marginBottom={width > 768 ? "1em" : "2em"}
            justifyContent="center"
            alignContent="center"
            justifyItems="center"
            minChildWidth="120px"
            spacing="40px">
            <PostBoxWrapper>
              <PostImage marginBottom="3em">
                <img src={samplePost} alt="" />
              </PostImage>
              <Heading>Introduction to blog</Heading>
              <Text>Lorem ipsum dolor sit amet...</Text>
              <Text opacity="0.5" fontSize="small" textAlign="right">
                12, Feb
              </Text>
            </PostBoxWrapper>
            <PostBoxWrapper>
              <PostImage marginBottom="3em">
                <img src={samplePost2} alt="" />
              </PostImage>
              <Heading>Introduction to blog</Heading>
              <Text>Lorem ipsum dolor sit amet...</Text>
              <Text opacity="0.5" fontSize="small" textAlign="right">
                12, Feb
              </Text>
            </PostBoxWrapper>
          </SimpleGrid>
        </PostsWrapper>
      </PostsSection>
    </BlogPageWrapper>
  )
}

export default Blog
