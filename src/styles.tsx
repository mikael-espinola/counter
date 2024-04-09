import styled from "styled-components";

export const ContainerIndex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const ContainerApp = styled.div`
  width: 50%;
  color: #fff;
  padding: 0.3em;
  border: 2px solid #1f1d1d;

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;
