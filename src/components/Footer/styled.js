import styled from "styled-components";

export const StyledMargin = styled.div`
    width: 100vw;
    height: 4.375rem;
`

export const StyledFooter = styled.div`
    position: fixed;
    bottom: 0;
    height: 3.062rem;
    width: 100vw;
    
    display: flex;
    justify-content: space-around;
    align-items: center;

    background: white;
    border-top: 1px solid #d0d0d0;

    &>*{
        width: 7.5rem;
        height: 3.062rem;
        padding: 0.688rem 2.875rem 0.688rem 2.938rem;
        border: none;
        background: none;
    }

    img {
        width: 1.688rem;
        height: 1.688rem;
        object-fit: contain;
    }
`