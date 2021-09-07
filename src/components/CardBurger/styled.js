import styled from "styled-components";

export const CardFood = styled.div`
  display: flex;
  width: 20.5rem;

  height: 7rem;

  margin: 0.438rem 0 0;

  border-radius: 8px;
  border: solid 1px #b8b8b8;
  position: relative;
  button {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 5.625rem;
    height: 1.938rem;
    border-radius: 8px 0 8px 0;
    border: solid 1px black;
    background-color: white;
    text-align: center;
  }
`;

export const MiniPicture = styled.img`
  height: 7rem;
  width: 6rem;
  border-radius: 5px 0 0 5px;
`;

export const TextCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h4 {
    margin: 0.438rem 0 0 1rem;
    color: #e8222e;
    font-size: 1rem;
    letter-spacing: -0.39px;
  }
  p {
    margin: 0.438rem 0 0 1rem;
    color: #b8b8b8;
    font-size: 0.75rem;
    letter-spacing: -0.29px;
  }
  h5 {
    margin: 0.438rem 0 0 1rem;
    font-size: 1rem;
    letter-spacing: -0.39px;
  }
`;
