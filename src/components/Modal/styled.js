import styled from "styled-components";

export const Overlay = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Main = styled.div`
  width: 80vw;
  height: 13.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: white;
  position: relative;
  button {
    margin-top: 2vh;
    background-color: white;
    color: #4f81a8;
    position: absolute;
    bottom: 1.5rem;
    right: 1rem;
    box-shadow: none;
  }
  padding: 1rem;
`;
