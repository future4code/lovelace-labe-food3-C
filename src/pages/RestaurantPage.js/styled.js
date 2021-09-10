import styled from "styled-components";

export const GeralContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 22.5rem;
  min-height: 40rem;
  margin-bottom: 1rem;
`;

export const HeaderContainer = styled.div`
  height: 2.75rem;
`;

export const CardRestaurant = styled.div`
  height: 15rem;

  width: 20.5rem;
  p {
    margin-bottom: 0.5rem;
    color: #b8b8b8;
  }
  h5 {
    margin: 0.5rem 0px 0.5rem 0px;
    color: #e8222e;
    font-size: 1rem;
    letter-spacing: -0.39px;
  }
`;

export const DeliverTaxSpan = styled.span`
  margin-left: 0.5rem;
`;

export const RestaurantPicture = styled.img`
  width: 20.5rem;
  height: 7.5rem;
  border-radius: 10px 10px 0px 0px;
`;

export const CardMenu = styled.div`
  margin-top: 1rem;
  h3 {
    font-size: 1rem;
    letter-spacing: -0.39px;
    border-bottom: 1px solid black;
  }
`;
