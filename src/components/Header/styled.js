import styled from "styled-components";

export const StyledMargin = styled.div`
  width: 100vw;
  height: 3.062rem;
`

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  height: 3.062rem;
  width: 100vw;
  border-bottom: 1px solid #d0d0d0;
  background-color: #FFF;
  z-index: 1;
  
  
  div {
    background: none;
    height: 80%;
    width: 2.5rem;
  }
  
  button {
    border: 1px solid transparent;
    background: none;
    height: 100%;
  }

  p {
    height: 1.188rem;
    font-family: Roboto;
    font-size: 1rem;
    text-align: center;
    flex-grow: 1;
    color: black;
  }
`