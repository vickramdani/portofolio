import styled from "styled-components";
import { Device } from "../media-queries/Breakpoint";

// #def4e4 #0b6623

export const HomeWrapper = styled.div`
  height: 100vh;
  background-color: #fff;
  background-image: radial-gradient(
    180% 430px at 50% -30px,
    #0b6623 75%,
    transparent 75%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media ${Device.mobile} {
    background-image: radial-gradient(
      180% 900px at 50% -30px,
      #0b6623 75%,
      transparent 75%
    );
  }
  @media ${Device.tablet} {
    background-image: radial-gradient(
      180% 700px at 50% -30px,
      #0b6623 75%,
      transparent 75%
    );
  }
  @media ${Device.laptopM} {
    background: #def4e4;
    flex-direction: row-reverse;
    justify-content: space-around;
    background: linear-gradient(45deg, #fff 60%, #0b6623 40%);
  }
`;

export const HeaderTittle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media ${Device.laptopM} {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const HeaderTxt = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  @media ${Device.laptopM} {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const FirstName = styled.h3`
  color: #2a363b;
  font-weight: 700;
  @media ${Device.mobile} {
    font-size: 40px;
  }
  @media ${Device.tablet} {
    font-size: 55px;
  }
`;

export const LastName = styled.h2`
  color: #a7d676;
  font-weight: 700;
  @media ${Device.mobile} {
    font-size: 42px;
  }
  @media ${Device.tablet} {
    font-size: 57px;
  }
`;

export const Proffesion = styled.p`
  color: #2a363b;
  font-weight: 700;
  font-size: 19px;
  @media ${Device.mobile} {
    font-size: 25px;
  }
  @media ${Device.tablet} {
    font-size: 35px;
  }
`;
