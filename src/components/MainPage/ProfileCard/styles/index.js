import styled from "@emotion/styled"

export const RightContentWrapper = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 50%;

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
  /* background-image: url("../assets/profileimage.jpeg");
  background-repeat: no-repeat;
  background-position: center; */
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    border-radius: 10px;
  }
`