import React, { useState, useEffect } from "react"
import { capsFirst } from "../../../utilities/testimonials-carousel"
import "@fontsource/inter"
import theme from "./theme"

import { ChakraProvider, extendTheme, Container, Heading, Button, VStack, HStack, Text, Flex, Tag, Image } from "@chakra-ui/react"
import TestImg from "./assets/test.jpeg"
import Carousel from "./Carousel"

export default function CarouselWrapper() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((res) => setData(res))
  }, [])

  return (
    // <ChakraProvider theme={extendTheme(theme)}>
    <Container
      py={8}
      px={0}
      maxW={{
        base: "100%",
        sm: "35rem",
        md: "43.75rem",
        lg: "57.5rem",
        xl: "75rem",
        xxl: "87.5rem",
      }}>
      <Carousel gap={32}>
        {data.slice(5, 8).map((post, index) => (
          <Flex
            key={index}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            justifyContent="space-between"
            flexDirection="column"
            overflow="hidden"
            color="gray.300"
            bg="base.d100"
            rounded={5}
            flex={1}
            p={5}>
            <Flex justifyContent="space-between" style={{ borderRadius: "50%", border: "2px solid red" }}>
              <Image src={TestImg} alt="test" maxWidth="full" width="full" height="auto" borderRadius="50%" />
            </Flex>

            <VStack mb={6}>
              <Heading fontSize={{ base: "xl", md: "2xl" }} textAlign="left" w="full" mb={2}>
                {capsFirst(post.title)}
              </Heading>
              <Text w="full">{capsFirst(post.body)}</Text>
            </VStack>
          </Flex>
        ))}
      </Carousel>
    </Container>
    // </ChakraProvider>
  )
}
