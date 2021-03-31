import styled from "styled-components";
import { Device } from "../media-queries/Breakpoint";

export const ProjectWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 140px;
`;

export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 30px;
  width: 90vw;
  padding: 80px;
  @media ${Device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px 80px;
  }
  @media ${Device.mobile} {
    padding: 40px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const ProjectCard = styled.div`
  padding: 20px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  & .project-card {
    border-radius: 20px;
    width: 30rem;
    height: 35rem;
  }
  & .project-img {
    min-width: 35vw;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    height: 40vh;
  }
  & .project-title {
    font-size: 2em;
    margin-bottom: 1em;
    padding-bottom: 0.3em;
    font-weight: 700;
    color: #c23023;
    border-bottom: 2px solid rgb(233, 233, 233);
  }
  & .project-txt {
    font-size: 1.2em;
    color: #000;
  }
  & .project-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2em;
  }
  @media ${Device.tablet} {
    & .project-card {
      width: 35rem;
      height: 36rem;
    }
    & .project-img {
      height: 30vh;
    }
  }
  @media ${Device.mobile} {
    & .project-txt,
    & .project-links {
      font-size: 1em;
    }
  }
`;
