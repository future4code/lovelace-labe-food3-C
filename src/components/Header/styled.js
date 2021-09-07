import styled from "styled-components";

export const StyledMargin = styled.div`
    width: 100vw;
    height: 4.375rem;
`

export const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    height: 3.062rem;
    width: 100vw;   
    border-bottom: 1px solid #d0d0d0;

    button {
        justify-self: left;
        border: none;
        background: none;
        margin-left: 10px;
        margin-top: 1%;
    }

    p {
        width: 5.25rem;
        height: 1.188rem;
        font-family: Roboto;
        font-size: 1rem;
        text-align: center;
        flex-grow: 1;
        margin-right: 11%;
        font-weight: normal;
        color: black;
    }
`