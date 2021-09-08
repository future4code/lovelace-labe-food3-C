import React from 'react'
import { StyledContainer, StyledFirstP, StyledSecondP, StyledThirstP } from './styled'
import ClockImage from '../../assets/images/clock.svg'

export default function CardWaitingDelivery(){
    return (
        <StyledContainer>
            <img src={ClockImage} alt='clock' />
            <div>
                <StyledFirstP>Pedido em andamento</StyledFirstP>
                <StyledSecondP>Bulguer Vila Madalena</StyledSecondP>
                <StyledSecondP>SUBTOTAL R$: 67,00</StyledSecondP>
            </div>
        </StyledContainer>
    );
}