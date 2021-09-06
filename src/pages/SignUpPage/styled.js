import styled from 'styled-components'

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 4vh;
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
    }
`

export const LogoImage = styled.img`
  width: 6.5rem;
  height: 3.625rem;
  margin: 1rem 8rem 1rem;
  object-fit: contain;
  `
