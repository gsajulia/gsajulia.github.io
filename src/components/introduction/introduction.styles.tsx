import styled from "styled-components/macro";

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 5vw;
  flex-direction: row;
  margin-bottom: 20px;
  align-self: center;

  section {
    align-self: center;
  }

  a {
    color: #b485ff;
    text-decoration: none;
    margin-left: 10px;
    &:hover {
      color: #c39dff;
    }
  }

  address,
  strong {
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;

    span {
      font-size: 12px;
      margin: 0 10px 0 10px;
      color: #e0e0e0;
    }
    @media only screen and (max-width: 700px) {
      margin: 10px;
    }
  }

  strong {
    svg {
      margin: 0 10px 10px 5px;
    }
  }

  address {
    svg {
      margin: 0 10px 10px 0;
    }
  }

  @media only screen and (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
      margin: 10vw 10vw 0 10vw;

      img {
        width: 400px;
      }
    }
`;

export const ReactWorldWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5vw;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  @media only screen and (max-width: 700px) {
    margin: 10px;
  }
`;

export const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 5vw 5vw 0 5vw;

  @media only screen and (max-width: 700px) {
    margin: 10px 5px 0 5px;
  }

  #world {
    animation: rotate linear 6s infinite;
    transform-origin: center;
    transform-box: fill-box;
    stroke: #ff66c4;
    position: relative;
  }

  #react-icon {
    position: relative;
    top: 2px;
    left: 201px;
  }

  #image0_206_13 {
    stroke: none;
  }

  @keyframes rotate {
    0% {
      stroke: rgb(251, 135, 253);
    }
    25% {
      stroke: #b485ff;
    }
    50% {
      stroke: #5ce1e6;
    }
    75% {
      stroke: #b485ff;
    }
    100% {
      stroke: rgb(216, 135, 253);
    }

    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
