import styled from "@emotion/styled"

export const ProjectBoxWrapper = styled.div`
  width: 300px;
  height: 280px;
  /* border: 1px solid rgba(0, 0, 0, 0.3); */
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  & > figure {
    display: none;
  }

  :hover {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);

    & > div {
      display: none;
    }

    & > figure {
      display: block;
    }
  }
`

export const BoxOverlay = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 4em;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: auto;
    width: 100%;
    max-width: 100%;
  }
`

export const BoxContent = styled.figure`
  background: #6c63ff;
  padding: 2em;
  text-align: center;
  letter-spacing: 1px;
  color: white;

  & > figcaption {
    margin-bottom: 1.5em;
  }

  & > p {
    margin-bottom: 2em;
  }
`
