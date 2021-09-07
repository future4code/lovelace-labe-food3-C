import styled from 'styled-components'
import { secondaryColor } from '../../constants/colors'


export const MainContainer = styled.div `
  display: flex;
  //flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`
export const EditEmailContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  background-color: #fff;
  padding: 10px;
  /* border-top: #dfdfdf 1px solid; */
`
export const EditEnderecoContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #eee;
  padding: 10px;
`
export const MainCont2 = styled.div `
  display: flex; 
  flex-Direction: column;
  align-Items: center;
  margin: 10px auto;
`

export const StyleHearder = styled.div `
  display: flexbox;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
`
