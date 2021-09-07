import React from "react"
import useProtectedPage from "../../hooks/useUnprotectedPage";

import {useHistory} from "react-router-dom";
import { MainContainer } from "../ProfilePage/styled";
import ProfileHeader from "../ProfilePage/ProfileHeader";
import { Box, Button } from "@material-ui/core";
import { EditContainer, SaveButtonContainer, TextEditStyle } from "../AdressPage/styled";

const UserInfoPage = () => {
    useProtectedPage()
    const history = useHistory()


    return (
        <MainContainer>
             
            <EditContainer >
             {/* style={{display:'flex',  */}
                        {/* flexDirection:'column',  */}
                        {/* alignItems:'center',  */}
                        {/* gap:'10px', */}
                        {/* width:'100%'}}> */}
            
                        <ProfileHeader page='/profile/edit/user' />
            <TextEditStyle
                required
                id="outlined-required"
                label="Nome"
                defaultValue=""
                variant="outlined"
            />
            <TextEditStyle
                required
                id="outlined-required"
                label="E-mail"
                defaultValue=""
                variant="outlined"
            />
            <TextEditStyle
                required
                id="outlined-required"
                label="CPF"
                type='number'
                // defaultValue=""
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
            
            </EditContainer>
            </MainContainer>
    )
}

export default UserInfoPage