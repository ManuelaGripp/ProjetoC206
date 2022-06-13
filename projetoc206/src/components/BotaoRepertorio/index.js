import { Container } from '@mui/system';
import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';

function BotaoRepertorio(){
    return(

        <Container sx={{
            bgcolor: 'primary.main',
            width:65,
            height: 65,
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center'

        }} ><AddIcon/></Container>


    )
}

export default BotaoRepertorio;