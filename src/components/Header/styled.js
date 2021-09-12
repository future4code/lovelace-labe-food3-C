import styled from "styled-components";

export const StyledMargin = styled.div`
  width: 100vw;
  height: 3.062rem;
`

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  height: 3.062rem;
  width: 100vw;
  border-bottom: 1px solid #d0d0d0;
  background-color: #FFF;
  z-index: 1;
  
  
  div {
    justify-self: left;
    background: none;
    margin-left: 10px;
    margin-top: 1%;
    width: 1rem;
    min-height: 2px;
    
  }
  
  button {
    border: none;
    background: none;
  }

  p {
    width: 5.25rem;
    height: 1.188rem;
    font-family: Roboto;
    font-size: 1rem;
    text-align: center;
    flex-grow: 0.9;
    font-weight: normal;
    color: black;
  }

/* Ipad e Ipad Pro */
@media (min-width: 30em){
  p {
    width: 5.25rem;
    height: 1.188rem;
    font-family: Roboto;
    font-size: 1.1rem;
    text-align: center;
    flex-grow: 0.95;
    font-weight: normal;
    
  }
  
}
`