import styled from "styled-components";
import { Device } from "../media-queries/Breakpoint";

export const AboutWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 140px;
  @media ${Device.mobile} {
    & .header > h1 {
      font-size: 2em;
    }
  }
`;

export const Education = styled.div`
  min-width: 80vw;
  padding: 30px;
  background-color: #fff;
  margin: 30px 0px;
  border-radius: 10px;
  & > h2 {
    font-size: 2em;
    color: #000;
    border-bottom: 2px solid rgb(233, 233, 233);
    padding-bottom: 10px;
  }
  & .edu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  & .edu > img {
    width: 80px;
    margin-right: 40px;
  }
  & .edu > .edu-txt {
    margin-top: 20px;
  }
  @media ${Device.tablet} {
    width: 60vw;
    & > h2 {
      font-size: 1.8em;
    }

    & .edu > img {
      width: 60px;
      margin-right: 20px;
    }
    & .edu > .edu-txt > h5 {
      font-size: 14px;
    }
    & .edu > .edu-txt > h3 {
      font-size: 20px;
    }
  }
  @media ${Device.mobile} {
    width: 60vw;
    & .edu {
      flex-direction: column;
      padding: 15px 0px;
    }
    & > h2 {
      font-size: 1.5em;
    }
    & .edu > .edu-txt > h5 {
      font-size: 12px;
    }
    & .edu > .edu-txt > h3 {
      font-size: 17px;
    }
    & .edu > .edu-txt > p {
      font-size: 12px;
    }
  }
`;

export const Skill = styled.div`
  min-width: 80vw;
  padding: 30px;
  background-color: #fff;
  margin: 30px 0px;
  border-radius: 10px;
  & > h2 {
    font-size: 2em;
    color: #000;
    border-bottom: 2px solid rgb(233, 233, 233);
    padding-bottom: 10px;
  }
  & .bar {
    width: 50vw;
  }
  & > ul {
    padding: 20px 40px;
  }
  & > ul > li > p {
    font-size: 1.3em;
  }
  @media ${Device.mobile} {
    width: 60vw;
    & > h2 {
      font-size: 1.5em;
    }
    & > ul {
      padding: 10px 40px;
    }
    & > ul > li > p {
      font-size: 1.1em;
    }
  }
`;

export const Contacts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 80vw;
  padding: 30px;
  background-color: #fff;
  margin: 30px 0px;
  border-radius: 10px;
  & > h2 {
    margin-bottom: 1.5em;
    border-bottom: 2px solid rgb(233, 233, 233);
    padding: 10px 100px;
  }
  & .contact-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .contact-info > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin: 0px 30px;
    color: #c23023;
  }
  @media ${Device.tablet} {
    width: 60vw;
    & .contact-info {
      flex-direction: column;
    }
  }
  @media ${Device.mobile} {
    & > h2 {
      font-size: 2em;
      margin-bottom: 1em;
      border-bottom: 2px solid rgb(233, 233, 233);
      padding: 10px 30px;
    }
    & .contact-info > div > p {
      font-size: 10px;
    }
  }
`;
