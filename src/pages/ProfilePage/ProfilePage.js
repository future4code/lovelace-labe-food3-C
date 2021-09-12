import React, {useContext, useEffect, useState} from "react";
import useProtectedPage from "../../hooks/useUnprotectedPage";
import {useHistory} from "react-router-dom";
import {Box, List, ListItem, ListItemText, Typography} from "@material-ui/core";
import {EditEmailContainer, EditEnderecoContainer, HistoryListContainer, MainContainer} from "./styled";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import {goToAddress, goToUserInfo} from "../../routes/coordinator";
import GlobalContext from "../../global/GlobalContext";
import axios from "axios";
import {BASE_URL} from "../../constants/urls";
import CardOrder from "../../components/CardOrder/CardOrder";
import Loading from "../../components/Loading/Loading";
import Footer from "../../components/Footer/Footer";

const ProfilePage = () => {
    useProtectedPage();
    const history = useHistory();
    const {states, requests} = useContext(GlobalContext);
    const [ordersHistory, setOrderHistory] = useState();
    useEffect(() => {
        getOrdersHistory();
        requests.getProfile();
    }, [requests]);

    const getOrdersHistory = () => {
        const token = localStorage.getItem("token");
        const headers = {
            headers: {
                auth: token
            }
        };
        axios
            .get(`${BASE_URL}/fourFoodA/orders/history`, headers)
            .then((res) => {
                setOrderHistory(res.data.orders);
            })
            .catch((err) => {
                if(err.response){
                    alert(err.response.data.message)
                }
                else {
                    alert("Erro ao atualizar histórico de pedidos");
                }
            });
    };

    const orderList = ordersHistory && ordersHistory.map((order, index) => {
        return (
            <ListItem key={index}>
                <CardOrder
                    restaurant={order.restaurantName}
                    dateCreated={order.createdAt}
                    subTotal={order.totalPrice}
                ></CardOrder>
            </ListItem>
        );
    });

    const goEditUser = () => {
        goToUserInfo(history);
    };
    const goEditAddress = () => {
        goToAddress(history);
    };

    
    return (
        <MainContainer>
            <EditEmailContainer>
                <Box>
                    <Typography variant="subtitle2">{states.userProfile.name}</Typography>
                    <Typography variant="subtitle2">{states.userProfile.email}</Typography>
                    <Typography variant="subtitle2">{states.userProfile.cpf}</Typography>
                </Box>
                <EditTwoToneIcon onClick={goEditUser} />
            </EditEmailContainer>
            <EditEnderecoContainer>
                <Box>
                    <Typography variant="subtitle1" style={{color: "#bcbcbc"}}>
                        Endereço Cadastrado
                    </Typography>
                    <Typography variant="subtitle1" >
                        {states.userProfile.address}
                    </Typography>
                </Box>
                <EditTwoToneIcon onClick={goEditAddress} />
            </EditEnderecoContainer>
            <EditEmailContainer>
            <Box style={{width:'100%'}}>
                    <Typography variant='subtitle1' style={{borderBottom:'black 1px solid'}} >Histórico de pedidos</Typography>
                    <HistoryListContainer>
                    {ordersHistory ? 
                        <List component="nav" aria-label="secondary mailbox folders" >
                            { (orderList.length > 0) ? orderList : 
                            <Typography style={{textAlign:'center'}}>Você não realizou nenhum pedido</Typography>}
                        </List> : <Loading />}
                    </HistoryListContainer>
                </Box>
            </EditEmailContainer>
            <Footer />
        </MainContainer>
    );
};

export default ProfilePage;
