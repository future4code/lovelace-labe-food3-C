import React from "react"
import { Box, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import ArrowBackIosTwoToneIcon from '@material-ui/icons/ArrowBackIosTwoTone'
import { StyleHearder } from "./styled";

const ProfileHeader = (props) => {
    return (
        <Box>
            {props.page === '/profile' && <Typography variant="subtitle2">Meu Perfil</Typography>}
            
            {props.page === '/profile/edit/adress' && 
                <StyleHearder >
                    <ArrowBackIosTwoToneIcon style={{width:'10%'}} />
                    <Typography style={{width:'90%', textAlign:'center'}} variant="subtitle2">Endereço</Typography>
                </StyleHearder>}
            {props.page === '/profile/edit/user' && 
                <StyleHearder >
                    <ArrowBackIosTwoToneIcon style={{width:'10%'}} />
                    <Typography variant="subtitle2">Editar</Typography>
                </StyleHearder>
            }
           
        </Box>
    )
}

export default ProfileHeader