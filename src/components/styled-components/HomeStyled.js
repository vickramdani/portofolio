import styled from "styled-components";
import { Device } from "../media-queries/Breakpoint";

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding-left: 160px;
  font-family: "Montserrat Alternates", sans-serif;
  z-index: 1;
  overflow-x: hidden;
  position: relative;
  & .profile {
    min-width: 40vw;
    height: 100vh;
  }
  & .photo {
    width: 45vw;
    position: absolute;
    bottom: 25%;
    right: 3%;
  }
  @media ${Device.desktop} {
    padding-left: 80px;
    & .profile {
      min-width: 40vw;
      height: 100vh;
      position: absolute;

      top: 10%;
      left: 0;
    }
    & .photo {
      width: 40vw;
      bottom: 22%;
      right: 1%;
    }
  }

  @media ${Device.tablet} {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-left: 0px;
    height: 100vh;
    & .header-txt {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-bottom: 25em;
    }
    & .profile {
      width: 100vw;
      height: 100vh;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
    }

    & .photo {
      width: 100vw;
      bottom: 20%;
      right: 6%;
    }
  }
  @media ${Device.mobile} {
    height: 100vh;
    & .header-txt {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-bottom: 16em;
      z-index: 2;
    }
    & .profile {
      display: none;
    }

    & .photo {
      width: 120vw;
      bottom: 19%;
      right: -5%;
    }
  }
`;

export const NameHeaderOne = styled.h1`
  font-size: 65px;
  font-weight: 700;
  @media ${Device.tablet} {
    font-size: 55px;
  }
  @media ${Device.mobile} {
    font-size: 30px;
  }
`;

export const NameHeaderTwo = styled.h1`
  font-size: 75px;
  font-weight: 700;
  color: #c23023;
  @media ${Device.tablet} {
    font-size: 65px;
    color: #ddc36d;
  }
  @media ${Device.mobile} {
    font-size: 35px;
    color: #c23023;
  }
`;

export const JobTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
  @media ${Device.mobile} {
    font-size: 20px;
  }
`;
