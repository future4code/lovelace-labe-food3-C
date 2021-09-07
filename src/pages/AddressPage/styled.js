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
    width: 50%;
`
