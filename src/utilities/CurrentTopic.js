import React from "react";
import styled from "@emotion/styled";
import line from "../assets/images/line.svg";

const TopicText = styled.p`
  color: #6c63ff;
`;

const CurrentTopic = ({ topicText: text }) => {
  return (
    <div className="flex flex-row items-center justify-start gap-x-4">
      <div>
        <img src={line} alt="" />
      </div>
      <TopicText>{text}</TopicText>
    </div>
  );
};

export default CurrentTopic;
