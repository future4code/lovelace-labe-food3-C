import { Box } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'


export const MainContainer = styled(Box) `
    display: flex;
    flex-direction: column;
`
export const EditContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
`

export const SaveButtonContainer = styled.div`
  width: 40%;
  max-width: 450px;
  `
export const TextEditStyle = styled(TextField) `
    /* width: 40%; */
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 80vw; */
  /* max-width: 450px; */
  align-items: center;
  margin-bottom: 20px;

    Button {
        margin-top: 10px;
        border-radius: 2px;
        height: 2.625rem
    }
`
