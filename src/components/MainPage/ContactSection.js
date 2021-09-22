import React from "react"
import { ContactWrapper, ContactButtons } from "../styles/contactSectionStyles.js"
import { CurrentTopic } from "../../shared"
import { Heading, Button } from "@chakra-ui/react"
import { FiLinkedin } from "react-icons/fi"
import { HiOutlineMail } from "react-icons/hi"

const ContactSection = () => {
  return (
    <ContactWrapper id="contact-me">
      <CurrentTopic topicText="Contact Me" styles={{ marginBottom: "1.5em" }} />
      <Heading textAlign="center" margin="0 0 1em 0" letterSpacing="wide">
        Interested in working together?
      </Heading>
      <ContactButtons>
        <a href="mailto:mxmishimwe5@gmail.com">
          <Button leftIcon={<HiOutlineMail />} letterSpacing="widest" variant="outline" colorScheme="purple">
            Send me an email
          </Button>
        </a>

        <a href="https://linkedin.com/in/maximeish">
          <Button leftIcon={<FiLinkedin />} letterSpacing="widest" colorScheme="linkedin">
            Contact me on LinkedIn
          </Button>
        </a>
      </ContactButtons>
    </ContactWrapper>
  )
}

export default ContactSection
