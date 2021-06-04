import styled from "styled-components";
import { Device } from "../media-queries/Breakpoint";

export const AboutWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 140px;
  background-color: #5d7599;
  @media ${Device.mobile} {
    & .header > h1 {
      font-size: 2em;
    }
  }
`;

export const Education = styled.div`
  width: 90vw;
  padding: 30px;
  background-color: #fff;
  margin: 30px 0px;
  border-radius: 10px;
  & > h2 {
    font-size: 1.5em;
    color: #000;
    border-bottom: 2px solid rgb(233, 233, 233);
    padding-bottom: 10px;
  }
  & .edu {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 15px 0px;
  }
  & .edu > img {
    width: 80px;
  }
  & .edu > .edu-txt {
    margin-top: 20px;
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
  @media ${Device.mobile} {
    & .edu > img {
      width: 100px;
    }
    & .edu > .edu-txt > h5 {
      font-size: 14px;
    }
    & .edu > .edu-txt > h3 {
      font-size: 20px;
    }
    & .edu > .edu-txt > p {
      font-size: 16px;
    }
  }
  @media ${Device.tablet} {
    & .edu {
      justify-content: flex-start;
      flex-direction: row;
    }
    & .edu > img {
      width: 120px;
      margin-right: 20px;
    }
    & .edu > .edu-txt {
      margin-top: 0;
    }
  }
  @media ${Device.laptopM} {
    & > h2 {
      font-size: 2em;
    }
    & .edu > img {
      width: 140px;
      margin-right: 40px;
    }
  }
`;

export const Skill = styled.div`
  width: 90vw;
  padding: 30px;
  background-color: #fff;
  margin: 30px 0px;
  border-radius: 10px;
  & > h2 {
    font-size: 1.5em;
    color: #000;
    border-bottom: 2px solid rgb(233, 233, 233);
    padding-bottom: 10px;
  }
  & .bar {
    width: 50vw;
  }
  & > ul {
    padding: 10px 40px;
  }
  & > ul > li > p {
    font-size: 1.1em;
  }
  @media ${Device.laptopM} {
    & > h2 {
      font-size: 2em;
    }
  }
`;

export const Contacts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90vw;
  padding: 30px;
  background-color: #fff;
  margin: 30px 0px;
  border-radius: 10px;
  & > h2 {
    font-size: 1.5em;
    margin-bottom: 1em;
    border-bottom: 2px solid rgb(233, 233, 233);
    padding: 10px 30px;
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
    color: #5d7599;
  }
  & .contact-info > div > p {
    font-size: 10px;
  }
  @media ${Device.tablet} {
    & .contact-info > div > p {
      font-size: 14px;
    }
  }
  @media ${Device.laptopM} {
    & > h2 {
      font-size: 2em;
    }
    & .contact-info > div > p {
      font-size: 16px;
    }
  }
`;
