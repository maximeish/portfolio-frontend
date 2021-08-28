import React from "react"
import line from "../assets/images/line.svg"
import { TopicText } from "./styles/currentTopicStyles"

const CurrentTopic = ({ topicText: text, hidden, styles }) => {
  return (
    <div style={styles} hidden={hidden} className="flex flex-row items-center justify-start gap-x-4">
      <div>
        <img src={line} alt="" />
      </div>
      <TopicText>{text}</TopicText>
    </div>
  )
}

export default CurrentTopic
