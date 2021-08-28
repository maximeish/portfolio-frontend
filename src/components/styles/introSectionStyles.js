import styled from "@emotion/styled"

export const IntroPageWrapper = styled.main`
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
`

export const IntroPageSection = styled.section`
  max-height: 100%;
  height: 100%;

  display: flex;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
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
  row-gap: 2em;
`

export const RightContentWrapper = styled.div`
  background: #6c63ff;
  height: 60%;
  width: 60%;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
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
  padding: "1.5em 2em",

  background: "#6C63FF",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "7px",
}

export const WorkButtonMobile = {
  letterSpacing: "0.2em",
  width: "fit-content",
  color: "white",
  padding: "0.5em 1em",
  fontSize: "small",
  borderRadius: "5px",
  margin: "3em 0 0 1em",

  background: "#6C63FF",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
}
