import styled from "@emotion/styled"

export const IntroPageWrapper = styled.main`
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
`

export const IntroText = styled.span``

export const IntroPageSection = styled.section`
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
  row-gap: 2em;
`

export const RightContentWrapper = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 50%;

  /* :hover > div {
    transform: rotateY (180deg);
  } */

  @media (max-width: 768px) {
    height: 280px;
    width: 280px;
    border-radius: 10px;
  }
`

export const TheCard = styled.div`
  width: 100%;
  height: 100%;
  /* border-radius: 10px; */
  transform-style: preserve-3d;
  transition: all 0.8s ease;
  /* transform: translate(-50%, -50%); */

  :hover {
    transform: rotateY(180deg);
  }
`

export const CardFront = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #6c63ff;
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  backface-visibility: hidden;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0px;
    border-radius: 10px;
  }
`

export const CardBack = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 50%;
  text-align: center;
  transform: rotateY(180deg);

  & > img {
    width: 100%;
    height: 100%;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    border-radius: 10px;
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

  background: "#6C63FF",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
}
