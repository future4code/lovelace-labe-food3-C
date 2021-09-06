import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 10vh;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;

    Button {
        margin-top: 10px;
        border-radius: 2px;
        height: 2.625rem
    }
`

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`

export const SignUpButtonContainer = styled.div`
  width: 80vw;
  max-width: 450px;
`

export const LogoImage = styled.img`
  width: 6.5rem;
  height: 3.625rem;
  margin: 1rem 8rem 2rem;
  object-fit: contain;
`

export const StyledText = styled(Typography)`
  font-size: 1.15em;
  font-weight: 500;
` 
