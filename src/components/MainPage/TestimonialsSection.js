import React from "react"
import { CurrentTopic } from "../../shared"
import { Text } from "@chakra-ui/react"
import { TestimonialsWrapper } from "../styles/testimonialsSectionStyles"

const TestimonialsSection = () => {
  return (
    <TestimonialsWrapper>
      <CurrentTopic topicText={"Testimonials"} styles={{ marginBottom: "1.5em" }} />
      <Text padding="0 2em" letterSpacing="wide">
        Here is who I worked with what they said...
      </Text>
    </TestimonialsWrapper>
  )
}

export default TestimonialsSection
