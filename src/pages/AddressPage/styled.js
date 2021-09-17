import styled from 'styled-components'
// import Typography from '@material-ui/core/Typography'

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 1.5vh;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 10px;
`

export const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;

  Button {
        border-radius: 2px;
        height: 2.625rem
    }
`

export const LogoImage = styled.img`
  width: 6.5rem;
  height: 3.625rem;
  margin: 0 0 2rem;
  object-fit: contain;
  `

// export const StyledText = styled(Typography)`
//   font-size: 1.15em;
//   font-weight: 500;
//   margin-bottom: 5px;
// ` 
