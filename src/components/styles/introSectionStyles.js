import styled from "@emotion/styled"

export const IntroPageWrapper = styled.section`
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
`

export const IntroText = styled.span``

export const IntroPageSection = styled.div`
  max-height: 100%;
  height: 75%;
  margin-left: 4.5em;

  display: flex;

  @media (max-width: 768px) {
    height: 100%;
    margin-left: 0;
    flex-direction: column-reverse;
    row-gap: 3em;
    align-items: center;
    justify-content: flex-end;
  }
`

export const IntroLeftSide = styled.div`
  width: 50%;
  padding-left: 2em;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    padding-left: 0;
    justify-content: center;
  }
`

export const IntroRightSide = styled.div`
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 95%;
    height: 55%;
    margin-top: 1em;
  }
`

export const LeftContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  justify-content: flex-start;
`

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

export const DevIcon = styled.div`
  img {
    transform: scale(0.9);
  }

  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 247px;
      height: 141px;
    }
  }
`

export const WorkButton = {
  width: "fit-content",
  color: "white",
  letterSpacing: "0.2em",
  padding: "1.5em 2em 1.5em 1em",
  cursor: "pointer",

  background: "#6C63FF",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "7px",
  transition: "all 0.3s ease-in-out",
}

export const ResumeBtn = {
  width: "fit-content",
  color: "black",
  letterSpacing: "0.1em",
  padding: "1.5em 2em",
  cursor: "pointer",

  background: "#e7e9e9",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "7px",
  transition: "all 0.3s ease-in-out",
}

export const WorkButtonMobile = {
  letterSpacing: "0.2em",
  width: "fit-content",
  color: "white",
  padding: "0.5em 1em",
  fontSize: "small",
  borderRadius: "5px",
  marginTop: "-3em",

  background: "#6C63FF",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    background: "red",
  },
}

export const ResumeBtnMobile = {
  letterSpacing: "0.1em",
  width: "fit-content",
  color: "black",
  padding: "0.5em 1em",
  fontSize: "small",
  borderRadius: "5px",
  marginTop: "0",

  background: "#e7e9e9",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  transition: "all 0.3s ease-in-out",
}

export const WorkButtonHover = {
  background: "teal.600",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
  borderRadius: "7px",
  transition: "all 0.3s ease-in-out",
}
