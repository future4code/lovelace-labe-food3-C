import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { CardOrderStyles } from './styled'

export default function CardOrder(props) {
    const date = (milesecunds) => {
        const data = new Date(milesecunds)
        const dia  = data.getDate().toString()
        const diaF = (dia.length === 1) ? '0'+dia : dia
        // const mes  = (data.getMonth()+1).toString()
        const month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][data.getMonth()];
        const anoF = data.getFullYear()
    return diaF + " de " + month + " de "+ anoF
    }

  return (
    <CardOrderStyles >
      <CardContent>
        <Typography variant="h5" component="h2" color="primary">
          {props.restaurant}
        </Typography>
        <Typography variant="body2" component="p">
            {date(props.dateCreated)}
        </Typography>
        <Typography variant="h5" component="h2" >
          <strong>SUBTOTAL {props.subTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
        </Typography>
      </CardContent>
    </CardOrderStyles>
  );
}
