import React from "react"
import useProtectedPage from "../../hooks/useUnprotectedPage";
import {useHistory} from "react-router-dom";
import { Box } from "@material-ui/core";
import { SaveButtonContainer, TextEditStyle, MainContainer } from "./styled";
import Button from '@material-ui/core/Button'


const AddressPage = () => {
    useProtectedPage()
    const history = useHistory()


    return (
         <MainContainer>

            <Box style={{display:'flex',
                        flexDirection:'column',
                        alignItems:'center',
                        gap:'10px',
                        width:'100%'}}>


            <TextEditStyle
                required
                id="outlined-required"
                label="Logradouro"
                defaultValue=""
                variant="outlined"
            />
            <TextEditStyle
                required
                id="outlined-required"
                label="Número"
                defaultValue=""
                variant="outlined"
            />
            <TextEditStyle
                id="outlined-required"
                label="Complemento"
                defaultValue=""
                variant="outlined"
            />
            <TextEditStyle
                required
                id="outlined-required"
                label="Bairro"
                type='number'
                // defaultValue=""
                variant="outlined"
            />
            <TextEditStyle
                required
                id="outlined-required"
                label="Cidade"
                // defaultValue="Rua Alessandra Vieira"
                variant="outlined"
            />
            <TextEditStyle
                required
                id="outlined-required"
                label="Estado"
                // defaultValue="Rua Alessandra Vieira"
                variant="outlined"
            />
            <SaveButtonContainer>
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                    style={{width:'100%'}}
                >
                Salvar
                </Button>
            </SaveButtonContainer>

            </Box>
            </MainContainer>
    )
}

export default AddressPage