import React from "react"
import useProtectedPage from "../../hooks/useUnprotectedPage";
import {useHistory} from "react-router-dom";
import { Box, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { EditEmailContainer, EditEnderecoContainer, MainContainer } from "./styled";
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import { goToAddress, goToUserInfo } from "../../routes/coordinator";

const ProfilePage = () => {
    useProtectedPage()
    const history = useHistory()

const historico = [
    {
    id: 1,
    descr: 'Pedido 1'
    },
    {
        id: 2,
        descr: 'Pedido 2'
    },
    {
        id: 3,
        descr: 'Pedido 3'
    }
]
const listaHistorico = historico.map((order) => {
    return (
        <ListItem >
            <ListItemText key={order.id} primary={order.descr} />
        </ListItem>
    )
})

const goEditUser = () => {
    goToUserInfo(history)
}
const goEditAddress = () => {
    goToAddress(history)
}
    return (
        <MainContainer>
            
            <EditEmailContainer >
                <Box>
                    <Typography variant="subtitle2">Usuário</Typography>
                    <Typography variant="subtitle2">Email</Typography>
                    <Typography variant="subtitle2">CPF</Typography>
                </Box>
                <EditTwoToneIcon 
                 onClick={goEditUser}
                />
            </EditEmailContainer>
            <EditEnderecoContainer>
                <Box>
                    <Typography variant='subtitle1' style={{color:'#bcbcbc'}}>Endereço Cadastrado</Typography>
                    <Typography variant="subtitle1" color=''>Rua Alessandra Vieira, 22 - Santana </Typography>
                </Box>
                <EditTwoToneIcon 
                onClick={goEditAddress}
                />
            </EditEnderecoContainer>
            <EditEmailContainer >
                <Box style={{width:'100%'}}>
                    <Typography variant='subtitle1' style={{borderBottom:'black 1px solid'}} >Histórico de pedidos</Typography>
                    <List component="nav" aria-label="secondary mailbox folders">
                        {(listaHistorico.length > 0) ? listaHistorico : 
                            <Typography style={{textAlign:'center'}}>Você não realizou nenhum pedido</Typography>}
                    </List>
                </Box>
                
            </EditEmailContainer>
        </MainContainer>
    )
}

export default ProfilePage