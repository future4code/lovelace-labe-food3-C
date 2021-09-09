import styled from "styled-components";

export const CardContainer = styled.div `
  width: 20.6rem;
  height: 11.75rem;
  padding: 0 0 1rem;
  border-radius: 8px;
  border: 1px solid #b8b8b8;
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  h4 {
    margin: 0.438rem 0 0 1rem;
    color: #e8222e;
    font-size: 1rem;
    letter-spacing: -0.39px;
  }
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

export const RestaurantPicture = styled.img `
  width: 20.5rem;
  height: 7.5rem;
  border-radius: 8px 8px 0 0;
`;

export const ProductPriceAndTax = styled.div `
  display: flex;
  justify-content: space-between;
  p {
    margin: 0.438rem 0.5rem 0 1rem;
    color: #b8b8b8;
    font-size: 1rem;
    letter-spacing: -0.39px;
  }
`;