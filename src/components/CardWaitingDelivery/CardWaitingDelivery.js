import React from 'react'
import { StyledContainer, StyledFirstP, StyledSecondP, StyledThirstP } from './styled'
import ClockImage from '../../assets/images/clock.svg'

export default function CardWaitingDelivery({data}){
    return (
        <StyledContainer>
            <img src={ClockImage} alt='clock' />
            <div>
                <StyledFirstP>Pedido em andamento</StyledFirstP>
                <StyledSecondP>{data.waitingRestaurantName}</StyledSecondP>
                <StyledSecondP>SUBTOTAL R$: {data.subtotalToWait}</StyledSecondP>
            </div>
        </StyledContainer>
    );
}