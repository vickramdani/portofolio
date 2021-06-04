import styled from "styled-components";
import { Button } from "react-bootstrap";

import { Device } from "../media-queries/Breakpoint";

export const ProjectWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 140px;
  background-color: #5d7599;
  @media ${Device.laptopM} {
    margin-top: 0;
    padding-bottom: 30px;
  }
`;

export const ProjectList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  @media ${Device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 30px;
  }
  @media ${Device.laptopS} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 30px;
  }
  @media ${Device.laptopM} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 30px;
  }
`;

export const ProjectCard = styled.div`
  background-color: transparent;
  width: 90vw;
  height: 34vh;
  perspective: 1000px;
  & .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
  }

  &:hover .card-inner {
    transform: rotateY(180deg);
  }

  & .card-front,
  & .card-back {
    position: absolute;
    width: 100%;
    height: 30vh;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  & .card-front > img {
    width: 100%;
    height: 30vh;
  }

  & .card-back {
    background-color: #333;
    color: white;
    padding: 20px;
    transform: rotateY(180deg);

    & > h1 {
      font-size: 23px;
      border-bottom: 1px #fff solid;
      padding-bottom: 10px;
    }

    & > p {
      padding: 10px 0;
      font-size: 15px;
    }

    & .btn-links {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  @media ${Device.mobile} {
    width: 77vw;
    height: 40vh;

    & .card-front,
    & .card-back {
      width: 100%;
      height: 38vh;
    }

    & .card-front > img {
      width: 100%;
      height: 38vh;
    }
    & .card-back {
      padding: 22px;

      & > h1 {
        font-size: 28px;
        padding-bottom: 10px;
      }

      & > p {
        font-size: 18px;
        margin-bottom: 15px;
      }
    }
  }
  @media ${Device.tablet} {
    width: 45vw;
    height: 30vh;

    & .card-front,
    & .card-back {
      width: 100%;
      height: 30vh;
    }

    & .card-front > img {
      width: 100%;
      height: 30vh;
    }

    & .card-back {
      padding: 24px;

      & > h1 {
        font-size: 18px;
        padding-bottom: 15px;
      }

      & > p {
        font-size: 12px;
        margin-bottom: 20px;
      }
    }
  }
  @media ${Device.laptopS} {
    width: 42vw;
    height: 33vh;
    & .card-front,
    & .card-back {
      width: 100%;
      height: 33vh;
    }

    & .card-front > img {
      width: 100%;
      height: 33vh;
    }
    & .card-back {
      & > h1 {
        font-size: 25px;
      }

      & > p {
        font-size: 14px;
      }
    }
  }
  @media ${Device.laptopM} {
    width: 40vw;
    height: 40vh;
    & .card-front,
    & .card-back {
      position: absolute;
      width: 100%;
      height: 40vh;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    & .card-front > img {
      width: 40vw;
      height: 40vh;
    }
    & .card-back {
      & > h1 {
        font-size: 30px;
      }

      & > p {
        font-size: 18.5px;
      }
    }
  }
`;

export const BtnLinks = styled(Button)`
  font-size: 14px;
  @media ${Device.mobile} {
    font-size: 18px;
  }
  @media ${Device.tablet} {
    font-size: 12px;
  }
`;
