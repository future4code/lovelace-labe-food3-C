import styled from "styled-components";
import FormControl from "@material-ui/core/FormControl";

export const StyledForm = styled(FormControl)`
    width: 100vw;
    padding: 1rem 0.503rem 1rem 1.063rem;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &>div {
        height: 3.5rem;
        width: 20.5rem;
    }
`
